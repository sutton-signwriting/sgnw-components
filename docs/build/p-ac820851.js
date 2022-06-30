/*!
 * The Sutton SignWriting Web Components
 */
import{c as t,a as e}from"./p-b65461bb.js";var o=t((function(t,e){!function(t){let e={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};e.prefix=`(?:${e.sort}(?:${e.symbol})+)`,e.spatial=`${e.symbol}${e.coord}`,e.signbox=`${e.box}${e.coord}(?:${e.spatial})*`,e.sign=`${e.prefix}?${e.signbox}`,e.sortable=`${e.prefix}${e.signbox}`;let o={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};o.colorbase=`(?:${o.colorhex}|${o.colorname})`,o.color=`_${o.colorbase}_`,o.colors=`_${o.colorbase}(?:,${o.colorbase})?_`,o.background=`G${o.color}`,o.detail=`D${o.colors}`,o.detailsym=`D[0-9]{2}${o.colors}`,o.classes=`${o.classbase}(?: ${o.classbase})*`,o.full=`-(${o.colorize})?(${o.padding})?(${o.background})?(${o.detail})?(${o.zoom})?(?:-((?:${o.detailsym})*))?(?:-(${o.classes})?!(?:(${o.id})!)?)?`;const n=t=>(new RegExp(`^${o.colorhex}$`).test(t)?"#":"")+t,r=t=>{const e=("string"==typeof t?t.match(new RegExp(`^${o.full}`)):[])||[];return r={colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?n(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(n):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(o.detailsym,"g")).map((t=>{const e=t.split("_"),o=e[1].split(",").map(n);return{index:parseInt(e[0].slice(1)),detail:o}})):void 0,classes:e[7]?e[7]:void 0,id:e[8]?e[8]:void 0},Object.fromEntries(Object.entries(r).filter((([t,e])=>void 0!==e)));var r},i=t=>t.split("x").map((t=>parseInt(t))),s={symbol:t=>{const n="string"==typeof t?t.match(new RegExp(`^(${e.symbol})(${e.coord})?(${o.full})?`)):void 0;return{symbol:n?n[1]:void 0,coord:n&&n[2]?i(n[2]):void 0,style:n?n[3]:void 0}},sign:t=>{const n="string"==typeof t?t.match(new RegExp(`^(${e.prefix})?(${e.signbox})(${o.full})?`)):void 0;return n?{sequence:n[1]?n[1].slice(1).match(/.{6}/g):void 0,box:n[2][0],max:i(n[2].slice(1,8)),spatials:n[2].length<9?void 0:n[2].slice(8).match(/(.{13})/g).map((t=>({symbol:t.slice(0,6),coord:[parseInt(t.slice(6,9)),parseInt(t.slice(10,13))]}))),style:n[3]}:{}},text:t=>{if("string"!=typeof t)return[];const n=t.match(new RegExp(`(${e.sign}(${o.full})?|${e.spatial}(${o.full})?)`,"g"));return n?[...n]:[]}},a={symbol:t=>{if("string"==typeof t.symbol){const n=(t.symbol.match(e.symbol)||[""])[0];if(n)return n+((((t.coord&&t.coord[0]||"").toString()+"x"+(t.coord&&t.coord[1]||"").toString()).match(e.coord)||[""])[0]||"")+("string"==typeof t.style&&(t.style.match(o.full)||[""])[0]||"")}},sign:t=>{let n="string"!=typeof t.box?"M":(t.box+"M").match(e.box);const r=(((t.max&&t.max[0]||"").toString()+"x"+(t.max&&t.max[1]||"").toString()).match(e.coord)||[""])[0]||"";if(!r)return;let i="";t.sequence&&Array.isArray(t.sequence)&&(i=t.sequence.map((t=>(t.match(e.symbol)||[""])[0])).join(""),i=i?"A"+i:"");let s="";return t.spatials&&Array.isArray(t.spatials)&&(s=t.spatials.map((t=>{if("string"==typeof t.symbol){const o=(t.symbol.match(e.symbol)||[""])[0];if(o){const n=(((t.coord&&t.coord[0]||"").toString()+"x"+(t.coord&&t.coord[1]||"").toString()).match(e.coord)||[""])[0]||"";if(n)return o+n}}return""})).join("")),i+n+r+s+("string"==typeof t.style&&(t.style.match(o.full)||[""])[0]||"")}},l=t=>{let e,o,n,i,a,l,c,d,f=s.sign(t);f.spatials?(i=Math.min(...f.spatials.map((t=>t.coord[0]))),a=f.max[0],e=a-i,l=Math.min(...f.spatials.map((t=>t.coord[1]))),c=f.max[1],o=c-l,n="sign",d=f.box):(f=s.symbol(t),d="M",f.coord?(i=f.coord[0],e=2*(500-i),l=f.coord[1],o=2*(500-l),n="symbol"):(i=490,e=20,l=490,o=20,n="none"));let p=r(f.style);return{minX:i,minY:l,width:e,height:o,segment:n,lane:{B:0,L:-1,M:0,R:1}[d],padding:p.padding||0,zoom:p.zoom||1}},c={height:500,width:150,offset:50,pad:20,margin:5,dynamic:!1,background:void 0,punctuation:{spacing:!0,pad:30,pull:!0},style:{detail:["black","white"],zoom:1}},d=t=>("object"!=typeof t&&(t={}),{...c,...t,punctuation:{...c.punctuation,...t.punctuation},style:{...c.style,...t.style}}),f=[256,517,759,767,877,895,903],p={all:[256,907],writing:[256,894],hand:[256,516],movement:[517,758],dynamic:[759,766],head:[767,876],hcenter:[767,876],vcenter:[767,885],trunk:[877,885],limb:[886,894],location:[895,902],punctuation:[903,907]},$=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"];t.category=f,t.colorize=t=>{const e=s.symbol(t);let o="#000000";if(e.symbol){const t=parseInt(e.symbol.slice(1,4),16),n=f.findIndex((e=>e>t));o=$[n<0?6:n-1]}return o},t.colors=$,t.columnDefaults=c,t.columnDefaultsMerge=d,t.columns=(t,e)=>{if("string"!=typeof t)return{};const o=d(e);let n=s.text(t),r=0,i=[],a=[],c=0,f=parseInt(o.width/2),p=o.height-o.margin,$=!0,g=!1;for(let t of n){let e=l(t);r+=c,r+=o.punctuation.spacing?"sign"==e.segment?o.pad:0:o.pad,g=r+e.height>p,g&&"symbol"==e.segment&&o.punctuation.pull&&$&&(g=!1,$=!1),0==a.length&&(g=!1),g&&(r=o.pad,i.push(a),a=[],$=!0),a.push(Object.assign(e,{x:f+o.offset*e.lane-(500-e.minX)*e.zoom*o.style.zoom,y:r,text:t})),r+=e.height*e.zoom*o.style.zoom,c=o.punctuation.spacing?"sign"==e.segment?o.pad:o.punctuation.pad:o.pad}if(a.length&&i.push(a),o.punctuation.pull)for(let t of i){let e=t[t.length-1],n=e.y+e.height-(o.height-o.margin);if(n>0){let e=parseInt(n/t.length)+1;for(let o in t)t[o].y-=e*o+e}}let u=[];for(let t of i){let e=[f-o.offset-o.pad],n=[f+o.offset+o.pad];for(let r of t)e.push(r.x-o.pad),n.push(r.x+r.width+o.pad);e=Math.min(...e),n=Math.max(...n);let r=o.width,i=0;o.dynamic?(r=n-e,i=-e):i=f-parseInt((e+n)/2);for(let e of t)e.x+=i;u.push(r)}return{options:o,widths:u,columns:i}},t.compose=a,t.group=[256,270,286,324,332,390,420,442,461,501,517,534,554,597,613,648,678,695,725,739,759,767,778,810,827,857,877,886,895,903],t.info=l,t.isType=(t,e)=>{const o=s.symbol(t);if(o.symbol){const t=parseInt(o.symbol.slice(1,4),16),n=p[e];if(n)return n[0]<=t&&n[1]>=t}return!1},t.kind=[256,895,903],t.parse=s,t.ranges=p,t.re=e,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));export{o as f}