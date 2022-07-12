//
import { Component, Element, State, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { parse as parseFSW, compose as composeFSW } from '@sutton-signwriting/core/fsw/fsw';

// @ts-ignore
import { parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style';

// @ts-ignore
import { signSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

import { cssValues, mergeStyle } from '../../global/global';

@Component({
  tag: 'fsw-sign',
  styleUrl: 'fsw-sign.css',
  shadow: true
})

export class FswSign {

  @Element() el: HTMLElement; //this.el

  /** FSW string for sign */
  @Prop({mutable: true, reflect: true}) sign: string;
  /** Style String for sign */
  @Prop({mutable: true, reflect: true}) styling: string;

  @State() sgnw: boolean = window.sgnw;

  connectedCallback(){
    if (!this.sign){
      let sign = parseFSW.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling = composeStyle(mergeStyle(parseStyle(sign.style),parseStyle(this.styling)));
      }
      sign.style = "";
      this.sign=composeFSW.sign(sign)
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
