//
import { Component, Element, Prop, State, Host, h } from '@stencil/core';

import { compose as composeStyle } from '@sutton-signwriting/core/style/style';

import { symbolSvg, signSvg } from '@sutton-signwriting/font-ttf/swu/swu';

import { cssValues } from '../../global/global';


@Component({
  tag: 'sgnw-button',
  styleUrl: 'sgnw-button.css',
  scoped: true
})

export class SgnwButton {

  @Element() el: HTMLElement; //this.el

  /** SWU character for symbol */
  @Prop({mutable: true, reflect: true}) symbol: string;
  /** SWU string for sign */
  @Prop({mutable: true, reflect: true}) sign: string;
  /** SVG icon */
  @Prop({mutable: true, reflect: true}) svg: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
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
    const styleStr = composeStyle(Object.assign(cssValues(this.el),{background:"transparent",zoom:"x"}));
    let svg = '';
    if (this.symbol) {
      svg = this.sgnw?symbolSvg(this.symbol + styleStr):'';
    } else if (this.sign) {
      svg = this.sgnw?signSvg(this.sign + styleStr):''
    } else if (this.svg) {
      svg = this.svg;
    }
    return (
      <Host innerHTML={svg}></Host>
    )
  }
}
