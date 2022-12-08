import { Component, Element, State, Prop, Host, h } from '@stencil/core';

import { parse as parseFSW } from '@sutton-signwriting/core/fsw/fsw';

import { parse as parseStyle, compose as composeStyle, merge as mergeStyle } from '@sutton-signwriting/core/style/style';

import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

import { cssValues } from '../../global/global';

@Component({
  tag: 'fsw-symbol',
  styleUrl: 'fsw-symbol.css',
  shadow: true
})

export class FswSymbol {

  @Element() el: HTMLElement; //this.el

  /** FSW key for symbol */
  @Prop({mutable: true, reflect: true}) symbol: string;
  /** Style String for symbol */
  @Prop({mutable: true, reflect: true}) styling: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
    if (!this.symbol){
      let symbol = parseFSW.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = composeStyle(mergeStyle(parseStyle(symbol.style),parseStyle(this.styling)));
      }
      this.symbol=symbol.symbol;
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
