'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fc94fd74.js');
const global$1 = require('./global-4674ea55.js');
const fsw_min = require('./fsw.min-c9f56137.js');

const sgnwRatingCss = ".rating{color:orange}";

const SgnwRating = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ratingUpdated = index.createEvent(this, "ratingUpdated", 7);
        /** max number of stars */
        this.maxValue = 5;
        /** current number of stars */
        this.value = 0;
        this.starList = [];
    }
    componentWillLoad() {
        this.createStarList(this.value);
    }
    logUpdate() {
        console.log("ratingUpdated");
    }
    setValue(newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.ratingUpdated.emit({ value: this.value });
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(index.h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2605"));
            }
            else {
                starList.push(index.h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (index.h("div", null, this.starList));
    }
    static get watchers() { return {
        "value": ["componentWillLoad"]
    }; }
};
SgnwRating.style = sgnwRatingCss;

const sgnwSignboxCss = ":host{width:100%;height:400px;background-color:#333;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:7px;touch-action:none}";

const SgnwSignbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** array of spatials */
    //  @Prop({mutable: true, reflect: true}) spatials: array;
    //  @Watch('spatials')
    //  updateSpatials() {
    //    this.createSymbolList(this.spatials);
    //  }
    handleMouseDown(ev) {
        console.log('mousedown');
    }
    handleTouchStart(ev) {
        console.log('touchstart');
    }
    render() {
        return (index.h("div", null, index.h("slot", null)));
    }
};
SgnwSignbox.style = sgnwSignboxCss;

const sgnwSymbolCss = "";

const SgnwSymbol = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = fsw_min.u(iid);
                    this.swu = fsw_min.d(iid);
                }
            }
        }
        else {
            this.iid = 0;
        }
    }
    fswUpdate(newValue, oldValue) {
        const len = 6;
        console.log("fsw", this.fsw, "-", newValue, "-", oldValue);
        const tooLong = typeof newValue === 'string' && newValue.length > len;
        if (tooLong) {
            this.fsw = this.fsw.substring(0, len);
        }
        else {
            if (newValue != oldValue) {
                console.log("fswU", this.fsw, "-", newValue, "-", oldValue);
                var fsw = fsw_min.e.symbol(newValue);
                if (fsw && fsw.symbol) {
                    this.fsw = fsw.symbol;
                    this.iid = fsw_min.x(fsw.symbol);
                    this.swu = fsw_min.b(fsw.symbol);
                }
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = fsw_min.l.symbol(newValue);
            if (swu && swu.symbol) {
                this.iid = fsw_min.g(swu.symbol);
                this.fsw = fsw_min.m(swu.symbol);
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
        else {
            if (!this.iid) {
                this.iid = 0;
            }
            this.iidUpdate(this.iid.toString(), "0");
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
        return (index.h(index.Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? fsw_min.w(this.fsw + (styleStr)) : '' }, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "iid": ["iidUpdate"],
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
};
SgnwSymbol.style = sgnwSymbolCss;

exports.sgnw_rating = SgnwRating;
exports.sgnw_signbox = SgnwSignbox;
exports.sgnw_symbol = SgnwSymbol;
