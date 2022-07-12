//
import { Component, Element, State, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { parse as parseSWU, compose as composeSWU } from '@sutton-signwriting/core/swu/swu';

// @ts-ignore
import { parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style';

// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/swu/swu';

import { cssValues, mergeStyle } from '../../global/global';

@Component({
  tag: 'sgnw-symbol',
  styleUrl: 'sgnw-symbol.css',
  shadow: true
})

export class SgnwSymbol {

  @Element() el: HTMLElement; //this.el

  /** SWU character for symbol */
  @Prop({mutable: true, reflect: true}) symbol: string;
  /** Style String for symbol */
  @Prop({mutable: true, reflect: true}) styling: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
    if (!this.symbol){
      let symbol = parseSWU.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = composeStyle(mergeStyle(parseStyle(symbol.style),parseStyle(this.styling)));
      }
      symbol.style = "";
      this.symbol=composeSWU.symbol(symbol)
    }
    if (!this.sgnw){
      let self = this;
      function handleSgnw(){
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);  
      }
      window.addEventListener('sgnw', handleSgnw, false);
    }
  }

  render() {
    const styleStr = composeStyle(mergeStyle(cssValues(this.el), parseStyle(this.styling)));

    return (
      <Host symbol={this.symbol} styling={this.styling} innerHTML={this.sgnw?symbolSvg(this.symbol + (styleStr)):''}>
        <slot></slot>
      </Host>
    )
  }
}
