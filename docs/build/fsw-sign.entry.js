/*!
 * The Sutton SignWriting Web Components
 */
import { r as registerInstance, h, i as Host, j as getElement } from './_commonjsHelpers-c68e7108.js';
import { f as fsw } from './fsw-f254485a.js';
import { s as style } from './style-3227b12d.js';
import { f as fsw$1 } from './fsw-c36f028a.js';
import { c as cssValues } from './global-e0c167ca.js';

const fswSignCss = ":host{direction:ltr}";

const FswSign = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.sign) {
      let sign = fsw.parse.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling = sign.style;
      }
      sign.style = "";
      this.sign = fsw.compose.sign(sign);
    }
    if (!this.sgnw) {
      let self = this;
      function handleSgnw() {
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);
      }
      window.addEventListener('sgnw', handleSgnw, false);
    }
  }
  render() {
    let styleStr = '';
    if (this.styling) {
      styleStr = this.styling;
    }
    else {
      const styleObj = cssValues(this.el);
      styleStr = style.compose(styleObj);
    }
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    return (h(Host, { sign: this.sign, styling: this.styling, innerHTML: this.sgnw ? fsw$1.signSvg(this.sign + (styleStr)) : '' }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
FswSign.style = fswSignCss;

export { FswSign as fsw_sign };
