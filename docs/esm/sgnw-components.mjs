import { b as bootstrapLazy } from './index-f826a15c.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-4a111473.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["sgnw-rating_3",[[1,"sgnw-rating",{"maxValue":[2,"max-value"],"value":[1538],"starList":[32]},[[0,"ratingUpdated","logUpdate"]]],[1,"sgnw-signbox",null,[[3,"mousedown","handleMouseDown"],[3,"touchstart","handleTouchStart"]]],[1,"sgnw-symbol",{"iid":[1538],"fsw":[1537],"swu":[1537],"styling":[1040],"sgnw":[32]}]]]], options);
});
