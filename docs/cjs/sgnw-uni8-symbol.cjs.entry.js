'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');

/* Sutton SignWriting Unicode 8 Module v1.1.2 (https://github.com/sutton-signwriting/unicode8), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let t={base:"(?:\ud836[\udc00-\ude8b])",fill:"(?:\ud836[\ude9b-\ude9f])",rotation:"(?:\ud836[\udea1-\udeaf])"};t.full=`(${t.base})(${t.fill})?(${t.rotation})?`;const o=o=>{const e="^"+t.full,l=("string"==typeof o?o.match(new RegExp(e)):[])||[];return {base:l[1]?l[1]:void 0,fill:l[2]?l[2]:void 0,rotation:l[3]?l[3]:void 0}},e=t=>{if("object"!=typeof t||null===t)return;const o=(t.base?t.base:"")+(t.fill?t.fill:"")+(t.rotation?t.rotation:"");return o||void 0};

const sgnwUni8SymbolCss = "span{font-family:NotoSansSignWriting}";

const SgnwUni8Symbol = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { uni: this.uni }, index.h("span", null, e(o(this.uni)))));
  }
  get el() { return index.getElement(this); }
};
SgnwUni8Symbol.style = sgnwUni8SymbolCss;

exports.sgnw_uni8_symbol = SgnwUni8Symbol;
