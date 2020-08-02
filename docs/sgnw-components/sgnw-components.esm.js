import { b as bootstrapLazy } from './index-2ae47337.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-07cd3555.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["sgnw-rating",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]]]],["sgnw-signbox",[[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]]]],["sgnw-symbol",[[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1040],"sgnw":[32]}]]]], options);
});
