'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');
const cubicBezier = require('./cubic-bezier-24e309bf.js');
const frameworkDelegate = require('./framework-delegate-72815681.js');
const index$1 = require('./index-0efde6d6.js');

const routeOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

const RouterOutlet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionNavWillLoad = index.createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = index.createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = index.createEvent(this, "ionNavDidChange", 3);
    this.animationEnabled = true;
    /**
     * The mode determines which platform styles to use.
     */
    this.mode = ionicGlobal.getIonMode(this);
    /**
     * If `true`, the router-outlet should animate the transition of components.
     */
    this.animated = true;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== undefined);
    }
  }
  async connectedCallback() {
    this.gesture = (await Promise.resolve().then(function () { return require('./swipe-back-c1951cbd.js'); })).createSwipeBackGesture(this.el, () => !!this.swipeHandler && this.swipeHandler.canStart() && this.animationEnabled, () => this.swipeHandler && this.swipeHandler.onStart(), step => this.ani && this.ani.progressStep(step), (shouldComplete, step, dur) => {
      if (this.ani) {
        this.animationEnabled = false;
        this.ani.onFinish(() => {
          this.animationEnabled = true;
          if (this.swipeHandler) {
            this.swipeHandler.onEnd(shouldComplete);
          }
        }, { oneTimeCallback: true });
        // Account for rounding errors in JS
        let newStepValue = (shouldComplete) ? -0.001 : 0.001;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */
        if (!shouldComplete) {
          this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
          newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
          newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
      }
    });
    this.swipeHandlerChanged();
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /** @internal */
  async commit(enteringEl, leavingEl, opts) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.transition(enteringEl, leavingEl, opts);
    }
    catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  /** @internal */
  async setRouteId(id, params, direction, animation) {
    const changed = await this.setRoot(id, params, {
      duration: direction === 'root' ? 0 : undefined,
      direction: direction === 'back' ? 'back' : 'forward',
      animationBuilder: animation
    });
    return {
      changed,
      element: this.activeEl
    };
  }
  /** @internal */
  async getRouteId() {
    const active = this.activeEl;
    return active ? {
      id: active.tagName,
      element: active,
    } : undefined;
  }
  async setRoot(component, params, opts) {
    if (this.activeComponent === component) {
      return false;
    }
    // attach entering view to DOM
    const leavingEl = this.activeEl;
    const enteringEl = await frameworkDelegate.attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    // commit animation
    await this.commit(enteringEl, leavingEl, opts);
    await frameworkDelegate.detachComponent(this.delegate, leavingEl);
    return true;
  }
  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    }
    // emit nav will change event
    this.ionNavWillChange.emit();
    const { el, mode } = this;
    const animated = this.animated && ionicGlobal.config.getBoolean('animated', true);
    const animationBuilder = this.animation || opts.animationBuilder || ionicGlobal.config.get('navAnimation');
    await index$1.transition(Object.assign(Object.assign({ mode,
      animated,
      enteringEl,
      leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
        ? ani => this.ani = ani
        : undefined) }, opts), { animationBuilder }));
    // emit nav changed event
    this.ionNavDidChange.emit();
    return true;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise(r => resolve = r);
    if (p !== undefined) {
      await p;
    }
    return resolve;
  }
  render() {
    return (index.h("slot", null));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "swipeHandler": ["swipeHandlerChanged"]
  }; }
};
RouterOutlet.style = routeOutletCss;

exports.ion_router_outlet = RouterOutlet;
