//

import { Watch, Component, Element, State, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { fsw2swu, swu2fsw } from '@sutton-signwriting/core/convert/convert.min.mjs';

// @ts-ignore
import { parse as parseFSW, compose as composeFSW} from '@sutton-signwriting/core/fsw/fsw.min.mjs';

// @ts-ignore
import { parse as parseSWU, compose as composeSWU } from '@sutton-signwriting/core/swu/swu.min.mjs';

// @ts-ignore
import { parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style.min.mjs';

// @ts-ignore
import { signSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.min.mjs';

import { rgb2hex, rgba2hex } from '../../global/global';

@Component({
  tag: 'sgnw-sign',
  styleUrl: 'sgnw-sign.css',
  shadow: true
})

export class SgnwSign {

  @Element() el: HTMLElement; //this.el

  /** Formal SignWriting in ASCII (FSW) for sign with optional style string */
  @Prop({mutable: true, reflect: true}) fsw: string;
  @Watch('fsw')
  fswUpdate(newValue: string, oldValue: string) {
    if (newValue!=oldValue) {
      var fsw = parseFSW.sign(newValue);
      if (fsw && fsw.box){
        delete fsw.style;
        this.fsw = composeFSW.sign(fsw)
        this.swu = fsw2swu(this.fsw);
      }
    }
  }

  /** SignWriting in Unicode (SWU) for sign with optional style string */
  @Prop({mutable: true, reflect: true}) swu: string;
  @Watch('swu')
  swuUpdate(newValue: string, oldValue: string) {
    if (newValue!=oldValue) {
      var swu = parseSWU.sign(newValue);
      if (swu && swu.box){
        delete swu.style;
        this.swu = composeSWU.sign(swu)
        this.fsw = swu2fsw(this.swu);
      }
    }
  }

  /** Style String for sign */
  @Prop({mutable: true, reflect: true}) styling: string;

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
    if (this.fsw) {
      this.fswUpdate(this.fsw,"")
    } else if (this.swu) {
      this.swuUpdate(this.swu,"")
    }
  }

  render() {
    let styleStr = '';
    if (this.styling){
      styleStr = this.styling;
    } else {
      let css = window.getComputedStyle(this.el, null);
      const styleObj = {
        "padding": css.getPropertyValue("padding"),
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
      <Host fsw={this.fsw} swu={this.swu} styling={this.styling} innerHTML={this.sgnw?signSvg(this.fsw + (styleStr)):''}>
        <slot></slot>
      </Host>
    )
  }
}
