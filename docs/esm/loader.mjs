import { b as bootstrapLazy } from './global-1e1040f7.js';
import { a as patchEsm, g as globalScripts } from './app-globals-5f62a48e.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["sgnw-rating_3",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]],[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]],[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]],["sgnw-sign",[[1,"sgnw-sign",{"fsw":[1537],"swu":[1537],"styling":[1537],"sgnw":[32]}]]]], options);
  });
};

export { defineCustomElements };
