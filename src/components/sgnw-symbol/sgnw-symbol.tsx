//

import { Watch, Component, Element, State, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { key2id, key2swu, id2key, id2swu, swu2id, swu2fsw } from '@sutton-signwriting/core/convert/convert.min.mjs';

// @ts-ignore
import { parse as parseFSW} from '@sutton-signwriting/core/fsw/fsw.min.mjs';

// @ts-ignore
import { parse as parseSWU } from '@sutton-signwriting/core/swu/swu.min.mjs';

// @ts-ignore
import { parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style.min.mjs';

// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.min.mjs';

import { rgb2hex, rgba2hex } from '../../global/global';

@Component({
  tag: 'sgnw-symbol',
  styleUrl: 'sgnw-symbol.css',
  shadow: true
})

export class SgnwSymbol {

  @Element() el: HTMLElement; //this.el

  /** ISWA 2010 ID  */
  @Prop({mutable: true, reflect: true}) iid: number;
  @Watch('iid')
  iidUpdate(newValue: string, oldValue: string) {
    var iid = parseInt(newValue);
    if (!isNaN(iid)){
      if (newValue!=oldValue) {
        if (iid > 0 && iid < 65535) {
          this.fsw = id2key(iid); 
          this.swu = id2swu(iid);
        }
      }
    } else {
      this.iid=0
    }
  }

  /** Formal SignWriting in ASCII (FSW) for symbol with optional style string */
  @Prop({mutable: true, reflect: true}) fsw: string;
  @Watch('fsw')
  fswUpdate(newValue: string, oldValue: string) {
    const len = 6;
    console.log("fsw",this.fsw, "-", newValue, "-", oldValue)
    const tooLong = typeof newValue === 'string' && newValue.length > len;
    if (tooLong){
      this.fsw = this.fsw.substring(0,len);
    } else {
      if (newValue!=oldValue) {
        console.log("fswU",this.fsw, "-", newValue, "-", oldValue)
        var fsw = parseFSW.symbol(newValue);
        if (fsw && fsw.symbol){
          this.fsw = fsw.symbol
          this.iid = key2id(fsw.symbol); 
          this.swu = key2swu(fsw.symbol);
        }
      }
    }
  }

  /** SignWriting in Unicode (SWU) for symbol with optional style string */
  @Prop({mutable: true, reflect: true}) swu: string;
  @Watch('swu')
  swuUpdate(newValue: string, oldValue: string) {
    if (newValue!=oldValue) {
      var swu = parseSWU.symbol(newValue);
      if (swu && swu.symbol){
        this.iid = swu2id(swu.symbol); 
        this.fsw = swu2fsw(swu.symbol);
      }
    }
  }

  /** Style String for symbol */
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
    } else {
      if (!this.iid) {
        this.iid = 0;
      }
      this.iidUpdate(this.iid.toString(),"0")
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
      <Host iid={this.iid} fsw={this.fsw} swu={this.swu} styling={this.styling} innerHTML={this.sgnw?symbolSvg(this.fsw + (styleStr)):''}>
        <slot></slot>
      </Host>
    )
  }
}
