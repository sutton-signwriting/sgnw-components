/*!
 * The Sutton SignWriting Web Components
 */
import{c as t,a as e}from"./p-7486a92a.js";var n=t((function(t,e){!function(t){const e=t=>t.map((t=>(t=>String.fromCodePoint(120844+parseInt(t)-250))(t))).join(""),n=t=>(t=>parseInt(t.codePointAt(0)))(t)-262144;let i={};const o=152;let s;const r=function(t){return function(t){if(t in i)return[...i[t]];if(!s){const t=document.createElement("canvas");t.width=o,t.height=o,s=t.getContext("2d")}s.clearRect(0,0,o,o),s.font="60px 'SuttonSignWritingLine'",s.fillText(String.fromCodePoint(t+983040),0,0);const e=s.getImageData(0,0,o,o).data;let n,r,l,a;t:for(n=151;n>=0;n--)for(r=0;r<o;r+=1)for(a=0;a<4;a+=1)if(l=4*n+4*r*o+a,e[l])break t;var c=n;t:for(r=151;r>=0;r--)for(n=0;n<c;n+=1)for(a=0;a<4;a+=1)if(l=4*n+4*r*o+a,e[l])break t;var f=r+1;if(c=Math.ceil(c/2),f=Math.ceil(f/2),14394==t&&(c=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(t)&&(c=20),31921==t&&(c=22),38460==t&&(c=23),[20164,20212].includes(t)&&(c=25),31894==t&&(c=28),46698==t&&(c=29),29606==t&&(c=30),44855==t&&(c=40),32667==t&&(c=50),[11088,11474,11490,11506].includes(t)&&(f=20),6285==t&&(f=21),40804==t&&(f=31),41475==t&&(f=36),0==c&&0==f){const e={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};t in e&&(c=e[t][0],f=e[t][1])}return 0!=c||0!=f?(i[t]=[c,f],[c,f]):void 0}(n(t))},l=function(t){return String.fromCodePoint(t+983040)},a=function(t){return String.fromCodePoint(t+1048576)},c=function(t){return l(n(t))},f=function(t){return a(n(t))},$=function(t){return e=n(t),`    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${a(e)}</text>\n    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${l(e)}</text>`;var e};let d={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};d.colorbase=`(?:${d.colorhex}|${d.colorname})`,d.color=`_${d.colorbase}_`,d.colors=`_${d.colorbase}(?:,${d.colorbase})?_`,d.background=`G${d.color}`,d.detail=`D${d.colors}`,d.detailsym=`D[0-9]{2}${d.colors}`,d.classes=`${d.classbase}(?: ${d.classbase})*`,d.full=`-(${d.colorize})?(${d.padding})?(${d.background})?(${d.detail})?(${d.zoom})?(?:-((?:${d.detailsym})*))?(?:-(${d.classes})?!(?:(${d.id})!)?)?`;const u=t=>(new RegExp(`^${d.colorhex}$`).test(t)?"#":"")+t,g=t=>{const e=("string"==typeof t?t.match(new RegExp(`^${d.full}`)):[])||[];return n={colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?u(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(u):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(d.detailsym,"g")).map((t=>{const e=t.split("_"),n=e[1].split(",").map(u);return{index:parseInt(e[0].slice(1)),detail:n}})):void 0,classes:e[7]?e[7]:void 0,id:e[8]?e[8]:void 0},Object.fromEntries(Object.entries(n).filter((([t,e])=>void 0!==e)));var n},p=t=>{if("object"!=typeof t||null===t)return;let e="-";e+=t.colorize?"C":"";const n=parseInt(t.padding);e+=!n||n<=0||n>99?"":"P"+(n>9?n:"0"+n);const i=t.background&&"string"==typeof t.background?t.background.match(d.colorbase)[0]:void 0;e+=i?"G_"+i+"_":"";const o=t.detail&&t.detail[0]&&"string"==typeof t.detail[0]?t.detail[0].match(d.colorbase)[0]:void 0,s=t.detail&&t.detail[1]&&"string"==typeof t.detail[1]?t.detail[1].match(d.colorbase)[0]:void 0;o&&(e+="D_"+o,s&&(e+=","+s),e+="_");const r="x"===t.zoom?"x":parseFloat(t.zoom);e+=!r||r<=0?"":"Z"+r;let l="";l+=(t.detailsym&&Array.isArray(t.detailsym)?t.detailsym.map((t=>{const e=parseInt(t.index);if(!e||e<=0||e>99)return"";let n="D"+(e>9?e:"0"+e);const i=t.detail&&t.detail[0]?t.detail[0].match(d.colorbase)[0]:void 0,o=t.detail&&t.detail[1]?t.detail[1].match(d.colorbase)[0]:void 0;return i&&(n+="_"+i,o&&(n+=","+o),n+="_"),n})):[]).join("");let a="";const c=t.classes&&"string"==typeof t.classes?t.classes.match(d.classes)[0]:void 0;a+=c||"";const f=t.id&&"string"==typeof t.id?t.id.match(d.id)[0]:void 0;return a+=c||f?"!":"",a+=f?f+"!":"",e+(l||a?"-"+l:"")+(a?"-"+a:"")};let v={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};v.prefix=`(?:${v.sort}(?:${v.symbol})+)`,v.spatial=`${v.symbol}${v.coord}`,v.signbox=`${v.box}${v.coord}(?:${v.spatial})*`,v.sign=`${v.prefix}?${v.signbox}`,v.sortable=`${v.prefix}${v.signbox}`;let h={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};h.colorbase=`(?:${h.colorhex}|${h.colorname})`,h.color=`_${h.colorbase}_`,h.colors=`_${h.colorbase}(?:,${h.colorbase})?_`,h.background=`G${h.color}`,h.detail=`D${h.colors}`,h.detailsym=`D[0-9]{2}${h.colors}`,h.classes=`${h.classbase}(?: ${h.classbase})*`,h.full=`-(${h.colorize})?(${h.padding})?(${h.background})?(${h.detail})?(${h.zoom})?(?:-((?:${h.detailsym})*))?(?:-(${h.classes})?!(?:(${h.id})!)?)?`;const x=t=>(new RegExp(`^${h.colorhex}$`).test(t)?"#":"")+t,w=t=>{const e=("string"==typeof t?t.match(new RegExp(`^${h.full}`)):[])||[];return n={colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?x(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(x):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(h.detailsym,"g")).map((t=>{const e=t.split("_"),n=e[1].split(",").map(x);return{index:parseInt(e[0].slice(1)),detail:n}})):void 0,classes:e[7]?e[7]:void 0,id:e[8]?e[8]:void 0},Object.fromEntries(Object.entries(n).filter((([t,e])=>void 0!==e)));var n},y=t=>parseInt(t.codePointAt(0))-120844+250,m=t=>[y(t.slice(0,2)),y(t.slice(2,4))],b=t=>{const e="string"==typeof t?t.match(new RegExp(`^(${v.symbol})(${v.coord})?(${h.full})?`)):void 0;return{symbol:e?e[1]:void 0,coord:e&&e[2]?m(e[2]):void 0,style:e?e[3]:void 0}},z=t=>{const e="string"==typeof t?t.match(new RegExp(`^(${v.prefix})?(${v.signbox})(${h.full})?`)):void 0;return e?{sequence:e[1]?e[1].slice(2).match(/.{2}/g):void 0,box:e[2].slice(0,2),max:m(e[2].slice(2,6)),spatials:e[2].length<7?void 0:e[2].slice(6).match(/(.{6})/g).map((t=>({symbol:t.slice(0,2),coord:m(t.slice(2))}))),style:e[3]}:{}},I=t=>{if("string"!=typeof t)return[];const e=t.match(new RegExp(`(${v.sign}(${h.full})?|${v.spatial}(${h.full})?)`,"g"));return e?[...e]:[]},_=t=>{let e,n,i,o,s,r,l,a,c=z(t);c.spatials?(o=Math.min(...c.spatials.map((t=>t.coord[0]))),s=c.max[0],e=s-o,r=Math.min(...c.spatials.map((t=>t.coord[1]))),l=c.max[1],n=l-r,i="sign",a=c.box):(c=b(t),a="𝠃",c.coord?(o=c.coord[0],e=2*(500-o),r=c.coord[1],n=2*(500-r),i="symbol"):(o=490,e=20,r=490,n=20,i="none"));let f=w(c.style);return{minX:o,minY:r,width:e,height:n,segment:i,lane:{"𝠁":0,"𝠂":-1,"𝠃":0,"𝠄":1}[a],padding:f.padding||0,zoom:f.zoom||1}},S={height:500,width:150,offset:50,pad:20,margin:5,dynamic:!1,background:void 0,punctuation:{spacing:!0,pad:30,pull:!0},style:{detail:["black","white"],zoom:1}},M=(t,e)=>{if("string"!=typeof t)return{};const n=(t=>("object"!=typeof t&&(t={}),{...S,...t,punctuation:{...S.punctuation,...t.punctuation},style:{...S.style,...t.style}}))(e);let i=I(t),o=0,s=[],r=[],l=0,a=parseInt(n.width/2),c=n.height-n.margin,f=!0,$=!1;for(let t of i){let e=_(t);o+=l,o+=n.punctuation.spacing?"sign"==e.segment?n.pad:0:n.pad,$=o+e.height>c,$&&"symbol"==e.segment&&n.punctuation.pull&&f&&($=!1,f=!1),0==r.length&&($=!1),$&&(o=n.pad,s.push(r),r=[],f=!0),r.push(Object.assign(e,{x:a+n.offset*e.lane-(500-e.minX)*e.zoom*n.style.zoom,y:o,text:t})),o+=e.height*e.zoom*n.style.zoom,l=n.punctuation.spacing?"sign"==e.segment?n.pad:n.punctuation.pad:n.pad}if(r.length&&s.push(r),n.punctuation.pull)for(let t of s){let e=t[t.length-1],i=e.y+e.height-(n.height-n.margin);if(i>0){let e=parseInt(i/t.length)+1;for(let n in t)t[n].y-=e*n+e}}let d=[];for(let t of s){let e=[a-n.offset-n.pad],i=[a+n.offset+n.pad];for(let o of t)e.push(o.x-n.pad),i.push(o.x+o.width+n.pad);e=Math.min(...e),i=Math.max(...i);let o=n.width,s=0;n.dynamic?(o=i-e,s=-e):s=a-parseInt((e+i)/2);for(let e of t)e.x+=s;d.push(o)}return{options:n,widths:d,columns:s}},j=[262145,287201,310433,311201,321761,323489,324257],Z=[311201,321760],A=[311201,322624],F=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],k=t=>{const e=b(t);let n="#000000";if(e.symbol){const t=(t=>parseInt(t.codePointAt(0)))(e.symbol),i=j.findIndex((e=>e>t));n=F[i<0?6:i-1]}return n},E=t=>{const e=b(t);if(!e.symbol)return"";let n,i,o,s,l=g(e.style);if(e.coord)n=e.coord[0],i=e.coord[1],o=500-n+500,s=500-i+500;else{let t=r(e.symbol);if(!t)return"";n=500-parseInt((t[0]+1)/2),i=500-parseInt((t[1]+1)/2),o=500-n+500,s=500-i+500}let a,c=$(e.symbol);c=`  <g transform="translate(${n},${i})">\n${c}\n  </g>`,l.colorize?a=k(e.symbol):l.detail&&(a=l.detail[0]),a&&(c=c.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${a}"`));let f=l.detail&&l.detail[1];f&&(c=c.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${f}"`));let d="";return l.padding&&(n-=l.padding,i-=l.padding,o+=l.padding,s+=l.padding),l.background&&(d=`\n  <rect x="${n}" y="${i}" width="${o-n}" height="${s-i}" style="fill:${l.background};" />`),`  <text font-size="0">${t}</text>${d}\n${c}`},R=t=>{let e=z(t);if(e.spatials){let n=g(e.style);n.detailsym&&n.detailsym.forEach((t=>{e.spatials[t.index-1]&&(e.spatials[t.index-1].detail=t.detail)}));let i=Math.min(...e.spatials.map((t=>t.coord[0]))),o=Math.min(...e.spatials.map((t=>t.coord[1]))),s=e.max[0],r=e.max[1],l="";n.padding&&(i-=n.padding,o-=n.padding,s+=n.padding,r+=n.padding),n.background&&(l=`\n  <rect x="${i}" y="${o}" width="${s-i}" height="${r-o}" style="fill:${n.background};" />`);let a=`  <text font-size="0">${t}</text>${l}`;const c=n.detail&&n.detail[0],f=n.detail&&n.detail[1];return a+="\n"+e.spatials.map((t=>{let e=$(t.symbol),i=c;t.detail?i=t.detail[0]:n.colorize&&(i=k(t.symbol)),i&&(e=e.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${i}"`));let o=f;return t.detail&&t.detail[1]&&(o=t.detail[1]),o&&(e=e.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${o}"`)),`  <g transform="translate(${t.coord[0]},${t.coord[1]})">\n${e}\n  </g>`})).join("\n"),a}return""},W=(t,e)=>{"object"!=typeof e&&(e={});const n=Object.assign(S,e);let i=n.width,o=n.height,s="";n.background&&(s=`\n  <rect x="0" y="0" width="${i-0}" height="${o-0}" style="fill:${n.background};" />`);let r=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${n.width}" height="${n.height}" viewBox="0 0 ${i-0} ${o-0}">\n  <text font-size="0">0</text>${s}`;return r+=t.map((t=>{const e=t.text.indexOf("-");if(e>0){const i=t.text.substring(e),o={...n.style,...g(i)};t.text=t.text.replace(i,p(o))}else t.text+=p(n.style);return t.zoom=t.zoom*n.style.zoom,'<g transform="translate('+t.x+","+t.y+") scale("+t.zoom+") translate("+-t.minX+","+-t.minY+') ">'+("sign"==t.segment?R(t.text):E(t.text))+"</g>"})).join("\n"),r+="\n</svg>",r},O=(t,e)=>{const n=function(t,e){"object"!=typeof e&&(e={});const n=Object.assign(S,e),i=document.createElement("canvas");i.width=n.width,i.height=n.height;const o=i.getContext("2d");return n.background&&(o.rect(0,0,n.width,n.height),o.fillStyle=n.background,o.fill()),t.map((t=>{const e=t.text.indexOf("-");if(e>0){const i=t.text.substring(e),o={...n.style,...g(i)};t.text=t.text.replace(i,p(o))}else t.text+=p(n.style);t.zoom=t.zoom*n.style.zoom;let i={};if("sign"==t.segment)i=z(t.text);else{let e=b(t.text);i.style=e.style,i.spatials=[e]}let s=g(i.style);s.background&&(o.fillStyle=s.background,o.fillRect(t.x-s.padding*t.zoom,t.y-s.padding*t.zoom,(t.width+2*s.padding)*t.zoom,(t.height+2*s.padding)*t.zoom)),s.detailsym&&s.detailsym.forEach((t=>{i.spatials[t.index-1]&&(i.spatials[t.index-1].detail=t.detail)}));const r=s.detail&&s.detail[0]||"black",l=s.detail&&s.detail[1]||"white";i.spatials.forEach((e=>{let n=r;e.detail?n=e.detail[0]:s.colorize&&(n=k(e.symbol));let i=l;e.detail&&e.detail[1]&&(i=e.detail[1]),o.font=30*t.zoom+"px 'SuttonSignWritingFill'",o.fillStyle=i,o.fillText(f(e.symbol),t.x+(e.coord[0]-t.minX)*t.zoom,t.y+(e.coord[1]-t.minY)*t.zoom),o.font=30*t.zoom+"px 'SuttonSignWritingLine'",o.fillStyle=n,o.fillText(c(e.symbol),t.x+(e.coord[0]-t.minX)*t.zoom,t.y+(e.coord[1]-t.minY)*t.zoom)}))})),i}(t,e),i=n.toDataURL("image/png");return n.remove(),i};t.columnPng=O,t.columnSvg=W,t.columnsPng=function(t,e){"object"!=typeof e&&(e={});let n=M(t,e);return n.columns.map(((t,e)=>O(t,{...n.options,width:n.widths[e]})))},t.columnsSvg=function(t,e){"object"!=typeof e&&(e={});let n=M(t,e);return n.columns.map(((t,e)=>W(t,{...n.options,width:n.widths[e]})))},t.signNormalize=t=>{const n=z(t);if(n.spatials){const t=n.spatials.reduce(((t,e)=>{const n=r(e.symbol);return t[e.symbol]={width:n[0],height:n[1]},t}),{}),i=e=>({x1:Math.min(...e.map((t=>t.coord[0]))),y1:Math.min(...e.map((t=>t.coord[1]))),x2:Math.max(...e.map((e=>e.coord[0]+parseInt(t[e.symbol].width)))),y2:Math.max(...e.map((e=>e.coord[1]+parseInt(t[e.symbol].height))))}),o=Z,s=n.spatials.filter((t=>{const e=parseInt(t.symbol.slice(1,4),16);return o[0]<=e&&o[1]>=e})),l=A,a=n.spatials.filter((t=>{const e=parseInt(t.symbol.slice(1,4),16);return l[0]<=e&&l[1]>=e}));let c=i(n.spatials),f=[c.x2,c.y2];if(s.length){const t=i(s);c.x1=t.x1,c.x2=t.x2}if(a.length){const t=i(a);c.y1=t.y1,c.y2=t.y2}const $=[parseInt((c.x2+c.x1)/2)-500,parseInt((c.y2+c.y1)/2)-500];return(n.sequence?"𝠀"+n.sequence.join(""):"")+n.box+e([f[0]-$[0],f[1]-$[1]])+n.spatials.map((t=>t.symbol+e([t.coord[0]-$[0],t.coord[1]-$[1]]))).join("")+(n.style||"")}},t.signPng=t=>{const e=function(t){const e=z(t);if(e.spatials){const t=document.createElement("canvas"),n=t.getContext("2d");let i=g(e.style);i.detailsym&&i.detailsym.forEach((t=>{e.spatials[t.index-1]&&(e.spatials[t.index-1].detail=t.detail)}));let o=Math.min(...e.spatials.map((t=>t.coord[0]))),s=Math.min(...e.spatials.map((t=>t.coord[1]))),r=e.max[0],l=e.max[1];i.padding&&(o-=i.padding,s-=i.padding,r+=i.padding,l+=i.padding);let a=1;"x"!=i.zoom&&(a=i.zoom);let $=(r-o)*a,d=(l-s)*a;t.width=$||1,t.height=d||1,i.background&&(n.rect(0,0,$,d),n.fillStyle=i.background,n.fill());const u=i.detail&&i.detail[0]||"black",p=i.detail&&i.detail[1]||"white";return e.spatials.forEach((t=>{let e=u;t.detail?e=t.detail[0]:i.colorize&&(e=k(t.symbol));let r=p;t.detail&&t.detail[1]&&(r=t.detail[1]),n.font=30*a+"px 'SuttonSignWritingFill'",n.fillStyle=r,n.fillText(f(t.symbol),(t.coord[0]-o)*a,(t.coord[1]-s)*a),n.font=30*a+"px 'SuttonSignWritingLine'",n.fillStyle=e,n.fillText(c(t.symbol),(t.coord[0]-o)*a,(t.coord[1]-s)*a)})),t}}(t),n=e.toDataURL("image/png");return e.remove(),n},t.signSvg=t=>{let e=z(t);if(e.spatials){let n=g(e.style),i=Math.min(...e.spatials.map((t=>t.coord[0]))),o=Math.min(...e.spatials.map((t=>t.coord[1]))),s=e.max[0],r=e.max[1],l="";n.classes&&(l=` class="${n.classes}"`);let a="";n.id&&(a=` id="${n.id}"`),n.padding&&(i-=n.padding,o-=n.padding,s+=n.padding,r+=n.padding);let c="";"x"!=n.zoom&&(c=` width="${(s-i)*(n.zoom?n.zoom:1)}" height="${(r-o)*(n.zoom?n.zoom:1)}"`);let f=`<svg${l}${a} version="1.1" xmlns="http://www.w3.org/2000/svg"${c} viewBox="${i} ${o} ${s-i} ${r-o}">\n`;return f+=R(t),f+="\n</svg>",f}return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},t.signSvgBody=R,t.symbolFill=f,t.symbolLine=c,t.symbolNormalize=t=>{const n=b(t);if(!n.symbol)return null;{let t=r(n.symbol);if(t)return`${n.symbol}${e([500-parseInt((t[0]+1)/2),500-parseInt((t[1]+1)/2)])}${n.style||""}`}},t.symbolPng=t=>{const e=function(t){const e=b(t);if(e.symbol){let t=r(e.symbol);if(t){const n=document.createElement("canvas"),i=n.getContext("2d");let o=g(e.style),s="black";o.colorize?s=k(e.symbol):o.detail&&(s=o.detail[0]);let r=o.detail&&o.detail[1]||"white",l=500,a=l+t[0],$=500,d=$+t[1];o.padding&&(l-=o.padding,$-=o.padding,a+=o.padding,d+=o.padding);let u=1;"x"!=o.zoom&&(u=o.zoom);let p=(a-l)*u,v=(d-$)*u;return n.width=p||1,n.height=v||1,o.background&&(i.rect(0,0,p,v),i.fillStyle=o.background,i.fill()),i.font=30*u+"px 'SuttonSignWritingFill'",i.fillStyle=r,i.fillText(f(e.symbol),(500-l)*u,(500-$)*u),i.font=30*u+"px 'SuttonSignWritingLine'",i.fillStyle=s,i.fillText(c(e.symbol),(500-l)*u,(500-$)*u),n}}}(t),n=e.toDataURL("image/png");return e.remove(),n},t.symbolSize=r,t.symbolSvg=t=>{const e=b(t),n='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';if(!e.symbol)return n;let i,o,s,l,a=g(e.style);if(e.coord)i=e.coord[0],o=e.coord[1],s=500-i+500,l=500-o+500;else{let t=r(e.symbol);if(!t)return n;i=parseInt(500-t[0]/2),o=parseInt(500-t[1]/2),s=i+t[0],l=o+t[1]}let c="";a.classes&&(c=` class="${a.classes}"`);let f="";a.id&&(f=` id="${a.id}"`),a.padding&&(i-=a.padding,o-=a.padding,s+=a.padding,l+=a.padding);let $="";return"x"!=a.zoom&&($=` width="${(s-i)*(a.zoom?a.zoom:1)}" height="${(l-o)*(a.zoom?a.zoom:1)}"`),`<svg${c}${f} version="1.1" xmlns="http://www.w3.org/2000/svg"${$} viewBox="${i} ${o} ${s-i} ${l-o}">\n${E(t)}\n</svg>`},t.symbolSvgBody=E,t.symbolText=$,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));export{n as s}