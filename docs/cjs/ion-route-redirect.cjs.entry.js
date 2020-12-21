'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');

const RouteRedirect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = index.createEvent(this, "ionRouteRedirectChanged", 7);
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() { return {
    "from": ["propDidChange"],
    "to": ["propDidChange"]
  }; }
};

exports.ion_route_redirect = RouteRedirect;
