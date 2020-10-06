'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const global$1 = require('./global-8d73eec8.js');
const fsw_min = require('./fsw.min-c9f56137.js');

const sgnwSignCss = "";

const SgnwSign = class {
    constructor(hostRef) {
        global$1.registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = fsw_min.e.sign(newValue);
            if (fsw && fsw.box) {
                delete fsw.style;
                this.fsw = fsw_min.r.sign(fsw);
                this.swu = fsw_min.I(this.fsw);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = fsw_min.l.sign(newValue);
            if (swu && swu.box) {
                delete swu.style;
                this.swu = fsw_min.d$1.sign(swu);
                this.fsw = fsw_min.m(this.swu);
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
                "background": global$1.rgba2hex(css.getPropertyValue("background-color")),
                "detail": [
                    global$1.rgb2hex(css.getPropertyValue("color")),
                    global$1.rgb2hex(css.getPropertyValue("background-color"))
                ],
                "zoom": parseInt(css.getPropertyValue("font-size").slice(0, -2)) / 30
            };
            styleStr = fsw_min.t(styleObj);
        }
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (global$1.h(global$1.Host, { fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? fsw_min.k(this.fsw + (styleStr)) : '' }, global$1.h("slot", null)));
    }
    get el() { return global$1.getElement(this); }
    static get watchers() { return {
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
};
SgnwSign.style = sgnwSignCss;

exports.sgnw_sign = SgnwSign;
