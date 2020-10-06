'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const global$1 = require('./global-8d73eec8.js');
const appGlobals = require('./app-globals-2a849ec7.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return appGlobals.patchEsm().then(() => {
  appGlobals.globalScripts();
  return global$1.bootstrapLazy([["sgnw-rating_3.cjs",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]],[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]],[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]],["sgnw-sign.cjs",[[1,"sgnw-sign",{"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
