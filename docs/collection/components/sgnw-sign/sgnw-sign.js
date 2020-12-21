//
import { Watch, Component, Element, State, Prop, Host, h } from '@stencil/core';
// @ts-ignore
import { fsw2swu, swu2fsw } from '@sutton-signwriting/core/convert/convert.min.mjs';
// @ts-ignore
import { parse as parseFSW, compose as composeFSW } from '@sutton-signwriting/core/fsw/fsw.min.mjs';
// @ts-ignore
import { parse as parseSWU, compose as composeSWU } from '@sutton-signwriting/core/swu/swu.min.mjs';
// @ts-ignore
import { compose as composeStyle } from '@sutton-signwriting/core/style/style.min.mjs';
// @ts-ignore
import { signSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.min.mjs';
import { rgb2hex, rgba2hex } from '../../global/global';
export class SgnwSign {
  constructor() {
    this.sgnw = window.sgnw;
  }
  fswUpdate(newValue, oldValue) {
    if (newValue != oldValue) {
      var fsw = parseFSW.sign(newValue);
      if (fsw && fsw.box) {
        delete fsw.style;
        this.fsw = composeFSW.sign(fsw);
        this.swu = fsw2swu(this.fsw);
      }
    }
  }
  swuUpdate(newValue, oldValue) {
    if (newValue != oldValue) {
      var swu = parseSWU.sign(newValue);
      if (swu && swu.box) {
        delete swu.style;
        this.swu = composeSWU.sign(swu);
        this.fsw = swu2fsw(this.swu);
      }
    }
  }
  connectedCallback() {
    if (!this.sgnw) {
      let self = this;
      function handleSgnw() {
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);
      }
      window.addEventListener('sgnw', handleSgnw, false);
    }
    if (this.fsw) {
      this.fswUpdate(this.fsw, "");
    }
    else if (this.swu) {
      this.swuUpdate(this.swu, "");
    }
  }
  render() {
    let styleStr = '';
    if (this.styling) {
      styleStr = this.styling;
    }
    else {
      let css = window.getComputedStyle(this.el, null);
      const styleObj = {
        "padding": css.getPropertyValue("padding"),
        "background": rgba2hex(css.getPropertyValue("background-color")),
        "detail": [
          rgb2hex(css.getPropertyValue("color")),
          rgb2hex(css.getPropertyValue("background-color"))
        ],
        "zoom": parseInt(css.getPropertyValue("font-size").slice(0, -2)) / 30
      };
      styleStr = composeStyle(styleObj);
    }
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    return (h(Host, { fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? signSvg(this.fsw + (styleStr)) : '' },
      h("slot", null)));
  }
  static get is() { return "sgnw-sign"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sgnw-sign.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sgnw-sign.css"]
  }; }
  static get properties() { return {
    "fsw": {
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
        "text": "Formal SignWriting in ASCII (FSW) for sign with optional style string"
      },
      "attribute": "fsw",
      "reflect": true
    },
    "swu": {
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
        "text": "SignWriting in Unicode (SWU) for sign with optional style string"
      },
      "attribute": "swu",
      "reflect": true
    },
    "styling": {
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
        "text": "Style String for sign"
      },
      "attribute": "styling",
      "reflect": true
    }
  }; }
  static get states() { return {
    "sgnw": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "fsw",
      "methodName": "fswUpdate"
    }, {
      "propName": "swu",
      "methodName": "swuUpdate"
    }]; }
}
