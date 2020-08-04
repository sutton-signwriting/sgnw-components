//
import { Component, Prop, State, Event, h, Watch, Listen } from '@stencil/core';
export class SgnwRating {
    constructor() {
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
    static get is() { return "sgnw-rating"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sgnw-rating.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sgnw-rating.css"]
    }; }
    static get properties() { return {
        "maxValue": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "max number of stars"
            },
            "attribute": "max-value",
            "reflect": false,
            "defaultValue": "5"
        },
        "value": {
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
                "text": "current number of stars"
            },
            "attribute": "value",
            "reflect": true,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "starList": {}
    }; }
    static get events() { return [{
            "method": "ratingUpdated",
            "name": "ratingUpdated",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "number of stars was updated"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "componentWillLoad"
        }]; }
    static get listeners() { return [{
            "name": "ratingUpdated",
            "method": "logUpdate",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
