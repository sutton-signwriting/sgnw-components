'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');

const slideCss = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

const Slide = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'swiper-slide': true,
        'swiper-zoom-container': true
      } }));
  }
};
Slide.style = slideCss;

exports.ion_slide = Slide;
