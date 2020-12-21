//
import { Component, Element, Prop, Host, h } from '@stencil/core';
// @ts-ignore
import { parse, compose } from '@sutton-signwriting/unicode8/string/string.min.mjs';
export class SgnwUni8String {
  render() {
    return (h(Host, { uni: this.uni },
      h("span", null, compose(parse(this.uni)))));
  }
  static get is() { return "sgnw-uni8-string"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sgnw-uni8-string.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sgnw-uni8-string.css"]
  }; }
  static get properties() { return {
    "uni": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "SignWriting in Unicode 8 (uni8) for symbol"
      },
      "attribute": "uni",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
