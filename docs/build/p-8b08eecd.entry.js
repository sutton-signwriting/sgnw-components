/*!
 * The Sutton SignWriting Web Components
 */
import{r as s,f as t,i,h as n,H as o,g as r}from"./p-61fe031a.js";import{s as a,a as e}from"./p-377fa6d3.js";import{s as l}from"./p-f1e475cf.js";const c=class{constructor(t){s(this,t),this.sgnw=window.sgnw}connectedCallback(){if(!this.sign){let s=a.parse.sign(this.el.innerHTML);s.style&&(this.styling=s.style),s.style="",this.sign=a.compose.sign(s)}if(!this.sgnw){let s=this;window.addEventListener("sgnw",(function t(){s.sgnw=window.sgnw,window.removeEventListener("sgnw",t,!1)}),!1)}}render(){let s="";if(this.styling)s=this.styling;else{let n=window.getComputedStyle(this.el,null);const o={padding:n.getPropertyValue("padding"),background:t(n.getPropertyValue("background-color")),detail:[i(n.getPropertyValue("color")),i(n.getPropertyValue("background-color"))],zoom:parseInt(n.getPropertyValue("font-size").slice(0,-2))/30};s=l.compose(o)}return n(o,{sign:this.sign,styling:this.styling,innerHTML:this.sgnw?e.signSvg(this.sign+s):""},n("slot",null))}get el(){return r(this)}};c.style=":host{direction:ltr}";export{c as sgnw_sign}