/*!
 * The Sutton SignWriting Web Components
 */
import{r as s,h as t,H as i,g as o}from"./p-b65461bb.js";import{s as n,a as r}from"./p-d5f173c9.js";import{s as e}from"./p-7eef903c.js";import{r as l,b as a}from"./p-b22d6867.js";const c=class{constructor(t){s(this,t),this.sgnw=window.sgnw}connectedCallback(){if(!this.symbol){let s=n.parse.symbol(this.el.innerHTML);s.style&&(this.styling=s.style),s.style="",this.symbol=n.compose.symbol(s)}if(!this.sgnw){let s=this;window.addEventListener("sgnw",(function t(){s.sgnw=window.sgnw,window.removeEventListener("sgnw",t,!1)}),!1)}}render(){let s="";if(this.styling)s=this.styling;else{let t=window.getComputedStyle(this.el,null);const i={padding:t.getPropertyValue("padding"),background:l(t.getPropertyValue("background-color")),detail:[a(t.getPropertyValue("color")),a(t.getPropertyValue("background-color"))],zoom:parseInt(t.getPropertyValue("font-size").slice(0,-2))/30};s=e.compose(i)}return t(i,{symbol:this.symbol,styling:this.styling,innerHTML:this.sgnw?r.symbolSvg(this.symbol+s):""},t("slot",null))}get el(){return o(this)}};c.style="";export{c as sgnw_symbol}