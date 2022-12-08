/*!
 * The Sutton SignWriting Web Components
 */
import{r as t,h as o,g as s,H as n,d as i}from"./p-7486a92a.js";import{s as r}from"./p-2f35eb12.js";import{s as e}from"./p-3933ab8e.js";import{c as a}from"./p-79ff7b68.js";import{d as l}from"./p-e945de0b.js";const g=class{constructor(o){t(this,o),this.sgnw=window.sgnw}connectedCallback(){if(!this.sgnw){let t=this;window.addEventListener("sgnw",(function o(){t.sgnw=window.sgnw,window.removeEventListener("sgnw",o,!1)}),!1)}}render(){const t=r.compose(Object.assign(a(this.el),{background:"transparent",zoom:"x"}));let s="";return this.symbol?s=this.sgnw?e.symbolSvg(this.symbol+t):"":this.sign?s=this.sgnw?e.signSvg(this.sign+t):"":this.svg&&(s=this.svg),o(n,{innerHTML:s})}get el(){return s(this)}};g.style='*.sc-sgnw-button,*.sc-sgnw-button::before,*.sc-sgnw-button::after{box-sizing:border-box}.sc-sgnw-button-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-sgnw-button-h,[data-theme="dark"] .sc-sgnw-button-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-sgnw-button{font-family:SuttonSignWritingOneD !important}.sc-sgnw-button-h{display:inline-block;position:relative;border-radius:5px;color:var(--font-color);background-color:var(--button-color);width:5rem;height:4rem}.sc-sgnw-button-h:hover{background-color:var(--button-hover)}.sc-sgnw-button-s>svg{position:absolute;top:10%;bottom:10%;left:5%;right:5%;margin:auto;max-width:90%;max-height:80%;cursor:default}.sc-sgnw-button-s>svg g text.sym-line,.sc-sgnw-button-s>svg path{fill:var(--font-color) !important}.sc-sgnw-button-s>svg g text.sym-fill{fill:var(--button-color) !important}.sc-sgnw-button-h:hover.sc-sgnw-button-s>svg g text.sym-fill{fill:var(--button-hover) !important}';const c=class{constructor(o){t(this,o),this.paletteSymbolClick=i(this,"paletteSymbolClick",7),this.paletteSymbolDrop=i(this,"paletteSymbolDrop",7),this.sgnw=window.sgnw}paletteSymbolClickHandler(){this.paletteSymbolClick.emit(this.symbol)}paletteSymbolDropHandler({},t){this.paletteSymbolDrop.emit({encoding:"swu",symbol:this.symbol,x:t.pageX,y:t.pageY}),this.el.style.top="0",this.el.style.left="0"}connectedCallback(){if(!this.sgnw){let t=this;window.addEventListener("sgnw",(function o(){t.sgnw=window.sgnw,window.removeEventListener("sgnw",o,!1)}),!1)}}componentDidLoad(){this.draggie=new l(this.el),this.draggie.on("staticClick",this.paletteSymbolClickHandler.bind(this)),this.draggie.on("dragEnd",this.paletteSymbolDropHandler.bind(this))}render(){return o(n,{symbol:this.symbol,innerHTML:this.sgnw?e.symbolSvg(this.symbol):""})}get el(){return s(this)}};c.style='*.sc-sgnw-palette-symbol,*.sc-sgnw-palette-symbol::before,*.sc-sgnw-palette-symbol::after{box-sizing:border-box}.sc-sgnw-palette-symbol-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-sgnw-palette-symbol-h,[data-theme="dark"] .sc-sgnw-palette-symbol-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-sgnw-palette-symbol{font-family:SuttonSignWritingOneD !important}.sc-sgnw-palette-symbol-h{border:1px solid var(--font-color);cursor:move;font-size:30px;color:var(--font-color);background:var(--bg-color)}.is-dragging.sc-sgnw-palette-symbol-h{border:0px;z-index:1;text-align:initial;vertical-align:top;line-height:0px;font-size:0px;background:transparent}.sc-sgnw-palette-symbol-s>svg{position:absolute;display:block;top:2.5%;bottom:2.5%;left:2.5%;right:2.5%;margin:auto;max-width:95%;max-height:95%;cursor:default}.sc-sgnw-palette-symbol-h.is-dragging.sc-sgnw-palette-symbol-s>svg{top:0;bottom:initial;left:0;right:initial;margin:0;max-width:initial;max-height:initial}.sc-sgnw-palette-symbol-s>svg g text.sym-line{fill:var(--font-color) !important}.sc-sgnw-palette-symbol-s>svg g text.sym-fill{fill:var(--bg-color) !important}';export{g as sgnw_button,c as sgnw_palette_symbol}