'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fc94fd74.js');
const appGlobals = require('./app-globals-849c09c3.js');
require('./global-4674ea55.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return appGlobals.patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["sgnw-rating_3.cjs",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]],[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]],[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]],["sgnw-sign.cjs",[[1,"sgnw-sign",{"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]],["sgnw-uni8-string.cjs",[[1,"sgnw-uni8-string",{"uni":[1537]}]]],["sgnw-uni8-symbol.cjs",[[1,"sgnw-uni8-symbol",{"uni":[1537]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
