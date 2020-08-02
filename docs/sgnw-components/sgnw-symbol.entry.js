import { r as registerInstance, h as h$1, f as Host, g as getElement } from './index-2ae47337.js';

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let e={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};e.prefix=`(?:${e.sort}(?:${e.symbol})+)`,e.spatial=`${e.symbol}${e.coord}`,e.signbox=`${e.box}${e.coord}(?:${e.spatial})*`,e.sign=`${e.prefix}?${e.signbox}`,e.sortable=`${e.prefix}${e.signbox}`;let o={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o.prefix=`(?:${o.sort}(?:${o.symbol})+)`,o.spatial=`${o.symbol}${o.coord}`,o.signbox=`${o.box}${o.coord}(?:${o.spatial})*`,o.sign=`${o.prefix}?${o.signbox}`,o.sortable=`${o.prefix}${o.signbox}`;const t=e=>({"𝠀":"A","𝠁":"B","𝠂":"L","𝠃":"M","𝠄":"R"})[e],r=e=>({A:"𝠀",B:"𝠁",L:"𝠂",M:"𝠃",R:"𝠄"})[e],n=e=>parseInt(e.codePointAt(0))-120844+250,c=e=>String.fromCodePoint(120844+parseInt(e)-250),s=e=>[n(e.slice(0,2)),n(e.slice(2,4))],i=e=>e.map(e=>c(e)).join(""),a=e=>e.split("x").map(e=>parseInt(e)),p=e=>e.join("x"),l=e=>parseInt(e.codePointAt(0)),f=e=>String.fromCodePoint(e),g=e=>l(e)-262144,d=e=>f(e+262144),x=e=>1+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16),u=e=>{const o=e-1,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},$=e=>{const o=l(e)-262145,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},b=e=>f(262145+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16)),m=e=>{if(!e)return "";let t=e.replace(/𝠀/g,"A").replace(/𝠁/g,"B").replace(/𝠂/g,"L").replace(/𝠃/g,"M").replace(/𝠄/g,"R");const r=t.match(new RegExp(o.symbol,"g"));r&&r.forEach((function(e){t=t.replace(e,$(e));}));const n=t.match(new RegExp(o.coord,"g"));return n&&n.forEach((function(e){t=t.replace(e,s(e).join("x"));})),t},I=o=>{if(!o)return "";const t=o.match(new RegExp(e.prefix,"g"));t&&t.forEach((function(e){o=o.replace(e,"𝠀"+e.slice(1).match(/.{6}/g).map(e=>b(e)).join(""));}));const n=o.match(new RegExp(e.box+e.coord,"g"));n&&n.forEach((function(e){o=o.replace(e,r(e.slice(0,1))+i(a(e.slice(1,8))));}));const c=o.match(new RegExp(e.spatial,"g"));return c&&c.forEach((function(e){o=o.replace(e,b(e.slice(0,6))+i(a(e.slice(6,13))));})),o};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$1={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};o$1.prefix=`(?:${o$1.sort}(?:${o$1.symbol})+)`,o$1.spatial=`${o$1.symbol}${o$1.coord}`,o$1.signbox=`${o$1.box}${o$1.coord}(?:${o$1.spatial})*`,o$1.sign=`${o$1.prefix}?${o$1.signbox}`,o$1.sortable=`${o$1.prefix}${o$1.signbox}`;let s$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};s$1.colorbase=`(?:${s$1.colorhex}|${s$1.colorname})`,s$1.color=`_${s$1.colorbase}_`,s$1.colors=`_${s$1.colorbase}(?:,${s$1.colorbase})?_`,s$1.background=`G${s$1.color}`,s$1.detail=`D${s$1.colors}`,s$1.detailsym=`D[0-9]{2}${s$1.colors}`,s$1.classes=`${s$1.classbase}(?: ${s$1.classbase})*`,s$1.full=`-(${s$1.colorize})?(${s$1.padding})?(${s$1.background})?(${s$1.detail})?(${s$1.zoom})?(?:-((?:${s$1.detailsym})*)((?:${s$1.zoomsym})*))?(?:-(${s$1.classes})?!(?:(${s$1.id})!)?)?`;const t$1=o=>o.split("x").map(o=>parseInt(o)),e$1={symbol:e=>{const r=`^(${o$1.symbol})(${o$1.coord})?(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return {symbol:l?l[1]:void 0,coord:l&&l[2]?t$1(l[2]):void 0,style:l?l[3]:void 0}},sign:e=>{const r=`^(${o$1.prefix})?(${o$1.signbox})(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return l?{sequence:l[1]?l[1].slice(1).match(/.{6}/g):void 0,box:l[2][0],max:t$1(l[2].slice(1,8)),spatials:l[2].length<9?void 0:l[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:l[3]}:{}}},r$1={symbol:t=>{if("string"==typeof t.symbol){const e=(t.symbol.match(o$1.symbol)||[""])[0];if(e){return e+((((t.coord&&t.coord[0]||"").toString()+"x"+(t.coord&&t.coord[1]||"").toString()).match(o$1.coord)||[""])[0]||"")+("string"==typeof t.style&&(t.style.match(s$1.full)||[""])[0]||"")}}},sign:t=>{let e="string"!=typeof t.box?"M":(t.box+"M").match(o$1.box);const r=(((t.max&&t.max[0]||"").toString()+"x"+(t.max&&t.max[1]||"").toString()).match(o$1.coord)||[""])[0]||"";if(!r)return;let l="";t.sequence&&Array.isArray(t.sequence)&&(l=(l=t.sequence.map(s=>(s.match(o$1.symbol)||[""])[0]).join(""))?"A"+l:"");let a="";return t.spatials&&Array.isArray(t.spatials)&&(a=t.spatials.map(s=>{if("string"==typeof s.symbol){const t=(s.symbol.match(o$1.symbol)||[""])[0];if(t){const e=(((s.coord&&s.coord[0]||"").toString()+"x"+(s.coord&&s.coord[1]||"").toString()).match(o$1.coord)||[""])[0]||"";if(e)return t+e}}return ""}).join("")),l+e+r+a+("string"==typeof t.style&&(t.style.match(s$1.full)||[""])[0]||"")}},l$1=[256,895,903],a$1=[256,517,759,767,877,895,903],c$1=[256,270,286,324,332,390,420,442,461,501,517,534,554,597,613,648,678,695,725,739,759,767,778,810,827,857,877,886,895,903],i$1={all:[256,907],writing:[256,894],hand:[256,516],movement:[517,758],dynamic:[759,766],head:[767,876],hcenter:[767,876],vcenter:[767,885],trunk:[877,885],limb:[886,894],location:[895,902],punctuation:[903,907]},n$1=(o,s)=>{const t=e$1.symbol(o);if(t.symbol){const o=parseInt(t.symbol.slice(1,4),16),e=i$1[s];if(e)return e[0]<=o&&e[1]>=o}return !1},m$1=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],y=o=>{const s=e$1.symbol(o);let t="#000000";if(s.symbol){const o=parseInt(s.symbol.slice(1,4),16),e=a$1.findIndex(s=>s>o);t=m$1[e<0?6:e-1];}return t};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$2={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o$2.prefix=`(?:${o$2.sort}(?:${o$2.symbol})+)`,o$2.spatial=`${o$2.symbol}${o$2.coord}`,o$2.signbox=`${o$2.box}${o$2.coord}(?:${o$2.spatial})*`,o$2.sign=`${o$2.prefix}?${o$2.signbox}`,o$2.sortable=`${o$2.prefix}${o$2.signbox}`;let e$2={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};e$2.colorbase=`(?:${e$2.colorhex}|${e$2.colorname})`,e$2.color=`_${e$2.colorbase}_`,e$2.colors=`_${e$2.colorbase}(?:,${e$2.colorbase})?_`,e$2.background=`G${e$2.color}`,e$2.detail=`D${e$2.colors}`,e$2.detailsym=`D[0-9]{2}${e$2.colors}`,e$2.classes=`${e$2.classbase}(?: ${e$2.classbase})*`,e$2.full=`-(${e$2.colorize})?(${e$2.padding})?(${e$2.background})?(${e$2.detail})?(${e$2.zoom})?(?:-((?:${e$2.detailsym})*)((?:${e$2.zoomsym})*))?(?:-(${e$2.classes})?!(?:(${e$2.id})!)?)?`;const s$2=o=>parseInt(o.codePointAt(0))-120844+250,t$2=o=>[s$2(o.slice(0,2)),s$2(o.slice(2,4))],r$2=o=>o.map(o=>(o=>String.fromCodePoint(120844+parseInt(o)-250))(o)).join(""),c$2=o=>parseInt(o.codePointAt(0)),l$2={symbol:s=>{const r=`^(${o$2.symbol})(${o$2.coord})?(${e$2.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return {symbol:c?c[1]:void 0,coord:c&&c[2]?t$2(c[2]):void 0,style:c?c[3]:void 0}},sign:s=>{const r=`^(${o$2.prefix})?(${o$2.signbox})(${e$2.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return c?{sequence:c[1]?c[1].slice(2).match(/.{2}/g):void 0,box:c[2].slice(0,2),max:t$2(c[2].slice(2,6)),spatials:c[2].length<7?void 0:c[2].slice(6).match(/(.{6})/g).map(o=>({symbol:o.slice(0,2),coord:t$2(o.slice(2))})),style:c[3]}:{}}},n$2=o=>o.replace(/[\u007F-\uFFFF]/g,(function(o){return "\\u"+("0000"+o.charCodeAt(0).toString(16)).substr(-4).toUpperCase()})),a$2=o=>o.replace(/\\u([0-9A-F]{4})/g,(function(o,e){return String.fromCharCode(parseInt(e,16))})),i$2=o=>[o.charCodeAt(0).toString(16).toUpperCase(),o.charCodeAt(1).toString(16).toUpperCase()],d$1={symbol:s=>{if("object"==typeof s&&null!==s&&"string"==typeof s.symbol){const t=(s.symbol.match(o$2.symbol)||[""])[0];if(t){const o=s.coord&&s.coord[0]||"",c=s.coord&&s.coord[1]||"";return t+(o&&c?r$2([o,c]):"")+("string"==typeof s.style&&(s.style.match(e$2.full)||[""])[0]||"")}}},sign:s=>{if("object"!=typeof s||null===s)return;let t="string"!=typeof s.box?"𝠃":(s.box+"𝠃").match(o$2.box);const c=s.max&&s.max[0]||"",l=s.max&&s.max[1]||"",n=c&&l?r$2([c,l]):void 0;if(!n)return;let a="";s.sequence&&Array.isArray(s.sequence)&&(a=(a=s.sequence.map(e=>(e.match(o$2.symbol)||[""])[0]).join(""))?"𝠀"+a:"");let i="";return s.spatials&&Array.isArray(s.spatials)&&(i=s.spatials.map(e=>{if("string"==typeof e.symbol){const s=(e.symbol.match(o$2.symbol)||[""])[0];if(s){const o=e.coord&&e.coord[0]||"",t=e.coord&&e.coord[1]||"",c=o&&t?r$2([o,t]):"";if(c)return s+c}}return ""}).join("")),a+t+n+i+("string"==typeof s.style&&(s.style.match(e$2.full)||[""])[0]||"")}},m$2=[262145,323489,324257],u$1=[262145,287201,310433,311201,321761,323489,324257],b$1=[262145,263489,265025,268673,269441,275009,277889,280001,281825,285665,287201,288833,290753,294881,296417,299777,302657,304289,307169,308513,310433,311201,312257,315329,316961,319841,321761,322625,323489,324257],y$1={all:[262145,324736],writing:[262145,323488],hand:[262145,287200],movement:[287201,310432],dynamic:[310433,311200],head:[311201,321760],hcenter:[311201,321760],vcenter:[311201,322624],trunk:[321761,322624],limb:[322625,323488],location:[323489,324256],punctuation:[324257,324736]},f$1=(o,e)=>{const s=l$2.symbol(o);if(s.symbol){const o=c$2(s.symbol),t=y$1[e];if(t)return t[0]<=o&&t[1]>=o}return !1},p$1=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],$$1=o=>{const e=l$2.symbol(o);let s="#000000";if(e.symbol){const o=c$2(e.symbol),t=u$1.findIndex(e=>e>o);s=p$1[t<0?6:t-1];}return s};

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const o$3=o=>1+96*(parseInt(o.slice(1,4),16)-256)+16*parseInt(o.slice(4,5),16)+parseInt(o.slice(5,6),16);let t$3={};const e$3=document.createElement("canvas");e$3.width=152,e$3.height=152;const l$3=e$3.getContext("2d"),s$3=function(e){return function(o){if(o in t$3)return [...t$3[o]];l$3.clearRect(0,0,152,152),l$3.font="60px 'SuttonSignWritingLine'",l$3.fillText(String.fromCodePoint(o+983040),0,0);const e=l$3.getImageData(0,0,152,152).data;let s,i,a,n;o:for(s=151;s>=0;s--)for(i=0;i<152;i+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var r=s;o:for(i=151;i>=0;i--)for(s=0;s<r;s+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var d=i+1;if(r=Math.ceil(r/2),d=Math.ceil(d/2),14394==o&&(r=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(o)&&(r=20),31921==o&&(r=22),38460==o&&(r=23),[20164,20212].includes(o)&&(r=25),31894==o&&(r=28),46698==o&&(r=29),29606==o&&(r=30),44855==o&&(r=40),32667==o&&(r=50),[11088,11474,11490,11506].includes(o)&&(d=20),6285==o&&(d=21),40804==o&&(d=31),41475==o&&(d=36),0==r&&0==d){const t={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};o in t&&(r=t[o][0],d=t[o][1]);}return 0!=r||0!=d?(t$3[o]=[r,d],[r,d]):void 0}(o$3(e))},i$3=function(o){return String.fromCodePoint(o+983040)},a$3=function(o){return String.fromCodePoint(o+1048576)},n$3=function(t){return i$3(o$3(t))},r$3=function(t){return a$3(o$3(t))},d$2=function(t){return e=o$3(t),`    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${a$3(e)}</text>\n    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${i$3(e)}</text>`;var e;};let c$3={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};c$3.colorbase=`(?:${c$3.colorhex}|${c$3.colorname})`,c$3.color=`_${c$3.colorbase}_`,c$3.colors=`_${c$3.colorbase}(?:,${c$3.colorbase})?_`,c$3.background="G"+c$3.color,c$3.detail="D"+c$3.colors,c$3.detailsym="D[0-9]{2}"+c$3.colors,c$3.classes=`${c$3.classbase}(?: ${c$3.classbase})*`,c$3.full=`-(${c$3.colorize})?(${c$3.padding})?(${c$3.background})?(${c$3.detail})?(${c$3.zoom})?(?:-((?:${c$3.detailsym})*)((?:${c$3.zoomsym})*))?(?:-(${c$3.classes})?!(?:(${c$3.id})!)?)?`;const m$3=o=>(new RegExp(`^${c$3.colorhex}$`).test(o)?"#":"")+o,p$2=o=>{const t="^"+c$3.full,e=("string"==typeof o?o.match(new RegExp(t)):[])||[];return {colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?m$3(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(m$3):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(c$3.detailsym,"g")).map(o=>{const t=o.split("_"),e=t[1].split(",").map(m$3);return {index:parseInt(t[0].slice(1)),detail:e}}):void 0,zoomsym:e[7]?e[7].match(new RegExp(c$3.zoomsym,"g")).map(o=>{const t=o.split(",");return {index:parseInt(t[0].slice(1)),zoom:parseFloat(t[1]),offset:t[2]?t[2].split("x").map(o=>parseInt(o)-500):void 0}}):void 0,classes:e[8]?e[8]:void 0,id:e[9]?e[9]:void 0}};let f$2={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};f$2.prefix=`(?:${f$2.sort}(?:${f$2.symbol})+)`,f$2.spatial=`${f$2.symbol}${f$2.coord}`,f$2.signbox=`${f$2.box}${f$2.coord}(?:${f$2.spatial})*`,f$2.sign=`${f$2.prefix}?${f$2.signbox}`,f$2.sortable=`${f$2.prefix}${f$2.signbox}`;let g$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};g$1.colorbase=`(?:${g$1.colorhex}|${g$1.colorname})`,g$1.color=`_${g$1.colorbase}_`,g$1.colors=`_${g$1.colorbase}(?:,${g$1.colorbase})?_`,g$1.background="G"+g$1.color,g$1.detail="D"+g$1.colors,g$1.detailsym="D[0-9]{2}"+g$1.colors,g$1.classes=`${g$1.classbase}(?: ${g$1.classbase})*`,g$1.full=`-(${g$1.colorize})?(${g$1.padding})?(${g$1.background})?(${g$1.detail})?(${g$1.zoom})?(?:-((?:${g$1.detailsym})*)((?:${g$1.zoomsym})*))?(?:-(${g$1.classes})?!(?:(${g$1.id})!)?)?`;const x$1=o=>o.split("x").map(o=>parseInt(o)),$$2=o=>{const t=`^(${f$2.symbol})(${f$2.coord})?(${g$1.full})?`,e="string"==typeof o?o.match(new RegExp(t)):void 0;return {symbol:e?e[1]:void 0,coord:e&&e[2]?x$1(e[2]):void 0,style:e?e[3]:void 0}},y$2=o=>{const t=`^(${f$2.prefix})?(${f$2.signbox})(${g$1.full})?`,e="string"==typeof o?o.match(new RegExp(t)):void 0;return e?{sequence:e[1]?e[1].slice(1).match(/.{6}/g):void 0,box:e[2][0],max:x$1(e[2].slice(1,8)),spatials:e[2].length<9?void 0:e[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:e[3]}:{}},b$2=[256,517,759,767,877,895,903],h=[767,876],u$2=[767,885],z=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],v=o=>{const t=$$2(o);let e="#000000";if(t.symbol){const o=parseInt(t.symbol.slice(1,4),16),l=b$2.findIndex(t=>t>o);e=z[l<0?6:l-1];}return e},w=o=>{const t=$$2(o);if(t.symbol){let e=s$3(t.symbol);if(e){let l,s=p$2(t.style),i=d$2(t.symbol);i=`  <g transform="translate(500,500)">\n${i}\n  </g>`,s.colorize?l=v(t.symbol):s.detail&&(l=s.detail[0]),l&&(i=i.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let a=s.detail&&s.detail[1];a&&(i=i.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${a}"`));let n=500,r=500,c="";s.padding&&(n-=s.padding,r-=s.padding,e[0]+=2*s.padding,e[1]+=2*s.padding),s.background&&(c=`\n  <rect x="${n}" y="${r}" width="${e[0]}" height="${e[1]}" style="fill:${s.background};" />`);let m="";"x"!=s.zoom&&(m=` width="${e[0]*(s.zoom?s.zoom:1)}" height="${e[1]*(s.zoom?s.zoom:1)}"`);let f="";s.classes&&(f=` class="${s.classes}"`);let g="";return s.id&&(g=` id="${s.id}"`),`<svg${f}${g} version="1.1" xmlns="http://www.w3.org/2000/svg"${m} viewBox="${n} ${r} ${e[0]} ${e[1]}">\n  <text font-size="0">${o}</text>${c}\n${i}\n</svg>`}}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},S=o=>{const t=function(o){const t=$$2(o);if(t.symbol){let o=s$3(t.symbol);if(o){const e=document.createElement("canvas"),l=e.getContext("2d");let s=p$2(t.style),i="black";s.colorize?i=v(t.symbol):s.detail&&(i=s.detail[0]);let a=s.detail&&s.detail[1]||"white",d=500,c=d+o[0],m=500,f=m+o[1];s.padding&&(d-=s.padding,m-=s.padding,c+=s.padding,f+=s.padding);let g=1;"x"!=s.zoom&&(g=s.zoom);let x=(c-d)*g,$=(f-m)*g;return e.width=x||1,e.height=$||1,s.background&&(l.rect(0,0,x,$),l.fillStyle=s.background,l.fill()),l.font=30*g+"px 'SuttonSignWritingFill'",l.fillStyle=a,l.fillText(r$3(t.symbol),(500-d)*g,(500-m)*g),l.font=30*g+"px 'SuttonSignWritingLine'",l.fillStyle=i,l.fillText(n$3(t.symbol),(500-d)*g,(500-m)*g),e}}}(o),e=t.toDataURL("image/png");return t.remove(),e},I$1=o=>{const t=$$2(o);if(!t.symbol)return null;{let o=s$3(t.symbol);if(o)return `${t.symbol}${500-parseInt(o[0]/2)}x${500-parseInt(o[1]/2)}${t.style||""}`}},k=o=>{let t=y$2(o);if(t.spatials){let e=p$2(t.style);e.detailsym&&e.detailsym.forEach(o=>{t.spatials[o.index-1]&&(t.spatials[o.index-1].detail=o.detail);});let l=Math.min(...t.spatials.map(o=>o.coord[0])),i=Math.min(...t.spatials.map(o=>o.coord[1])),a=t.max[0],n=t.max[1];e.zoomsym&&e.zoomsym.forEach(o=>{if(t.spatials[o.index-1]){t.spatials[o.index-1].zoom=o.zoom,o.offset&&(t.spatials[o.index-1].coord[0]+=o.offset[0],t.spatials[o.index-1].coord[1]+=o.offset[1]);let e=s$3(t.spatials[o.index-1].symbol);a=Math.max(a,t.spatials[o.index-1].coord[0]+e[0]*o.zoom),n=Math.max(n,t.spatials[o.index-1].coord[1]+e[1]*o.zoom);}});let r="";e.classes&&(r=` class="${e.classes}"`);let c="";e.id&&(c=` id="${e.id}"`);let m="";e.padding&&(l-=e.padding,i-=e.padding,a+=e.padding,n+=e.padding),e.background&&(m=`\n  <rect x="${l}" y="${i}" width="${a-l}" height="${n-i}" style="fill:${e.background};" />`);let f="";"x"!=e.zoom&&(f=` width="${(a-l)*(e.zoom?e.zoom:1)}" height="${(n-i)*(e.zoom?e.zoom:1)}"`);let g=`<svg${r}${c} version="1.1" xmlns="http://www.w3.org/2000/svg"${f} viewBox="${l} ${i} ${a-l} ${n-i}">\n  <text font-size="0">${o}</text>${m}`;const x=e.detail&&e.detail[0],$=e.detail&&e.detail[1];return g+="\n"+t.spatials.map(o=>{let t=d$2(o.symbol),l=x;o.detail?l=o.detail[0]:e.colorize&&(l=v(o.symbol)),l&&(t=t.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let s=$;return o.detail&&o.detail[1]&&(s=o.detail[1]),s&&(t=t.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${s}"`)),o.zoom&&(t=`<g transform="scale(${o.zoom})">${t}</g>`),`  <g transform="translate(${o.coord[0]},${o.coord[1]})">\n${t}\n  </g>`}).join("\n"),g+="\n</svg>",g}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},M=o=>{const t=function(o){const t=y$2(o);if(t.spatials){const o=document.createElement("canvas"),e=o.getContext("2d");let l=p$2(t.style);l.detailsym&&l.detailsym.forEach(o=>{t.spatials[o.index-1]&&(t.spatials[o.index-1].detail=o.detail);});let i=Math.min(...t.spatials.map(o=>o.coord[0])),a=Math.min(...t.spatials.map(o=>o.coord[1])),d=t.max[0],c=t.max[1];l.zoomsym&&l.zoomsym.forEach(o=>{if(t.spatials[o.index-1]){t.spatials[o.index-1].zoom=o.zoom,o.offset&&(t.spatials[o.index-1].coord[0]+=o.offset[0],t.spatials[o.index-1].coord[1]+=o.offset[1]);let e=s$3(t.spatials[o.index-1].symbol);d=Math.max(d,t.spatials[o.index-1].coord[0]+e[0]*o.zoom),c=Math.max(c,t.spatials[o.index-1].coord[1]+e[1]*o.zoom);}}),l.padding&&(i-=l.padding,a-=l.padding,d+=l.padding,c+=l.padding);let m=1;"x"!=l.zoom&&(m=l.zoom);let f=(d-i)*m,g=(c-a)*m;o.width=f||1,o.height=g||1,l.background&&(e.rect(0,0,f,g),e.fillStyle=l.background,e.fill());const x=l.detail&&l.detail[0]||"black",$=l.detail&&l.detail[1]||"white";return t.spatials.forEach(o=>{let t=x;o.detail?t=o.detail[0]:l.colorize&&(t=v(o.symbol));let s=$;o.detail&&o.detail[1]&&(s=o.detail[1]);let d=o.zoom||1;e.font=30*m*d+"px 'SuttonSignWritingFill'",e.fillStyle=s,e.fillText(r$3(o.symbol),(o.coord[0]-i)*m,(o.coord[1]-a)*m),e.font=30*m*d+"px 'SuttonSignWritingLine'",e.fillStyle=t,e.fillText(n$3(o.symbol),(o.coord[0]-i)*m,(o.coord[1]-a)*m);}),o}}(o),e=t.toDataURL("image/png");return t.remove(),e},Z=o=>{const t=y$2(o);if(t.spatials){const o=t.spatials.reduce((o,t)=>{const e=s$3(t.symbol);return o[t.symbol]={width:e[0],height:e[1]},o},{}),e=t=>({x1:Math.min(...t.map(o=>o.coord[0])),y1:Math.min(...t.map(o=>o.coord[1])),x2:Math.max(...t.map(t=>t.coord[0]+parseInt(o[t.symbol].width))),y2:Math.max(...t.map(t=>t.coord[1]+parseInt(o[t.symbol].height)))}),l=h,i=t.spatials.filter(o=>{const t=parseInt(o.symbol.slice(1,4),16);return l[0]<=t&&l[1]>=t}),a=u$2,n=t.spatials.filter(o=>{const t=parseInt(o.symbol.slice(1,4),16);return a[0]<=t&&a[1]>=t});let r=e(t.spatials),d=[r.x2,r.y2];if(i.length){const o=e(i);r.x1=o.x1,r.x2=o.x2;}if(n.length){const o=e(n);r.y1=o.y1,r.y2=o.y2;}const c=[parseInt((r.x2+r.x1)/2)-500,parseInt((r.y2+r.y1)/2)-500];return (t.sequence?"A"+t.sequence.join(""):"")+t.box+(d[0]-c[0])+"x"+(d[1]-c[1])+t.spatials.map(o=>o.symbol+(o.coord[0]-c[0])+"x"+(o.coord[1]-c[1])).join("")+(t.style||"")}};

const sgnwSymbolCss = "";

const SgnwSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = u(iid);
                    this.swu = d(iid);
                }
            }
        }
        else {
            this.iid = 0;
        }
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = e$1.symbol(newValue);
            if (fsw && fsw.symbol) {
                this.iid = x(fsw.symbol);
                this.swu = b(fsw.symbol);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = l$2.symbol(newValue);
            if (swu && swu.symbol) {
                this.iid = g(swu.symbol);
                this.fsw = m(swu.symbol);
            }
        }
    }
    stylingUpdate(newValue, oldValue) {
        console.log(newValue, oldValue);
    }
    connectedCallback() {
        if (!this.sgnw) {
            let self = this;
            function handleSgnw() {
                self.sgnw = window.sgnw;
                window.removeEventListener("sgnw", handleSgnw, false);
            }
            window.addEventListener('sgnw', handleSgnw, false);
        }
        var iid, fsw, swu, styling;
        if (this.fsw) {
            fsw = this.fsw;
        }
        else if (this.swu) {
            swu = this.swu;
        }
        else if (this.iid) {
            iid = this.iid;
        }
        if (this.styling) {
            styling = this.styling;
        }
        if (!(iid || fsw || swu)) {
            var contents = this.el.innerHTML;
            var fswP = e$1.symbol(contents);
            var swuP = l$2.symbol(contents);
            var iidP = parseInt(contents);
            if (fswP && fswP.symbol) {
                fsw = fswP.symbol + (fswP.style ? fswP.style : "");
            }
            else if (swuP && swuP.symbol) {
                swu = swuP.symbol;
                swu = swuP.symbol + (swuP.style ? swuP.style : "");
            }
            else if (iidP > 0 && iidP < 65535) {
                iid = iidP;
            }
        }
        if (fsw) {
            this.fsw = fsw;
            this.fswUpdate(this.fsw, "");
        }
        else if (swu) {
            this.swu = swu;
            this.swuUpdate(this.swu, "");
        }
        else {
            if (!iid) {
                iid = 0;
            }
            this.iid = iid;
            this.iidUpdate(this.iid.toString(), "0");
        }
        if (styling) {
            this.styling = styling;
        }
    }
    render() {
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (h$1(Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? w(this.fsw) : '' }, h$1("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "iid": ["iidUpdate"],
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"],
        "styling": ["stylingUpdate"]
    }; }
};
SgnwSymbol.style = sgnwSymbolCss;

export { SgnwSymbol as sgnw_symbol };
