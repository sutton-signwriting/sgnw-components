'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

const Reorder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
    return (index.h(index.Host, { class: mode }, index.h("slot", null, index.h("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
  }
  get el() { return index.getElement(this); }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};

exports.ion_reorder = Reorder;
