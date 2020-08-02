import { r as registerInstance, e as createEvent, h } from './index-2ae47337.js';

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

export { SgnwRating as sgnw_rating };
