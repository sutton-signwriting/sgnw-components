/*!
 * The Sutton SignWriting Web Components
 */
import{r as s,c as t,h as i,H as n,g as e}from"./p-61fe031a.js";import{f as o,a as r}from"./p-6e94f2e1.js";import{s as h}from"./p-f1e475cf.js";const a=class{constructor(t){s(this,t),this.sgnw=window.sgnw}connectedCallback(){if(!this.sign){let s=o.parse.sign(this.el.innerHTML);s.style&&(this.styling=s.style),s.style="",this.sign=o.compose.sign(s)}if(!this.sgnw){let s=this;window.addEventListener("sgnw",(function t(){s.sgnw=window.sgnw,window.removeEventListener("sgnw",t,!1)}),!1)}}render(){let s="";if(this.styling)s=this.styling;else{const i=t(this.el);s=h.compose(i)}return i(n,{sign:this.sign,styling:this.styling,innerHTML:this.sgnw?r.signSvg(this.sign+s):""},i("slot",null))}get el(){return e(this)}};a.style=":host{direction:ltr}";export{a as fsw_sign}