'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');
const theme = require('./theme-98ccfc24.js');

const cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports (backdrop-filter: blur(0)){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(30px)}}";

const cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";

const CardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If `true`, the card header will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        'card-header-translucent': this.translucent,
        'ion-inherit-color': true,
        [mode]: true
      }) }, index.h("slot", null)));
  }
};
CardHeader.style = {
  ios: cardHeaderIosCss,
  md: cardHeaderMdCss
};

exports.ion_card_header = CardHeader;
