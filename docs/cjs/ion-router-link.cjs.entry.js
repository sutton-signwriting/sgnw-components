'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');
const theme = require('./theme-98ccfc24.js');

const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

const RouterLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    this.onClick = (ev) => {
      theme.openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return (index.h(index.Host, { onClick: this.onClick, class: theme.createColorClasses(this.color, {
        [mode]: true,
        'ion-activatable': true
      }) }, index.h("a", Object.assign({}, attrs), index.h("slot", null))));
  }
};
RouterLink.style = routerLinkCss;

exports.ion_router_link = RouterLink;
