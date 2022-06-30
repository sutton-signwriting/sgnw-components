/*!
 * The Sutton SignWriting Web Components
 */
import{c as o,a as t}from"./p-b65461bb.js";var e=o((function(o,t){!function(o){let t={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};t.colorbase=`(?:${t.colorhex}|${t.colorname})`,t.color=`_${t.colorbase}_`,t.colors=`_${t.colorbase}(?:,${t.colorbase})?_`,t.background=`G${t.color}`,t.detail=`D${t.colors}`,t.detailsym=`D[0-9]{2}${t.colors}`,t.classes=`${t.classbase}(?: ${t.classbase})*`,t.full=`-(${t.colorize})?(${t.padding})?(${t.background})?(${t.detail})?(${t.zoom})?(?:-((?:${t.detailsym})*))?(?:-(${t.classes})?!(?:(${t.id})!)?)?`;const e=o=>(new RegExp(`^${t.colorhex}$`).test(o)?"#":"")+o;o.compose=o=>{if("object"!=typeof o||null===o)return;let e="-";e+=o.colorize?"C":"";const n=parseInt(o.padding);e+=!n||n<=0||n>99?"":"P"+(n>9?n:"0"+n);const i=o.background&&"string"==typeof o.background?o.background.match(t.colorbase)[0]:void 0;e+=i?"G_"+i+"_":"";const r=o.detail&&o.detail[0]&&"string"==typeof o.detail[0]?o.detail[0].match(t.colorbase)[0]:void 0,s=o.detail&&o.detail[1]&&"string"==typeof o.detail[1]?o.detail[1].match(t.colorbase)[0]:void 0;r&&(e+="D_"+r,s&&(e+=","+s),e+="_");const a="x"===o.zoom?"x":parseFloat(o.zoom);e+=!a||a<=0?"":"Z"+a;let d="";d+=(o.detailsym&&Array.isArray(o.detailsym)?o.detailsym.map((o=>{const e=parseInt(o.index);if(!e||e<=0||e>99)return"";let n="D"+(e>9?e:"0"+e);const i=o.detail&&o.detail[0]?o.detail[0].match(t.colorbase)[0]:void 0,r=o.detail&&o.detail[1]?o.detail[1].match(t.colorbase)[0]:void 0;return i&&(n+="_"+i,r&&(n+=","+r),n+="_"),n})):[]).join("");let c="";const p=o.classes&&"string"==typeof o.classes?o.classes.match(t.classes)[0]:void 0;c+=p||"";const $=o.id&&"string"==typeof o.id?o.id.match(t.id)[0]:void 0;return c+=p||$?"!":"",c+=$?$+"!":"",e+(d||c?"-"+d:"")+(c?"-"+c:"")},o.parse=o=>{const n=("string"==typeof o?o.match(new RegExp(`^${t.full}`)):[])||[];return i={colorize:n[1]?!!n[1]:void 0,padding:n[2]?parseInt(n[2].slice(1)):void 0,background:n[3]?e(n[3].slice(2,-1)):void 0,detail:n[4]?n[4].slice(2,-1).split(",").map(e):void 0,zoom:n[5]?"Zx"===n[5]?"x":parseFloat(n[5].slice(1)):void 0,detailsym:n[6]?n[6].match(new RegExp(t.detailsym,"g")).map((o=>{const t=o.split("_"),n=t[1].split(",").map(e);return{index:parseInt(t[0].slice(1)),detail:n}})):void 0,classes:n[7]?n[7]:void 0,id:n[8]?n[8]:void 0},Object.fromEntries(Object.entries(i).filter((([o,t])=>void 0!==t)));var i},o.re=t,Object.defineProperty(o,"__esModule",{value:!0})}(t)}));export{e as s}