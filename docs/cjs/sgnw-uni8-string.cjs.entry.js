'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fc94fd74.js');

/* Sutton SignWriting Unicode 8 Module v1.1.2 (https://github.com/sutton-signwriting/unicode8), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let e={base:"(?:\ud836[\udc00-\ude8b])",fill:"(?:\ud836[\ude9b-\ude9f])",rotation:"(?:\ud836[\udea1-\udeaf])"};e.full=`(${e.base})(${e.fill})?(${e.rotation})?`;let l={full:`(?:${e.full})+`};const u=u=>{const t=`^(${l.full})`,r=("string"==typeof u?u.match(new RegExp(t)):[])||[];return r[1]?[...r[1].matchAll(new RegExp(e.full,"g"))].map(e=>e[0]):[]},t=e=>{if(Array.isArray(e))return e.join("")};

const sgnwUni8StringCss = "span{font-family:NotoSansSignWriting}";

const SgnwUni8String = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { uni: this.uni }, index.h("span", null, t(u(this.uni)))));
    }
    get el() { return index.getElement(this); }
};
SgnwUni8String.style = sgnwUni8StringCss;

exports.sgnw_uni8_string = SgnwUni8String;
