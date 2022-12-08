
import { Component, Element, State, Prop, Host, h } from '@stencil/core';

import { parse as parseSWU, compose as composeSWU } from '@sutton-signwriting/core/swu/swu';

import { parse as parseStyle, compose as composeStyle, merge as mergeStyle } from '@sutton-signwriting/core/style/style';

import { signSvg } from '@sutton-signwriting/font-ttf/swu/swu';

import { cssValues } from '../../global/global';

@Component({
  tag: 'sgnw-sign',
  styleUrl: 'sgnw-sign.css',
  shadow: true
})

export class SgnwSign {

  @Element() el: HTMLElement; //this.el

  /** SWU string for sign */
  @Prop({mutable: true, reflect: true}) sign: string;
  /** Style String for sign */
  @Prop({mutable: true, reflect: true}) styling: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
    if (!this.sign){
      let sign = parseSWU.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling =composeStyle(mergeStyle(parseStyle(sign.style),parseStyle(this.styling)));
      }
      sign.style = "";
      this.sign=composeSWU.sign(sign)
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
      <Host sign={this.sign} styling={this.styling} innerHTML={this.sgnw?signSvg(this.sign + (styleStr)):''}>
        <slot></slot>
      </Host>
    )
  }
}
