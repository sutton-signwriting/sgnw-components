//

import { Watch, Component, Element, State, Prop, Listen, Host, h } from '@stencil/core';

// @ts-ignore
import { key2id, key2swu, id2key, id2swu, swu2id, swu2fsw } from '@sutton-signwriting/core/convert/convert.min.mjs';

// @ts-ignore
import { parse as parseFSW} from '@sutton-signwriting/core/fsw/fsw.min.mjs';

// @ts-ignore
import { parse as parseSWU } from '@sutton-signwriting/core/swu/swu.min.mjs';

// @ts-ignore
import { parse as parseStyle } from '@sutton-signwriting/core/style/style.min.mjs';

// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.min.mjs';

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
    if (newValue!=oldValue) {
      var fsw = parseFSW.symbol(newValue);
      if (fsw && fsw.symbol){
        this.iid = key2id(fsw.symbol); 
        this.swu = key2swu(fsw.symbol);
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

  /** Styling Object for symbol */
  @Prop({mutable: true, reflect: true}) styling: object;
  @Watch('styling')
  stylingUpdate(newValue: object, oldValue: object) {
    console.log(newValue,oldValue);
  }

  @State() sgnw: boolean = window.sgnw;

  @Listen('sgnw', { target: 'window'})
  onSgnw() {
    this.sgnw = window.sgnw;
  }

  connectedCallback(){
    var iid, fsw, swu, styling;
    if (this.fsw){
      fsw = this.fsw;
    } else if (this.swu){
      swu = this.swu;
    } else if (this.iid){
      iid = this.iid;
    }
    if (this.styling){
      styling = this.styling;
    }
    if ( ! (iid || fsw || swu)){
      var contents = this.el.innerHTML;
      var fswP = parseFSW.symbol(contents);
      var swuP = parseSWU.symbol(contents);
      var iidP = parseInt(contents);
      if (fswP && fswP.symbol){
        fsw = fswP.symbol + (fswP.style?fswP.style:"");
      } else if (swuP && swuP.symbol){
        swu = swuP.symbol;
        swu = swuP.symbol + (swuP.style?swuP.style:"");
      } else if (iidP > 0 && iidP < 65535){
        iid = iidP
      }
    }
    if (fsw) {
      this.fsw = fsw;
      this.fswUpdate(this.fsw,"")
    } else if (swu) {
      this.swu = swu;
      this.swuUpdate(this.swu,"")
    } else {
      if (!iid) {
        iid = 0;
      }
      this.iid = iid;
      this.iidUpdate(this.iid.toString(),"0")
    }
    if (styling){
      this.styling = styling;
    }
  }

  render() {
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;

    return (
      <Host iid={this.iid} fsw={this.fsw} swu={this.swu} styling={this.styling} innerHTML={this.sgnw?symbolSvg(this.fsw):''}>
        <slot></slot>
      </Host>
    )
  }
}
