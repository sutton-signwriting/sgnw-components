/*!
 * The Sutton SignWriting Web Components
 */
import { r as registerInstance, h, i as Host, j as getElement } from './_commonjsHelpers-c68e7108.js';
import { f as fsw } from './fsw-f254485a.js';
import { s as style } from './style-3227b12d.js';
import { f as fsw$1 } from './fsw-c36f028a.js';
import { r as rgba2hex, b as rgb2hex } from './global-e0c167ca.js';

const fswSymbolCss = "";

const FswSymbol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.symbol) {
      let symbol = fsw.parse.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = symbol.style;
      }
      symbol.style = "";
      this.symbol = fsw.compose.symbol(symbol);
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
    return (h(Host, { symbol: this.symbol, styling: this.styling, innerHTML: this.sgnw ? fsw$1.symbolSvg(this.symbol + (styleStr)) : '' }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
FswSymbol.style = fswSymbolCss;

export { FswSymbol as fsw_symbol };
