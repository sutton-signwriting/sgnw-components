//
import { Component, Element, Prop, State, Watch, Listen, Host, h } from '@stencil/core';

import { swu2key, key2id, key2swu } from '@sutton-signwriting/core/convert/convert';

import { iswa2010SWU, padArray, padArrayInner, hasSize } from '../../global/global';

import { HomeIcon, ChevronUpIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '../../global/icons';

@Component({
  tag: 'sgnw-palette',
  styleUrl: 'sgnw-palette.css',
  scoped: true
})

export class SgnwPalette {

  @Element() el: HTMLElement; //this.el

  /** orientation of palette */
  @Prop() orientation: "horizontal" | "vertical" = "vertical";

  major: number = 10;
  minor: number = 3;
  total: number = 30;

  /** size of palette */
  @Prop() size: "small" | "medium" | "large" = "small";
  @Watch('size')
  parseSizeProp(newValue: string) {
    switch (newValue) {
      case "large":
        this.major = 16
        this.minor = 6;
        break;
      case "medium":
        this.major = 10
        this.minor = 6;
        break;
      case "small":
      default:
        this.major = 10
        this.minor = 3;
        break;
    }
    this.total = this.major * this.minor;
  }

  /** set of symbols */
  @Prop() alphabet: object | string = iswa2010SWU;

  /** top level symbol selection */
  @Prop({mutable: true, reflect: true}) group: string = null;
  @Watch('group')
  watchGroup() {
    if (this.group == null && this.base !=null) {
      this.base = null;
    } else {
      this.setPalette();
    }
  }

  /** mid level symbol selection */
  @Prop({mutable: true, reflect: true}) base: string = null;
  @Watch('base')
  watchBase() {
    this.setPalette();
  }

  /** flag for small palette */
  @Prop({mutable: true, reflect: true}) more: boolean = false;
  @Watch('more')
  watchMore() {
    this.setPalette();
  }
  hasMore = false;

  /** flag for small and medium palette */
  @Prop({mutable: true, reflect: true}) lower: boolean = false;
  @Watch('lower')
  watchLower() {
    this.setPalette();
  }
  hasLower = false;

  @State() palette: string[] = [];

  getPaletteAll(){
    let keys = Object.keys(this.alphabet);
    if (this.size == 'large') {
      keys = padArrayInner(keys,10,16);
    }
    keys = padArray(keys,this.total);
    this.more = false;
    this.hasMore = false;
    this.lower = false;
    this.hasLower = false;
    return keys;
  }
  getPaletteGroup(){
    let keys = this.alphabet[this.group];
    if (this.size == 'large') {
      keys = padArrayInner(keys,10,16);
    }
    keys = padArray(keys,this.total);
    if (keys.length > this.total){
      this.hasMore = true;
      if (!this.more){
        keys = keys.slice(0,this.total);
      } else {
        keys = keys.slice(this.total, this.total*2);
      }
    } else {
      this.more = false;
      this.hasMore = false;
    }
    this.lower = false;
    this.hasLower = false;
    return keys;
  }
  getPaletteBase(){
    const base = swu2key(this.base).slice(0,4);
    let key:string;
    const lower1 = base + "08";
    const lower2 = base + "18";
    const more1 = base + "30";
    let r1 = 0;
    let r2 = 16;
    let f1 = 0;
    let f2 = 6;
    
    if (this.size != "large"){
      this.hasLower = (hasSize(key2id(lower1)) || hasSize(key2id(lower2)));
      if (!this.lower){
        r2 = 8;
      } else {
        r1 = 8;
      }
    }
    if (this.size == "small"){
      this.hasMore = hasSize(key2id(more1));
      if (!this.more){
        f2 = 3;
      } else {
        f1 = 3;
      }
    }
    let keys = [];
    for (var f=f1;f<f2;f++){
      for (var r=r1;r<r2;r++){
        key=base + f + r.toString(16);
        keys.push(key2swu(key));
      }
    }
    if (this.size != "large"){
      keys = padArrayInner(keys,8,10);
    }
    return keys;
  }
  setPalette(){
    let palette:string[];
    switch (true){
      case !this.group:
        palette = this.getPaletteAll();
        break;
      case !!this.group && !!this.base:
        palette = this.getPaletteBase();
        break;
      case !!this.group:
        palette = this.getPaletteGroup();
        break;
    }
    this.palette = [...palette];
  }
  
  @Listen('paletteSymbolClick')
  paletteSymbolClickHandler(event: CustomEvent<string>) {
    switch (true) {
      case !this.group:
        this.group = event.detail;
        break;
      case !!this.group && !!this.base:
        break;
      case !!this.group:
        this.base = event.detail;
        this.more = false;
    }
  }

  componentWillLoad() {
    if (typeof this.alphabet == "string"){
      this.alphabet = JSON.parse(this.alphabet);
    }
    this.parseSizeProp(this.size);
    this.setPalette();
  }

  render() {
    return (
      <Host class={this.orientation + " " + this.size}>
        <nav>
          <sgnw-button svg={HomeIcon} onClick={() => {this.group=null;}}></sgnw-button>
          {this.group?<sgnw-button svg={ChevronUpIcon} onClick={() => {if (this.base) {this.base=null;this.more=null;} else {this.group=null};}}></sgnw-button>:<div></div>}
          {this.hasMore?<sgnw-button svg={this.more?ArrowLeftIcon:ArrowRightIcon} onClick={() => {this.more = !this.more}}></sgnw-button>:(this.size=="small"?<div></div>:null)}
          {this.hasLower?<sgnw-button svg={this.lower?ArrowUpIcon:ArrowDownIcon} onClick={() => {this.lower = !this.lower}}></sgnw-button>:(this.size!="large"?<div></div>:null)}
        </nav>
        <main>
          {this.palette.map( key => <sgnw-palette-symbol symbol={key}></sgnw-palette-symbol> )}
        </main>
      </Host>
    )
  }
}
