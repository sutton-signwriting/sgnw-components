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

@Component({
  tag: 'sgnw-symbol',
  styleUrl: 'sgnw-symbol.css',
  shadow: true
})
 
export class SgnwSymbol {

  @Element() el: HTMLElement; //this.el

  /** Styling Object for symbol */
  @Prop({mutable: true, reflect: true}) styling: string;
  @Watch('styling')
  stylingUpdate(newValue: string, oldValue: string){
    console.log("watching");
    console.log(newValue,oldValue);
    console.log(this.styling);
  }

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
    if (newValue!=oldValue) {
      var fsw = parseFSW.symbol(newValue);
      if (fsw && fsw.symbol){
        this.iid = key2id(fsw.symbol); 
        this.swu = key2swu(fsw.symbol);
        if (fsw.style){
          this.styling = fsw.style
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
        if (swu.style){
          this.styling = swu.style;
        }
      }
    }
  }

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
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    console.log("render",this.styling)

    return (
      <Host iid={this.iid} fsw={this.fsw} swu={this.swu} styling={this.styling} innerHTML={this.sgnw?symbolSvg(this.fsw + (this.styling)):''}>
        <slot></slot>
      </Host>
    )
  }
}
