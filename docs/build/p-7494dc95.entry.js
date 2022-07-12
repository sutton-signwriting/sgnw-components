/*!
 * The Sutton SignWriting Web Components
 */
import{r as s,c as t,h as i,H as e,g as o}from"./p-98376542.js";import{f as n}from"./p-429cda57.js";import{s as r}from"./p-e7a33787.js";const l=class{constructor(t){s(this,t),this.sgnw=window.sgnw,this.items=[]}parseText(s){this.items=n.parse.text(s).map((s=>{let t=n.info(s);return t.text=s,t}))}connectedCallback(){if(this.vp?this.parseText(this.vp):this.vp=this.el.innerHTML,!this.sgnw){let s=this;window.addEventListener("sgnw",(function t(){s.sgnw=window.sgnw,window.removeEventListener("sgnw",t,!1)}),!1)}}render(){const s=t(this.el),o=r.compose({colorize:this.colorize,detail:s.detail});return i(e,{vp:this.vp},i("span",{class:"outside"},i("span",{class:"middle"},i("span",{class:"inside"},this.items.map((t=>{let e,n,r,l,a,d;return"sign"==t.segment?(e=s.zoom*t.zoom,n=t.padding*e,r=t.width*e+2*n,l=t.height*e+2*n,a=(1e3-2*t.minX-t.width)*e-150*s.zoom*t.lane,d=Math.max(0,20*e-n),i("fsw-sign",{styling:o,style:{"font-size":30*s.zoom+"px",width:r+"px",height:l+"px","margin-right":(a>0?a:0)+"px","border-left":(a<0?-a:0)+"px solid transparent",padding:d+"px"}},t.text)):"symbol"==t.segment?(e=s.zoom*t.zoom,n=t.padding*e,r=t.width*e+2*n,l=t.height*e+2*n,d=Math.max(0,20*e-n),i("fsw-symbol",{styling:o,style:{"font-size":30*s.zoom+"px",width:r+"px",height:l+"px","padding-bottom":d+"px"}},t.text)):(console.log("other"),i("div",null,t.text))}))))))}get el(){return o(this)}static get watchers(){return{vp:["parseText"]}}};l.style=":host{writing-mode:vertical-lr;border-right:1px solid blue;height:100%}:host svg{display:block}:host span.outside{font-size:0%;line-height:0%;border-left:1px solid blue;vertical-align:top}:host span.middle{vertical-align:bottom}:host span.inside{border-left:1px dashed red}fsw-sign,fsw-symbol{writing-mode:horizontal-tb;display:inline-block;vertical-align:middle;box-sizing:content-box}";export{l as fsw_vp}