'use strict';

const index = require('./index-ef075f17.js');
const appGlobals = require('./app-globals-b1d5e126.js');

appGlobals.patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["sgnw-rating_3.cjs",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]],[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]],[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1040],"sgnw":[32]}]]]], options);
});