/*!
 * The Sutton SignWriting Web Components
 */
import{r as t,h as o,g as s,H as i,d as r}from"./p-7486a92a.js";import{s as e}from"./p-2f35eb12.js";import{f as n}from"./p-9abef68c.js";import{c as a}from"./p-79ff7b68.js";import{d as l}from"./p-e945de0b.js";const c=class{constructor(o){t(this,o),this.sgnw=window.sgnw}connectedCallback(){if(!this.sgnw){let t=this;window.addEventListener("sgnw",(function o(){t.sgnw=window.sgnw,window.removeEventListener("sgnw",o,!1)}),!1)}}render(){const t=e.compose(Object.assign(a(this.el),{background:"transparent",zoom:"x"}));let s="";return this.symbol?s=this.sgnw?n.symbolSvg(this.symbol+t):"":this.sign?s=this.sgnw?n.signSvg(this.sign+t):"":this.svg&&(s=this.svg),o(i,{innerHTML:s})}get el(){return s(this)}};c.style='*.sc-fsw-button,*.sc-fsw-button::before,*.sc-fsw-button::after{box-sizing:border-box}.sc-fsw-button-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-fsw-button-h,[data-theme="dark"] .sc-fsw-button-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-fsw-button{font-family:SuttonSignWritingOneD !important}.sc-fsw-button-h{display:inline-block;position:relative;border-radius:5px;color:var(--font-color);background-color:var(--button-color);width:5rem;height:4rem}.sc-fsw-button-h:hover{background-color:var(--button-hover)}.sc-fsw-button-s>svg{position:absolute;top:10%;bottom:10%;left:5%;right:5%;margin:auto;max-width:90%;max-height:80%;cursor:default}.sc-fsw-button-s>svg g text.sym-line,.sc-fsw-button-s>svg path{fill:var(--font-color) !important}.sc-fsw-button-s>svg g text.sym-fill{fill:var(--button-color) !important}.sc-fsw-button-h:hover.sc-fsw-button-s>svg g text.sym-fill{fill:var(--button-hover) !important}';const f=class{constructor(o){t(this,o),this.paletteSymbolClick=r(this,"paletteSymbolClick",7),this.paletteSymbolDrop=r(this,"paletteSymbolDrop",7),this.sgnw=window.sgnw}paletteSymbolClickHandler(){this.paletteSymbolClick.emit(this.symbol)}paletteSymbolDropHandler({},t){this.paletteSymbolDrop.emit({encoding:"fsw",symbol:this.symbol,x:t.pageX,y:t.pageY}),this.el.style.top="0",this.el.style.left="0"}connectedCallback(){if(!this.sgnw){let t=this;window.addEventListener("sgnw",(function o(){t.sgnw=window.sgnw,window.removeEventListener("sgnw",o,!1)}),!1)}}componentDidLoad(){this.draggie=new l(this.el),this.draggie.on("staticClick",this.paletteSymbolClickHandler.bind(this)),this.draggie.on("dragEnd",this.paletteSymbolDropHandler.bind(this))}render(){return o(i,{symbol:this.symbol,innerHTML:this.sgnw?n.symbolSvg(this.symbol):""})}get el(){return s(this)}};f.style='*.sc-fsw-palette-symbol,*.sc-fsw-palette-symbol::before,*.sc-fsw-palette-symbol::after{box-sizing:border-box}.sc-fsw-palette-symbol-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-fsw-palette-symbol-h,[data-theme="dark"] .sc-fsw-palette-symbol-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-fsw-palette-symbol{font-family:SuttonSignWritingOneD !important}.sc-fsw-palette-symbol-h{border:1px solid var(--font-color);cursor:move;font-size:30px;color:var(--font-color);background:var(--bg-color)}.is-dragging.sc-fsw-palette-symbol-h{border:0px;z-index:1;text-align:initial;vertical-align:top;line-height:0px;font-size:0px;background:transparent}.sc-fsw-palette-symbol-s>svg{position:absolute;display:block;top:2.5%;bottom:2.5%;left:2.5%;right:2.5%;margin:auto;max-width:95%;max-height:95%;cursor:default}.sc-fsw-palette-symbol-h.is-dragging.sc-fsw-palette-symbol-s>svg{top:0;bottom:initial;left:0;right:initial;margin:0;max-width:initial;max-height:initial}.sc-fsw-palette-symbol-s>svg g text.sym-line{fill:var(--font-color) !important}.sc-fsw-palette-symbol-s>svg g text.sym-fill{fill:var(--bg-color) !important}';export{c as fsw_button,f as fsw_palette_symbol}