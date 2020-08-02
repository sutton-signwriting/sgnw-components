import { r as registerInstance, h } from './index-2ae47337.js';

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
        ev;
        console.log('mousedown');
    }
    handleTouchStart(ev) {
        ev;
        console.log('touchstart');
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
};
SgnwSignbox.style = sgnwSignboxCss;

export { SgnwSignbox as sgnw_signbox };
