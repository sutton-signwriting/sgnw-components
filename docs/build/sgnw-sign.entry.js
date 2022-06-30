/*!
 * The Sutton SignWriting Web Components
 */
import { r as registerInstance, h, i as Host, j as getElement } from './_commonjsHelpers-c68e7108.js';
import { s as swu, a as swu$1 } from './swu-9f211d7f.js';
import { s as style } from './style-3227b12d.js';
import { r as rgba2hex, b as rgb2hex } from './global-e0c167ca.js';

const sgnwSignCss = ":host{direction:ltr}";

const SgnwSign = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.sign) {
      let sign = swu.parse.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling = sign.style;
      }
      sign.style = "";
      this.sign = swu.compose.sign(sign);
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
      styleStr = style.compose(styleObj);
    }
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    return (h(Host, { sign: this.sign, styling: this.styling, innerHTML: this.sgnw ? swu$1.signSvg(this.sign + (styleStr)) : '' }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
SgnwSign.style = sgnwSignCss;

export { SgnwSign as sgnw_sign };
