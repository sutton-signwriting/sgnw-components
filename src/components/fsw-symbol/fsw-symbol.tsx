//
import { Component, Element, State, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { parse as parseFSW, compose as composeFSW } from '@sutton-signwriting/core/fsw/fsw';

// @ts-ignore
import { parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style';

// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

import { rgb2hex, rgba2hex } from '../../global/global';

@Component({
  tag: 'fsw-symbol',
  styleUrl: 'fsw-symbol.css',
  shadow: true
})

export class FswSymbol {

  @Element() el: HTMLElement; //this.el

  /** FSW character for symbol */
  @Prop({mutable: true, reflect: true}) symbol: string;
  /** Style String for symbol */
  @Prop({mutable: true, reflect: true}) styling: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
    if (!this.symbol){
      let symbol = parseFSW.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = symbol.style;
      }
      symbol.style = "";
      this.symbol=composeFSW.symbol(symbol)
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
    let styleStr = '';
    if (this.styling){
      styleStr = this.styling;
    } else {
      let css = window.getComputedStyle(this.el, null);
      const styleObj = {
        "background": rgba2hex(css.getPropertyValue("background-color")),
        "detail": [
          rgb2hex(css.getPropertyValue("color")),
          rgb2hex(css.getPropertyValue("background-color"))
        ],
        "zoom": parseInt(css.getPropertyValue("font-size").slice(0,-2))/30
      }
      styleStr = composeStyle(styleObj)
    }
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    return (
      <Host symbol={this.symbol} styling={this.styling} innerHTML={this.sgnw?symbolSvg(this.symbol + (styleStr)):''}>
        <slot></slot>
      </Host>
    )
  }
}
