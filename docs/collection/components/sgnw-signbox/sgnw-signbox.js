//
import { Component, Listen, h } from '@stencil/core';
export class SgnwSignbox {
    /** array of spatials */
    //  @Prop({mutable: true, reflect: true}) spatials: array;
    //  @Watch('spatials')
    //  updateSpatials() {
    //    this.createSymbolList(this.spatials);
    //  }
    handleMouseDown(ev) {
        ev;
        console.log('mousedown');
    }
    handleTouchStart(ev) {
        ev;
        console.log('touchstart');
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "sgnw-signbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sgnw-signbox.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sgnw-signbox.css"]
    }; }
    static get listeners() { return [{
            "name": "mousedown",
            "method": "handleMouseDown",
            "target": undefined,
            "capture": true,
            "passive": true
        }, {
            "name": "touchstart",
            "method": "handleTouchStart",
            "target": undefined,
            "capture": true,
            "passive": true
        }]; }
}
