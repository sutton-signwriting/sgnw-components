/*!
 * The Sutton SignWriting Web Components
 */
import { r as registerInstance, h, i as Host, j as getElement } from './_commonjsHelpers-c68e7108.js';
import { f as fsw } from './fsw-f254485a.js';
import { s as style } from './style-3227b12d.js';

const fswVpCss = ":host{writing-mode:vertical-lr;border-left:1px solid blue;height:100%;font-size:0px;flex-wrap:wrap;justify-content:flex-start}:host span{border-left:1px dashed red}div{writing-mode:horizontal-tb;display:inline-block;padding:10px}fsw-sign,fsw-symbol{writing-mode:horizontal-tb;display:inline-block;vertical-align:middle;box-sizing:content-box;position:relative}fsw-sign{padding:20px}fsw-symbol{padding-bottom:20px}";

const FswVp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
    this.items = [];
  }
  parseText(newValue) {
    //parse it here.
    const sign = `${fsw.re.sign}(${style.re.full})?`;
    const signRE = new RegExp(sign);
    const spatial = `${fsw.re.spatial}(${style.re.full})?`;
    const spatialRE = new RegExp(spatial);
    const img = '<img.*?>';
    const imgRE = new RegExp(img);
    const regex = `(${sign}|${spatial}|${img}|.)`;
    let result = newValue.match(new RegExp(regex, 'g'));
    let output = [];
    let other = "";
    let type = "";
    for (let val of result) {
      if (signRE.test(val)) {
        type = "sign";
      }
      else if (spatialRE.test(val)) {
        type = "spatial";
      }
      else if (imgRE.test(val)) {
        type = "img";
      }
      else {
        type = "other";
        other += val;
      }
      if (type != "other") {
        if (other && other != " ") {
          output.push({ other: other });
        }
        other = "";
        if (type == "sign" || type == "spatial") {
          output.push({ [type]: val, info: fsw.info(val) });
        }
        else {
          output.push({ [type]: val });
        }
      }
    }
    ;
    if (other && other != " ") {
      output.push({ other: other });
    }
    this.items = output;
  }
  connectedCallback() {
    this.vp = this.el.innerHTML;
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
    return (h(Host, { vp: this.vp }, h("span", null, this.items.map((item) => {
      if (item['sign']) {
        item['info']['right'] = (500 - parseInt(item['info']['width']) / 2) - parseInt(item['info']["minX"]);
        return h("fsw-sign", { style: { "width": item['info']['width'] + "px", "height": item['info']['height'] + "px", right: item['info']['right'] + "px" } }, item['sign']);
      }
      else if (item['spatial']) {
        item['info']['right'] = (500 - parseInt(item['info']["minX"]));
        return h("fsw-symbol", { style: { "width": item['info']['width'] + "px", "height": item['info']['height'] + "px" } }, item['spatial']);
      }
      else if (item['img']) {
        return h("div", { innerHTML: item['img'] });
      }
      else {
        return h("div", null, item['other']);
      }
    }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "vp": ["parseText"]
  }; }
};
FswVp.style = fswVpCss;

export { FswVp as fsw_vp };
