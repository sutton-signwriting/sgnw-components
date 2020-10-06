import { r as registerInstance, e as createEvent, h, f as rgba2hex, g as rgb2hex, H as Host, i as getElement } from './global-1e1040f7.js';
import { u, d, e, x, b, l, g, m, t, w } from './fsw.min-4bd478f1.js';

const sgnwRatingCss = ".rating{color:orange}";

const SgnwRating = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ratingUpdated = createEvent(this, "ratingUpdated", 7);
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
                starList.push(h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2605"));
            }
            else {
                starList.push(h("span", { class: "rating", onClick: () => this.setValue(i), onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (h("div", null, this.starList));
    }
    static get watchers() { return {
        "value": ["componentWillLoad"]
    }; }
};
SgnwRating.style = sgnwRatingCss;

const sgnwSignboxCss = ":host{width:100%;height:400px;background-color:#333;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:7px;touch-action:none}";

const SgnwSignbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("slot", null)));
    }
};
SgnwSignbox.style = sgnwSignboxCss;

const sgnwSymbolCss = "";

const SgnwSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = u(iid);
                    this.swu = d(iid);
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
                var fsw = e.symbol(newValue);
                if (fsw && fsw.symbol) {
                    this.fsw = fsw.symbol;
                    this.iid = x(fsw.symbol);
                    this.swu = b(fsw.symbol);
                }
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = l.symbol(newValue);
            if (swu && swu.symbol) {
                this.iid = g(swu.symbol);
                this.fsw = m(swu.symbol);
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
        return (h(Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? w(this.fsw + (styleStr)) : '' }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "iid": ["iidUpdate"],
        "fsw": ["fswUpdate"],
        "swu": ["swuUpdate"]
    }; }
};
SgnwSymbol.style = sgnwSymbolCss;

export { SgnwRating as sgnw_rating, SgnwSignbox as sgnw_signbox, SgnwSymbol as sgnw_symbol };
