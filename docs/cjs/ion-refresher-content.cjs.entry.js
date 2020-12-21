'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');
const index$1 = require('./index-427d03fb.js');
const spinnerConfigs = require('./spinner-configs-559523fd.js');

const RefresherContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
      this.pullingIcon = ionicGlobal.config.get('refreshingIcon', mode === 'ios' && ionicGlobal.isPlatform('mobile') ? ionicGlobal.config.get('spinner', overflowRefresher) : 'circular');
    }
    if (this.refreshingSpinner === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      this.refreshingSpinner = ionicGlobal.config.get('refreshingSpinner', ionicGlobal.config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
    }
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && spinnerConfigs.SPINNERS[pullingIcon] !== undefined;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: mode }, index.h("div", { class: "refresher-pulling" }, this.pullingIcon && hasSpinner &&
      index.h("div", { class: "refresher-pulling-icon" }, index.h("div", { class: "spinner-arrow-container" }, index.h("ion-spinner", { name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' &&
        index.h("div", { class: "arrow-container" }, index.h("ion-icon", { name: "caret-back-sharp" })))), this.pullingIcon && !hasSpinner &&
      index.h("div", { class: "refresher-pulling-icon" }, index.h("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
      index.h("div", { class: "refresher-pulling-text", innerHTML: index$1.sanitizeDOMString(this.pullingText) })), index.h("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
      index.h("div", { class: "refresher-refreshing-icon" }, index.h("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
      index.h("div", { class: "refresher-refreshing-text", innerHTML: index$1.sanitizeDOMString(this.refreshingText) }))));
  }
  get el() { return index.getElement(this); }
};

exports.ion_refresher_content = RefresherContent;
