//
import { Watch, Component, Element, State, Prop, Host, h } from '@stencil/core';
// @ts-ignore
import { key2id, key2swu, id2key, id2swu, swu2id, swu2fsw } from '@sutton-signwriting/core/convert/convert.min.mjs';
// @ts-ignore
import { parse as parseFSW } from '@sutton-signwriting/core/fsw/fsw.min.mjs';
// @ts-ignore
import { parse as parseSWU } from '@sutton-signwriting/core/swu/swu.min.mjs';
// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.min.mjs';
export class SgnwSymbol {
    constructor() {
        this.sgnw = window.sgnw;
    }
    iidUpdate(newValue, oldValue) {
        var iid = parseInt(newValue);
        if (!isNaN(iid)) {
            if (newValue != oldValue) {
                if (iid > 0 && iid < 65535) {
                    this.fsw = id2key(iid);
                    this.swu = id2swu(iid);
                }
            }
        }
        else {
            this.iid = 0;
        }
    }
    fswUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var fsw = parseFSW.symbol(newValue);
            if (fsw && fsw.symbol) {
                this.iid = key2id(fsw.symbol);
                this.swu = key2swu(fsw.symbol);
            }
        }
    }
    swuUpdate(newValue, oldValue) {
        if (newValue != oldValue) {
            var swu = parseSWU.symbol(newValue);
            if (swu && swu.symbol) {
                this.iid = swu2id(swu.symbol);
                this.fsw = swu2fsw(swu.symbol);
            }
        }
    }
    stylingUpdate(newValue, oldValue) {
        console.log(newValue, oldValue);
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
        var iid, fsw, swu, styling;
        if (this.fsw) {
            fsw = this.fsw;
        }
        else if (this.swu) {
            swu = this.swu;
        }
        else if (this.iid) {
            iid = this.iid;
        }
        if (this.styling) {
            styling = this.styling;
        }
        if (!(iid || fsw || swu)) {
            var contents = this.el.innerHTML;
            var fswP = parseFSW.symbol(contents);
            var swuP = parseSWU.symbol(contents);
            var iidP = parseInt(contents);
            if (fswP && fswP.symbol) {
                fsw = fswP.symbol + (fswP.style ? fswP.style : "");
            }
            else if (swuP && swuP.symbol) {
                swu = swuP.symbol;
                swu = swuP.symbol + (swuP.style ? swuP.style : "");
            }
            else if (iidP > 0 && iidP < 65535) {
                iid = iidP;
            }
        }
        if (fsw) {
            this.fsw = fsw;
            this.fswUpdate(this.fsw, "");
        }
        else if (swu) {
            this.swu = swu;
            this.swuUpdate(this.swu, "");
        }
        else {
            if (!iid) {
                iid = 0;
            }
            this.iid = iid;
            this.iidUpdate(this.iid.toString(), "0");
        }
        if (styling) {
            this.styling = styling;
        }
    }
    render() {
        //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
        return (h(Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? symbolSvg(this.fsw) : '' },
            h("slot", null)));
    }
    static get is() { return "sgnw-symbol"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sgnw-symbol.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sgnw-symbol.css"]
    }; }
    static get properties() { return {
        "iid": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "ISWA 2010 ID"
            },
            "attribute": "iid",
            "reflect": true
        },
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
                "text": "Formal SignWriting in ASCII (FSW) for symbol with optional style string"
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
                "text": "SignWriting in Unicode (SWU) for symbol with optional style string"
            },
            "attribute": "swu",
            "reflect": true
        },
        "styling": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Styling Object for symbol"
            }
        }
    }; }
    static get states() { return {
        "sgnw": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "iid",
            "methodName": "iidUpdate"
        }, {
            "propName": "fsw",
            "methodName": "fswUpdate"
        }, {
            "propName": "swu",
            "methodName": "swuUpdate"
        }, {
            "propName": "styling",
            "methodName": "stylingUpdate"
        }]; }
}
