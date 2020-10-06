import { attachShadow, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const t=function(t=""){if(!document.getElementById("SgnwFontCss")){const n=document.createElement("style");n.setAttribute("id","SgnwFontCss"),n.appendChild(document.createTextNode(`\n  @font-face {\n    font-family: "SuttonSignWritingLine";\n    src: \n      local('SuttonSignWritingLine'),\n      ${t?`url('${t}SuttonSignWritingLine.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingFill";\n    src: \n      local('SuttonSignWritingFill'),\n      ${t?`url('${t}SuttonSignWritingFill.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingOneD";\n    src: \n      local('SuttonSignWritingOneD'),\n      ${t?`url('${t}SuttonSignWritingOneD.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');\n  }\n    `)),document.head.appendChild(n);}};let n={};const e=document.createElement("canvas");e.width=152,e.height=152;const i=e.getContext("2d"),o=function(t){if(t in n)return [...n[t]];i.clearRect(0,0,152,152),i.font="60px 'SuttonSignWritingLine'",i.fillText(String.fromCodePoint(t+983040),0,0);const e=i.getImageData(0,0,152,152).data;let o,r,l,f;t:for(o=151;o>=0;o--)for(r=0;r<152;r+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var c=o;t:for(r=151;r>=0;r--)for(o=0;o<c;o+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var u=r+1;if(c=Math.ceil(c/2),u=Math.ceil(u/2),14394==t&&(c=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(t)&&(c=20),31921==t&&(c=22),38460==t&&(c=23),[20164,20212].includes(t)&&(c=25),31894==t&&(c=28),46698==t&&(c=29),29606==t&&(c=30),44855==t&&(c=40),32667==t&&(c=50),[11088,11474,11490,11506].includes(t)&&(u=20),6285==t&&(u=21),40804==t&&(u=31),41475==t&&(u=36),0==c&&0==u){const n={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};t in n&&(c=n[t][0],u=n[t][1]);}return 0!=c||0!=u?(n[t]=[c,u],[c,u]):void 0},l=function(t){return String.fromCodePoint(t+1048576)},c=function(t){let n=!1,e=!1;u(()=>{n=!0;}),a(()=>{e=!0;});const i=setInterval((function(){n&&e&&(clearInterval(i),t());}),100);},u=function(t){if(o(1))t();else {const n=setInterval((function(){o(1)&&(clearInterval(n),t());}),100);}},a=function(t){const n=function(){const t=document.createElement("canvas");t.width=15,t.height=30;const n=t.getContext("2d");n.font="30px 'SuttonSignWritingFill'",n.fillText(l(1),0,0);return !n.getImageData(0,0,15,30).data.every(t=>0===t)};if(n())t();else {const e=setInterval((function(){n()&&(clearInterval(e),t());}),100);}};

// @ts-ignore
window['sgnw'] = false;
const event = new Event('sgnw');
const rgb2hex = function (rgba) {
    return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
        let parts = values.split(',');
        if (parts.length == 4 && (parseInt(parts[3]) == 0)) {
            return 'transparent';
        }
        else {
            return parts.slice(0, 3)
                .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
                .join('');
        }
    });
};
const rgba2hex = function (rgba) {
    return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
        let parts = values.split(',');
        if (parts.length == 4 && (parseInt(parts[3]) < 1)) {
            return 'transparent';
        }
        else {
            return parts.slice(0, 3)
                .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
                .join('');
        }
    });
};
function appGlobalScript () {
    t();
    c(() => {
        window['sgnw'] = true;
        window.dispatchEvent(event);
    });
}

const globalScripts = appGlobalScript;

const sgnwRatingCss = ".rating{color:orange}";

const SgnwRating = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        this.ratingUpdated = createEvent(this, "ratingUpdated", 7);
        /** max number of stars */
        this.maxValue = 5;
        /** current number of stars */
        this.value = 0;
        this.starList = [];
    }
    componentWillLoad() {
        this.createStarList(this.value);
    }
    logUpdate() {
        console.log("ratingUpdated");
    }
    setValue(newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.ratingUpdated.emit({ value: this.value });
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2605"));
            }
            else {
                starList.push(h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (h("div", null, this.starList));
    }
    static get watchers() { return {
        "value": ["componentWillLoad"]
    }; }
    static get style() { return sgnwRatingCss; }
};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let e$1={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};e$1.prefix=`(?:${e$1.sort}(?:${e$1.symbol})+)`,e$1.spatial=`${e$1.symbol}${e$1.coord}`,e$1.signbox=`${e$1.box}${e$1.coord}(?:${e$1.spatial})*`,e$1.sign=`${e$1.prefix}?${e$1.signbox}`,e$1.sortable=`${e$1.prefix}${e$1.signbox}`;let o$1={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o$1.prefix=`(?:${o$1.sort}(?:${o$1.symbol})+)`,o$1.spatial=`${o$1.symbol}${o$1.coord}`,o$1.signbox=`${o$1.box}${o$1.coord}(?:${o$1.spatial})*`,o$1.sign=`${o$1.prefix}?${o$1.signbox}`,o$1.sortable=`${o$1.prefix}${o$1.signbox}`;const r=e=>({A:"𝠀",B:"𝠁",L:"𝠂",M:"𝠃",R:"𝠄"})[e],n$1=e=>parseInt(e.codePointAt(0))-120844+250,c$1=e=>String.fromCodePoint(120844+parseInt(e)-250),s=e=>[n$1(e.slice(0,2)),n$1(e.slice(2,4))],i$1=e=>e.map(e=>c$1(e)).join(""),a$1=e=>e.split("x").map(e=>parseInt(e)),l$1=e=>parseInt(e.codePointAt(0)),f=e=>String.fromCodePoint(e),g=e=>l$1(e)-262144,d=e=>f(e+262144),x=e=>1+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16),u$1=e=>{const o=e-1,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},$=e=>{const o=l$1(e)-262145,t=parseInt(o/96),r=parseInt((o-96*t)/16),n=parseInt(o-96*t-16*r);return "S"+(t+256).toString(16)+r.toString(16)+n.toString(16)},b=e=>f(262145+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16)),m=e=>{if(!e)return "";let t=e.replace(/𝠀/g,"A").replace(/𝠁/g,"B").replace(/𝠂/g,"L").replace(/𝠃/g,"M").replace(/𝠄/g,"R");const r=t.match(new RegExp(o$1.symbol,"g"));r&&r.forEach((function(e){t=t.replace(e,$(e));}));const n=t.match(new RegExp(o$1.coord,"g"));return n&&n.forEach((function(e){t=t.replace(e,s(e).join("x"));})),t},I=o=>{if(!o)return "";const t=o.match(new RegExp(e$1.prefix,"g"));t&&t.forEach((function(e){o=o.replace(e,"𝠀"+e.slice(1).match(/.{6}/g).map(e=>b(e)).join(""));}));const n=o.match(new RegExp(e$1.box+e$1.coord,"g"));n&&n.forEach((function(e){o=o.replace(e,r(e.slice(0,1))+i$1(a$1(e.slice(1,8))));}));const c=o.match(new RegExp(e$1.spatial,"g"));return c&&c.forEach((function(e){o=o.replace(e,b(e.slice(0,6))+i$1(a$1(e.slice(6,13))));})),o};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$2={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};o$2.prefix=`(?:${o$2.sort}(?:${o$2.symbol})+)`,o$2.spatial=`${o$2.symbol}${o$2.coord}`,o$2.signbox=`${o$2.box}${o$2.coord}(?:${o$2.spatial})*`,o$2.sign=`${o$2.prefix}?${o$2.signbox}`,o$2.sortable=`${o$2.prefix}${o$2.signbox}`;let s$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};s$1.colorbase=`(?:${s$1.colorhex}|${s$1.colorname})`,s$1.color=`_${s$1.colorbase}_`,s$1.colors=`_${s$1.colorbase}(?:,${s$1.colorbase})?_`,s$1.background=`G${s$1.color}`,s$1.detail=`D${s$1.colors}`,s$1.detailsym=`D[0-9]{2}${s$1.colors}`,s$1.classes=`${s$1.classbase}(?: ${s$1.classbase})*`,s$1.full=`-(${s$1.colorize})?(${s$1.padding})?(${s$1.background})?(${s$1.detail})?(${s$1.zoom})?(?:-((?:${s$1.detailsym})*)((?:${s$1.zoomsym})*))?(?:-(${s$1.classes})?!(?:(${s$1.id})!)?)?`;const t$1=o=>o.split("x").map(o=>parseInt(o)),e$2={symbol:e=>{const r=`^(${o$2.symbol})(${o$2.coord})?(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return {symbol:l?l[1]:void 0,coord:l&&l[2]?t$1(l[2]):void 0,style:l?l[3]:void 0}},sign:e=>{const r=`^(${o$2.prefix})?(${o$2.signbox})(${s$1.full})?`,l="string"==typeof e?e.match(new RegExp(r)):void 0;return l?{sequence:l[1]?l[1].slice(1).match(/.{6}/g):void 0,box:l[2][0],max:t$1(l[2].slice(1,8)),spatials:l[2].length<9?void 0:l[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:l[3]}:{}}},r$1={symbol:t=>{if("string"==typeof t.symbol){const e=(t.symbol.match(o$2.symbol)||[""])[0];if(e){return e+((((t.coord&&t.coord[0]||"").toString()+"x"+(t.coord&&t.coord[1]||"").toString()).match(o$2.coord)||[""])[0]||"")+("string"==typeof t.style&&(t.style.match(s$1.full)||[""])[0]||"")}}},sign:t=>{let e="string"!=typeof t.box?"M":(t.box+"M").match(o$2.box);const r=(((t.max&&t.max[0]||"").toString()+"x"+(t.max&&t.max[1]||"").toString()).match(o$2.coord)||[""])[0]||"";if(!r)return;let l="";t.sequence&&Array.isArray(t.sequence)&&(l=(l=t.sequence.map(s=>(s.match(o$2.symbol)||[""])[0]).join(""))?"A"+l:"");let a="";return t.spatials&&Array.isArray(t.spatials)&&(a=t.spatials.map(s=>{if("string"==typeof s.symbol){const t=(s.symbol.match(o$2.symbol)||[""])[0];if(t){const e=(((s.coord&&s.coord[0]||"").toString()+"x"+(s.coord&&s.coord[1]||"").toString()).match(o$2.coord)||[""])[0]||"";if(e)return t+e}}return ""}).join("")),l+e+r+a+("string"==typeof t.style&&(t.style.match(s$1.full)||[""])[0]||"")}};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$3={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};o$3.prefix=`(?:${o$3.sort}(?:${o$3.symbol})+)`,o$3.spatial=`${o$3.symbol}${o$3.coord}`,o$3.signbox=`${o$3.box}${o$3.coord}(?:${o$3.spatial})*`,o$3.sign=`${o$3.prefix}?${o$3.signbox}`,o$3.sortable=`${o$3.prefix}${o$3.signbox}`;let e$3={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};e$3.colorbase=`(?:${e$3.colorhex}|${e$3.colorname})`,e$3.color=`_${e$3.colorbase}_`,e$3.colors=`_${e$3.colorbase}(?:,${e$3.colorbase})?_`,e$3.background=`G${e$3.color}`,e$3.detail=`D${e$3.colors}`,e$3.detailsym=`D[0-9]{2}${e$3.colors}`,e$3.classes=`${e$3.classbase}(?: ${e$3.classbase})*`,e$3.full=`-(${e$3.colorize})?(${e$3.padding})?(${e$3.background})?(${e$3.detail})?(${e$3.zoom})?(?:-((?:${e$3.detailsym})*)((?:${e$3.zoomsym})*))?(?:-(${e$3.classes})?!(?:(${e$3.id})!)?)?`;const s$2=o=>parseInt(o.codePointAt(0))-120844+250,t$2=o=>[s$2(o.slice(0,2)),s$2(o.slice(2,4))],r$2=o=>o.map(o=>(o=>String.fromCodePoint(120844+parseInt(o)-250))(o)).join(""),l$2={symbol:s=>{const r=`^(${o$3.symbol})(${o$3.coord})?(${e$3.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return {symbol:c?c[1]:void 0,coord:c&&c[2]?t$2(c[2]):void 0,style:c?c[3]:void 0}},sign:s=>{const r=`^(${o$3.prefix})?(${o$3.signbox})(${e$3.full})?`,c="string"==typeof s?s.match(new RegExp(r)):void 0;return c?{sequence:c[1]?c[1].slice(2).match(/.{2}/g):void 0,box:c[2].slice(0,2),max:t$2(c[2].slice(2,6)),spatials:c[2].length<7?void 0:c[2].slice(6).match(/(.{6})/g).map(o=>({symbol:o.slice(0,2),coord:t$2(o.slice(2))})),style:c[3]}:{}}},d$1={symbol:s=>{if("object"==typeof s&&null!==s&&"string"==typeof s.symbol){const t=(s.symbol.match(o$3.symbol)||[""])[0];if(t){const o=s.coord&&s.coord[0]||"",c=s.coord&&s.coord[1]||"";return t+(o&&c?r$2([o,c]):"")+("string"==typeof s.style&&(s.style.match(e$3.full)||[""])[0]||"")}}},sign:s=>{if("object"!=typeof s||null===s)return;let t="string"!=typeof s.box?"𝠃":(s.box+"𝠃").match(o$3.box);const c=s.max&&s.max[0]||"",l=s.max&&s.max[1]||"",n=c&&l?r$2([c,l]):void 0;if(!n)return;let a="";s.sequence&&Array.isArray(s.sequence)&&(a=(a=s.sequence.map(e=>(e.match(o$3.symbol)||[""])[0]).join(""))?"𝠀"+a:"");let i="";return s.spatials&&Array.isArray(s.spatials)&&(i=s.spatials.map(e=>{if("string"==typeof e.symbol){const s=(e.symbol.match(o$3.symbol)||[""])[0];if(s){const o=e.coord&&e.coord[0]||"",t=e.coord&&e.coord[1]||"",c=o&&t?r$2([o,t]):"";if(c)return s+c}}return ""}).join("")),a+t+n+i+("string"==typeof s.style&&(s.style.match(e$3.full)||[""])[0]||"")}};

/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let o$4={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};o$4.colorbase=`(?:${o$4.colorhex}|${o$4.colorname})`,o$4.color=`_${o$4.colorbase}_`,o$4.colors=`_${o$4.colorbase}(?:,${o$4.colorbase})?_`,o$4.background=`G${o$4.color}`,o$4.detail=`D${o$4.colors}`,o$4.detailsym=`D[0-9]{2}${o$4.colors}`,o$4.classes=`${o$4.classbase}(?: ${o$4.classbase})*`,o$4.full=`-(${o$4.colorize})?(${o$4.padding})?(${o$4.background})?(${o$4.detail})?(${o$4.zoom})?(?:-((?:${o$4.detailsym})*)((?:${o$4.zoomsym})*))?(?:-(${o$4.classes})?!(?:(${o$4.id})!)?)?`;const t$3=e=>{if("object"!=typeof e||null===e)return;let s="-";s+=e.colorize?"C":"";const t=parseInt(e.padding);s+=!t||t<=0||t>99?"":"P"+(t>9?t:"0"+t);const a=e.background&&"string"==typeof e.background?e.background.match(o$4.colorbase)[0]:void 0;s+=a?"G_"+a+"_":"";const i=e.detail&&e.detail[0]&&"string"==typeof e.detail[0]?e.detail[0].match(o$4.colorbase)[0]:void 0,l=e.detail&&e.detail[1]&&"string"==typeof e.detail[1]?e.detail[1].match(o$4.colorbase)[0]:void 0;i&&(s+="D_"+i,l&&(s+=","+l),s+="_");const r="x"===e.zoom?"x":parseFloat(e.zoom);s+=!r||r<=0?"":"Z"+r;let c="";c+=(e.detailsym&&Array.isArray(e.detailsym)?e.detailsym.map(e=>{const s=parseInt(e.index);if(!s||s<=0||s>99)return "";let t="D"+(s>9?s:"0"+s);const a=e.detail&&e.detail[0]?e.detail[0].match(o$4.colorbase)[0]:void 0,i=e.detail&&e.detail[1]?e.detail[1].match(o$4.colorbase)[0]:void 0;return a&&(t+="_"+a,i&&(t+=","+i),t+="_"),t}):[]).join(""),c+=(e.zoomsym&&Array.isArray(e.zoomsym)?e.zoomsym.map(o=>{const e=parseInt(o.index);if(!e||e<=0||e>99)return "";let s="Z"+(e>9?e:"0"+e);const t=parseFloat(o.zoom);if(s+=!t||t<=0?"":","+t,o.offset&&0 in o.offset&&1 in o.offset){const e=parseInt(o.offset[0])+500,t=parseInt(o.offset[1])+500;e>=250&&e<750&&t>=250&&t<750&&(s+=","+e+"x"+t);}return s}):[]).join("");let d="";const n=e.classes&&"string"==typeof e.classes?e.classes.match(o$4.classes)[0]:void 0;d+=n||"";const m=e.id&&"string"==typeof e.id?e.id.match(o$4.id)[0]:void 0;return d+=n||m?"!":"",d+=m?m+"!":"",s+(c||d?"-"+c:"")+(d?"-"+d:"")};

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const o$5=o=>1+96*(parseInt(o.slice(1,4),16)-256)+16*parseInt(o.slice(4,5),16)+parseInt(o.slice(5,6),16);let t$4={};const e$4=document.createElement("canvas");e$4.width=152,e$4.height=152;const l$3=e$4.getContext("2d"),s$3=function(e){return function(o){if(o in t$4)return [...t$4[o]];l$3.clearRect(0,0,152,152),l$3.font="60px 'SuttonSignWritingLine'",l$3.fillText(String.fromCodePoint(o+983040),0,0);const e=l$3.getImageData(0,0,152,152).data;let s,i,a,n;o:for(s=151;s>=0;s--)for(i=0;i<152;i+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var r=s;o:for(i=151;i>=0;i--)for(s=0;s<r;s+=1)for(n=0;n<4;n+=1)if(a=4*s+4*i*152+n,e[a])break o;var d=i+1;if(r=Math.ceil(r/2),d=Math.ceil(d/2),14394==o&&(r=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(o)&&(r=20),31921==o&&(r=22),38460==o&&(r=23),[20164,20212].includes(o)&&(r=25),31894==o&&(r=28),46698==o&&(r=29),29606==o&&(r=30),44855==o&&(r=40),32667==o&&(r=50),[11088,11474,11490,11506].includes(o)&&(d=20),6285==o&&(d=21),40804==o&&(d=31),41475==o&&(d=36),0==r&&0==d){const t={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};o in t&&(r=t[o][0],d=t[o][1]);}return 0!=r||0!=d?(t$4[o]=[r,d],[r,d]):void 0}(o$5(e))},i$2=function(o){return String.fromCodePoint(o+983040)},a$2=function(o){return String.fromCodePoint(o+1048576)},d$2=function(t){return e=o$5(t),`    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${a$2(e)}</text>\n    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${i$2(e)}</text>`;var e;};let c$2={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};c$2.colorbase=`(?:${c$2.colorhex}|${c$2.colorname})`,c$2.color=`_${c$2.colorbase}_`,c$2.colors=`_${c$2.colorbase}(?:,${c$2.colorbase})?_`,c$2.background="G"+c$2.color,c$2.detail="D"+c$2.colors,c$2.detailsym="D[0-9]{2}"+c$2.colors,c$2.classes=`${c$2.classbase}(?: ${c$2.classbase})*`,c$2.full=`-(${c$2.colorize})?(${c$2.padding})?(${c$2.background})?(${c$2.detail})?(${c$2.zoom})?(?:-((?:${c$2.detailsym})*)((?:${c$2.zoomsym})*))?(?:-(${c$2.classes})?!(?:(${c$2.id})!)?)?`;const m$1=o=>(new RegExp(`^${c$2.colorhex}$`).test(o)?"#":"")+o,p=o=>{const t="^"+c$2.full,e=("string"==typeof o?o.match(new RegExp(t)):[])||[];return {colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?m$1(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(m$1):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp(c$2.detailsym,"g")).map(o=>{const t=o.split("_"),e=t[1].split(",").map(m$1);return {index:parseInt(t[0].slice(1)),detail:e}}):void 0,zoomsym:e[7]?e[7].match(new RegExp(c$2.zoomsym,"g")).map(o=>{const t=o.split(",");return {index:parseInt(t[0].slice(1)),zoom:parseFloat(t[1]),offset:t[2]?t[2].split("x").map(o=>parseInt(o)-500):void 0}}):void 0,classes:e[8]?e[8]:void 0,id:e[9]?e[9]:void 0}};let f$1={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};f$1.prefix=`(?:${f$1.sort}(?:${f$1.symbol})+)`,f$1.spatial=`${f$1.symbol}${f$1.coord}`,f$1.signbox=`${f$1.box}${f$1.coord}(?:${f$1.spatial})*`,f$1.sign=`${f$1.prefix}?${f$1.signbox}`,f$1.sortable=`${f$1.prefix}${f$1.signbox}`;let g$1={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};g$1.colorbase=`(?:${g$1.colorhex}|${g$1.colorname})`,g$1.color=`_${g$1.colorbase}_`,g$1.colors=`_${g$1.colorbase}(?:,${g$1.colorbase})?_`,g$1.background="G"+g$1.color,g$1.detail="D"+g$1.colors,g$1.detailsym="D[0-9]{2}"+g$1.colors,g$1.classes=`${g$1.classbase}(?: ${g$1.classbase})*`,g$1.full=`-(${g$1.colorize})?(${g$1.padding})?(${g$1.background})?(${g$1.detail})?(${g$1.zoom})?(?:-((?:${g$1.detailsym})*)((?:${g$1.zoomsym})*))?(?:-(${g$1.classes})?!(?:(${g$1.id})!)?)?`;const x$1=o=>o.split("x").map(o=>parseInt(o)),$$1=o=>{const t=`^(${f$1.symbol})(${f$1.coord})?(${g$1.full})?`,e="string"==typeof o?o.match(new RegExp(t)):void 0;return {symbol:e?e[1]:void 0,coord:e&&e[2]?x$1(e[2]):void 0,style:e?e[3]:void 0}},y=o=>{const t=`^(${f$1.prefix})?(${f$1.signbox})(${g$1.full})?`,e="string"==typeof o?o.match(new RegExp(t)):void 0;return e?{sequence:e[1]?e[1].slice(1).match(/.{6}/g):void 0,box:e[2][0],max:x$1(e[2].slice(1,8)),spatials:e[2].length<9?void 0:e[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:e[3]}:{}},b$1=[256,517,759,767,877,895,903],z=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],v=o=>{const t=$$1(o);let e="#000000";if(t.symbol){const o=parseInt(t.symbol.slice(1,4),16),l=b$1.findIndex(t=>t>o);e=z[l<0?6:l-1];}return e},w=o=>{const t=$$1(o);if(t.symbol){let e=s$3(t.symbol);if(e){let l,s=p(t.style),i=d$2(t.symbol);i=`  <g transform="translate(500,500)">\n${i}\n  </g>`,s.colorize?l=v(t.symbol):s.detail&&(l=s.detail[0]),l&&(i=i.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let a=s.detail&&s.detail[1];a&&(i=i.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${a}"`));let n=500,r=500,c="";s.padding&&(n-=s.padding,r-=s.padding,e[0]+=2*s.padding,e[1]+=2*s.padding),s.background&&(c=`\n  <rect x="${n}" y="${r}" width="${e[0]}" height="${e[1]}" style="fill:${s.background};" />`);let m="";"x"!=s.zoom&&(m=` width="${e[0]*(s.zoom?s.zoom:1)}" height="${e[1]*(s.zoom?s.zoom:1)}"`);let f="";s.classes&&(f=` class="${s.classes}"`);let g="";return s.id&&(g=` id="${s.id}"`),`<svg${f}${g} version="1.1" xmlns="http://www.w3.org/2000/svg"${m} viewBox="${n} ${r} ${e[0]} ${e[1]}">\n  <text font-size="0">${o}</text>${c}\n${i}\n</svg>`}}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},k=o=>{let t=y(o);if(t.spatials){let e=p(t.style);e.detailsym&&e.detailsym.forEach(o=>{t.spatials[o.index-1]&&(t.spatials[o.index-1].detail=o.detail);});let l=Math.min(...t.spatials.map(o=>o.coord[0])),i=Math.min(...t.spatials.map(o=>o.coord[1])),a=t.max[0],n=t.max[1];e.zoomsym&&e.zoomsym.forEach(o=>{if(t.spatials[o.index-1]){t.spatials[o.index-1].zoom=o.zoom,o.offset&&(t.spatials[o.index-1].coord[0]+=o.offset[0],t.spatials[o.index-1].coord[1]+=o.offset[1]);let e=s$3(t.spatials[o.index-1].symbol);a=Math.max(a,t.spatials[o.index-1].coord[0]+e[0]*o.zoom),n=Math.max(n,t.spatials[o.index-1].coord[1]+e[1]*o.zoom);}});let r="";e.classes&&(r=` class="${e.classes}"`);let c="";e.id&&(c=` id="${e.id}"`);let m="";e.padding&&(l-=e.padding,i-=e.padding,a+=e.padding,n+=e.padding),e.background&&(m=`\n  <rect x="${l}" y="${i}" width="${a-l}" height="${n-i}" style="fill:${e.background};" />`);let f="";"x"!=e.zoom&&(f=` width="${(a-l)*(e.zoom?e.zoom:1)}" height="${(n-i)*(e.zoom?e.zoom:1)}"`);let g=`<svg${r}${c} version="1.1" xmlns="http://www.w3.org/2000/svg"${f} viewBox="${l} ${i} ${a-l} ${n-i}">\n  <text font-size="0">${o}</text>${m}`;const x=e.detail&&e.detail[0],$=e.detail&&e.detail[1];return g+="\n"+t.spatials.map(o=>{let t=d$2(o.symbol),l=x;o.detail?l=o.detail[0]:e.colorize&&(l=v(o.symbol)),l&&(t=t.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let s=$;return o.detail&&o.detail[1]&&(s=o.detail[1]),s&&(t=t.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${s}"`)),o.zoom&&(t=`<g transform="scale(${o.zoom})">${t}</g>`),`  <g transform="translate(${o.coord[0]},${o.coord[1]})">\n${t}\n  </g>`}).join("\n"),g+="\n</svg>",g}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'};

const sgnwSignCss = "";

const SgnwSign = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        this.sgnw = window.sgnw;
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = e$2.sign(newValue);
            if (fsw && fsw.box) {
                delete fsw.style;
                this.fsw = r$1.sign(fsw);
                this.swu = I(this.fsw);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = l$2.sign(newValue);
            if (swu && swu.box) {
                delete swu.style;
                this.swu = d$1.sign(swu);
                this.fsw = m(this.swu);
            }
        }
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
        if (this.fsw) {
            this.fswUpdate(this.fsw, "");
        }
        else if (this.swu) {
            this.swuUpdate(this.swu, "");
        }
    }
    render() {
        let styleStr = '';
        if (this.styling) {
            styleStr = this.styling;
        }
        else {
            let css = window.getComputedStyle(this.el, null);
            const styleObj = {
                "padding": css.getPropertyValue("padding"),
                "background": rgba2hex(css.getPropertyValue("background-color")),
                "detail": [
                    rgb2hex(css.getPropertyValue("color")),
                    rgb2hex(css.getPropertyValue("background-color"))
                ],
                "zoom": parseInt(css.getPropertyValue("font-size").slice(0, -2)) / 30
            };
            styleStr = t$3(styleObj);
        }
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (h(Host, { fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? k(this.fsw + (styleStr)) : '' }, h("slot", null)));
    }
    get el() { return this; }
    static get watchers() { return {
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
    static get style() { return sgnwSignCss; }
};

const sgnwSignboxCss = ":host{width:100%;height:400px;background-color:#333;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:7px;touch-action:none}";

const SgnwSignbox = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
    }
    /** array of spatials */
    //  @Prop({mutable: true, reflect: true}) spatials: array;
    //  @Watch('spatials')
    //  updateSpatials() {
    //    this.createSymbolList(this.spatials);
    //  }
    handleMouseDown(ev) {
        console.log('mousedown');
    }
    handleTouchStart(ev) {
        console.log('touchstart');
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
    static get style() { return sgnwSignboxCss; }
};

const sgnwSymbolCss = "";

const SgnwSymbol = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = u$1(iid);
                    this.swu = d(iid);
                }
            }
        }
        else {
            this.iid = 0;
        }
    }
    fswUpdate(newValue, oldValue) {
        const len = 6;
        console.log("fsw", this.fsw, "-", newValue, "-", oldValue);
        const tooLong = typeof newValue === 'string' && newValue.length > len;
        if (tooLong) {
            this.fsw = this.fsw.substring(0, len);
        }
        else {
            if (newValue != oldValue) {
                console.log("fswU", this.fsw, "-", newValue, "-", oldValue);
                var fsw = e$2.symbol(newValue);
                if (fsw && fsw.symbol) {
                    this.fsw = fsw.symbol;
                    this.iid = x(fsw.symbol);
                    this.swu = b(fsw.symbol);
                }
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
    connectedCallback() {
        if (!this.sgnw) {
            let self = this;
            function handleSgnw() {
                self.sgnw = window.sgnw;
                window.removeEventListener("sgnw", handleSgnw, false);
            }
            window.addEventListener('sgnw', handleSgnw, false);
        }
        if (this.fsw) {
            this.fswUpdate(this.fsw, "");
        }
        else if (this.swu) {
            this.swuUpdate(this.swu, "");
        }
        else {
            if (!this.iid) {
                this.iid = 0;
            }
            this.iidUpdate(this.iid.toString(), "0");
        }
    }
    render() {
        let styleStr = '';
        if (this.styling) {
            styleStr = this.styling;
        }
        else {
            let css = window.getComputedStyle(this.el, null);
            const styleObj = {
                "padding": css.getPropertyValue("padding"),
                "background": rgba2hex(css.getPropertyValue("background-color")),
                "detail": [
                    rgb2hex(css.getPropertyValue("color")),
                    rgb2hex(css.getPropertyValue("background-color"))
                ],
                "zoom": parseInt(css.getPropertyValue("font-size").slice(0, -2)) / 30
            };
            styleStr = t$3(styleObj);
        }
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (h(Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? w(this.fsw + (styleStr)) : '' }, h("slot", null)));
    }
    get el() { return this; }
    static get watchers() { return {
        "iid": ["iidUpdate"],
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
    static get style() { return sgnwSymbolCss; }
};

globalScripts();
const SgnwRating$1 = /*@__PURE__*/proxyCustomElement(SgnwRating, [1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]]);
const SgnwSign$1 = /*@__PURE__*/proxyCustomElement(SgnwSign, [1,"sgnw-sign",{"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]);
const SgnwSignbox$1 = /*@__PURE__*/proxyCustomElement(SgnwSignbox, [1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]]);
const SgnwSymbol$1 = /*@__PURE__*/proxyCustomElement(SgnwSymbol, [1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      SgnwRating$1,
  SgnwSign$1,
  SgnwSignbox$1,
  SgnwSymbol$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { SgnwRating$1 as SgnwRating, SgnwSign$1 as SgnwSign, SgnwSignbox$1 as SgnwSignbox, SgnwSymbol$1 as SgnwSymbol, defineCustomElements };
