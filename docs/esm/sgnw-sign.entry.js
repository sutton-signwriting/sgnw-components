import { r as registerInstance, h, H as Host, g as getElement } from './index-99335cd3.js';
import { r as rgba2hex, b as rgb2hex } from './global-7f6cfbdc.js';
import { e, r, I, l, a as d, m, t, k } from './fsw.min-4bd478f1.js';

const sgnwSignCss = "";

const SgnwSign = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = e.sign(newValue);
            if (fsw && fsw.box) {
                delete fsw.style;
                this.fsw = r.sign(fsw);
                this.swu = I(this.fsw);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = l.sign(newValue);
            if (swu && swu.box) {
                delete swu.style;
                this.swu = d.sign(swu);
                this.fsw = m(this.swu);
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
            styleStr = t(styleObj);
        }
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (h(Host, { fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? k(this.fsw + (styleStr)) : '' }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
};
SgnwSign.style = sgnwSignCss;

export { SgnwSign as sgnw_sign };
