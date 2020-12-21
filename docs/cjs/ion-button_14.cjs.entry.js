'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');
const global$1 = require('./global-88dd5b19.js');
const helpers = require('./helpers-26770c32.js');
const theme = require('./theme-98ccfc24.js');
const fsw_min$1 = require('./fsw.min-c9f56137.js');

const buttonIosCss = ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}";

const buttonMdCss = ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.inheritedAttributes = {};
    /**
     * The type of button.
     */
    this.buttonType = 'button';
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    /**
     * If `true`, activates a button with a heavier font weight.
     */
    this.strong = false;
    /**
     * The type of the button.
     */
    this.type = 'button';
    this.handleClick = (ev) => {
      if (this.type === 'button') {
        theme.openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      }
      else if (helpers.hasShadowDom(this.el)) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit it
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest('ion-buttons');
    this.inListHeader = !!this.el.closest('ion-list-header');
    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['aria-label']);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === undefined || this.fill === 'clear';
    // If the button is in a toolbar, has a clear fill (which is the default)
    // and only has an icon we use the unbounded "circular" ripple effect
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return 'unbounded';
    }
    return 'bounded';
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    const TagType = href === undefined ? 'button' : 'a';
    const attrs = (TagType === 'button')
      ? { type }
      : {
        download: this.download,
        href,
        rel,
        target
      };
    let fill = this.fill;
    if (fill === undefined) {
      fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
    }
    return (index.h(index.Host, { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: theme.createColorClasses(color, {
        [mode]: true,
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== undefined,
        [`${buttonType}-${finalSize}`]: finalSize !== undefined,
        [`${buttonType}-${shape}`]: shape !== undefined,
        [`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
        'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
        'button-has-icon-only': hasIconOnly,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
      }) }, index.h(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), index.h("span", { class: "button-inner" }, index.h("slot", { name: "icon-only" }), index.h("slot", { name: "start" }), index.h("slot", null), index.h("slot", { name: "end" })), mode === 'md' && index.h("ion-ripple-effect", { type: this.rippleType }))));
  }
  get el() { return index.getElement(this); }
};
Button.style = {
  ios: buttonIosCss,
  md: buttonMdCss
};

const cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;transform:translateZ(0);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){transform:scale3d(0.97, 0.97, 1)}";

const cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If `true`, a button tag will be rendered and the card will be tappable.
     */
    this.button = false;
    /**
     * The type of the button. Only used when an `onclick` or `button` property is present.
     */
    this.type = 'button';
    /**
     * If `true`, the user cannot interact with the card.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
  }
  isClickable() {
    return (this.href !== undefined || this.button);
  }
  renderCard(mode) {
    const clickable = this.isClickable();
    if (!clickable) {
      return [
        index.h("slot", null)
      ];
    }
    const { href, routerAnimation, routerDirection } = this;
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href: this.href,
        rel: this.rel,
        target: this.target
      };
    return (index.h(TagType, Object.assign({}, attrs, { class: "card-native", part: "native", disabled: this.disabled, onClick: (ev) => theme.openURL(href, ev, routerDirection, routerAnimation) }), index.h("slot", null), clickable && mode === 'md' && index.h("ion-ripple-effect", null)));
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
        'card-disabled': this.disabled,
        'ion-activatable': this.isClickable()
      }) }, this.renderCard(mode)));
  }
};
Card.style = {
  ios: cardIosCss,
  md: cardMdCss
};

const SIZE_TO_MEDIA = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = (breakpoint) => {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

const colCss = ":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}}";

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
const Col = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  onResize() {
    index.forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }
    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns('size');
    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <ion-col size-md>
    if (!columns || columns === '') {
      return;
    }
    // If the size is set to auto then don't calculate a size
    const colSize = (columns === 'auto')
      ? 'auto'
      // If CSS supports variables we should use the grid columns var
      : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        : ((columns / 12) * 100) + '%';
    return {
      'flex': `0 0 ${colSize}`,
      'width': `${colSize}`,
      'max-width': `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = SUPPORTS_VARS
      // If CSS supports variables we should use the grid columns var
      ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
  }
  calculatePull(isRTL) {
    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
  }
  calculatePush(isRTL) {
    return this.calculatePosition('push', isRTL ? 'right' : 'left');
  }
  render() {
    const isRTL = document.dir === 'rtl';
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true
      }, style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, index.h("slot", null)));
  }
};
Col.style = colCss;

const gridCss = ":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;flex:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";

const Grid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If `true`, the grid will have a fixed width based on the screen size.
     */
    this.fixed = false;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'grid-fixed': this.fixed
      } }, index.h("slot", null)));
  }
};
Grid.style = gridCss;

let CACHED_MAP;
const getIconMap = () => {
    if (typeof window === 'undefined') {
        return new Map();
    }
    else {
        if (!CACHED_MAP) {
            const win = window;
            win.Ionicons = win.Ionicons || {};
            CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
        }
        return CACHED_MAP;
    }
};
const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
const getNamedUrl = (iconName) => {
    const url = getIconMap().get(iconName);
    if (url) {
        return url;
    }
    return index.getAssetPath(`svg/${iconName}.svg`);
};
const getName = (iconName, icon, mode, ios, md) => {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        iconName = toLower(ios);
    }
    else if (md && mode === 'md') {
        iconName = toLower(md);
    }
    else {
        if (!iconName && icon && !isSrc(icon)) {
            iconName = icon;
        }
        if (isStr(iconName)) {
            iconName = toLower(iconName);
        }
    }
    if (!isStr(iconName) || iconName.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return iconName;
};
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const validateContent = (svgContent) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
        if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
            div.removeChild(div.childNodes[i]);
        }
    }
    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
        const svgClass = svgElm.getAttribute('class') || '';
        svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());
        // root element must be an svg
        // lets double check we've got valid elements
        // do not allow scripts
        if (isValid(svgElm)) {
            return div.innerHTML;
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const ioniconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
            // we don't already have a request
            req = fetch(url).then((rsp) => {
                if (rsp.ok) {
                    return rsp.text().then((svgContent) => {
                        if (svgContent && sanitize !== false) {
                            svgContent = validateContent(svgContent);
                        }
                        ioniconContent.set(url, svgContent || '');
                    });
                }
                ioniconContent.set(url, '');
            });
            // cache for the same requests
            requests.set(url, req);
        }
        else {
            // set to empty for ssr scenarios and resolve promise
            ioniconContent.set(url, '');
            return Promise.resolve();
        }
    }
    return req;
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isVisible = false;
    /**
     * The mode determines which platform styles to use.
     */
    this.mode = getIonMode();
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    this.lazy = false;
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if ( this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        }
        else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => (this.svgContent = ioniconContent.get(url)));
        }
      }
    }
    if (!this.ariaLabel && this.ariaHidden !== 'true') {
      const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const mode = this.mode || 'md';
    const flipRtl = this.flipRtl ||
      (this.ariaLabel &&
        (this.ariaLabel.indexOf('arrow') > -1 || this.ariaLabel.indexOf('chevron') > -1) &&
        this.flipRtl !== false);
    return (index.h(index.Host, { role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) },  this.svgContent ? (index.h("div", { class: "icon-inner", innerHTML: this.svgContent })) : (index.h("div", { class: "icon-inner" }))));
  }
  static get assetsDirs() { return ["svg"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "icon": ["loadIcon"]
  }; }
};
const getIonMode = () => ( typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
const createColorClasses = (color) => {
  return color
    ? {
      'ion-color': true,
      [`ion-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

const inputIosCss = ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}";

const inputMdCss = ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}";

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionInput = index.createEvent(this, "ionInput", 7);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
    this.inputId = `ion-input-${inputIds++}`;
    this.didBlurAfterEdit = false;
    this.inheritedAttributes = {};
    /**
     * This is required for a WebKit bug which requires us to
     * blur and focus an input to properly focus the input in
     * an item with delegatesFocus. It will no longer be needed
     * with iOS 14.
     *
     * @internal
     */
    this.fireFocusEvents = true;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    this.autocapitalize = 'off';
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    this.autocorrect = 'off';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */
    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */
    this.spellcheck = false;
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * The value of the input.
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.ionInput.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.focusChanged();
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.ionBlur.emit(ev);
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.focusChanged();
      this.emitStyle();
      if (this.fireFocusEvents) {
        this.ionFocus.emit(ev);
      }
    };
    this.onKeydown = (ev) => {
      if (this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
      }
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.ionChange = helpers.debounceEvent(this.ionChange, this.debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.emitStyle();
    this.ionChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['tabindex', 'title']);
  }
  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el
      }));
    }
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return (clearOnEdit === undefined)
      ? type === 'password'
      : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'input': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }
  focusChanged() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = helpers.findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null, class: theme.createColorClasses(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus
      }) }, index.h("input", Object.assign({ class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }, this.inheritedAttributes)), (this.clearInput && !this.readonly && !this.disabled) && index.h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "disabled": ["disabledChanged"],
    "value": ["valueChanged"]
  }; }
};
let inputIds = 0;
Input.style = {
  ios: inputIosCss,
  md: inputMdCss
};

const itemIosCss = ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;box-sizing:border-box;z-index:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;transition:var(--transition);z-index:-1}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);box-shadow:var(--inner-box-shadow);overflow:inherit;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){flex:1}:host(.item-input){align-items:center}.input-wrapper{display:flex;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{flex:1;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background);z-index:1}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:20px;--inner-padding-end:10px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:#000;--background-focused:#000;--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:17px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted([slot=start]){margin-left:0;margin-right:20px;margin-top:2px;margin-bottom:2px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:20px;margin-inline-end:20px}}::slotted([slot=end]){margin-left:10px;margin-right:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0px;margin-inline-start:0px}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}";

const itemMdCss = ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;box-sizing:border-box;z-index:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;transition:var(--transition);z-index:-1}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);box-shadow:var(--inner-box-shadow);overflow:inherit;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){flex:1}:host(.item-input){align-items:center}.input-wrapper{display:flex;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{flex:1;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background);z-index:1}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--color:var(--ion-item-color, var(--ion-text-color, #000));--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:11px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}";

const Item = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.labelColorStyles = {};
    this.itemStyles = new Map();
    this.multipleInputs = false;
    /**
     * If `true`, a button tag will be rendered and the item will be tappable.
     */
    this.button = false;
    /**
     * The icon to use when `detail` is set to `true`.
     */
    this.detailIcon = 'chevron-forward';
    /**
     * If `true`, the user cannot interact with the item.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    /**
     * The type of the button. Only used when an `onclick` or `button` property is present.
     */
    this.type = 'button';
  }
  labelColorChanged(ev) {
    const { color } = this;
    // There will be a conflict with item color if
    // we apply the label color to item, so we ignore
    // the label color if the user sets a color on item
    if (color === undefined) {
      this.labelColorStyles = ev.detail;
    }
  }
  itemStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.itemStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      index.forceUpdate(this);
    }
  }
  componentDidUpdate() {
    // Do not use @Listen here to avoid making all items
    // appear as clickable to screen readers
    // https://github.com/ionic-team/ionic-framework/issues/22011
    const input = this.getFirstInput();
    if (input && !this.clickListener) {
      this.clickListener = (ev) => this.delegateFocus(ev, input);
      this.el.addEventListener('click', this.clickListener);
    }
  }
  disconnectedCallback() {
    const input = this.getFirstInput();
    if (input && this.clickListener) {
      this.el.removeEventListener('click', this.clickListener);
      this.clickListener = undefined;
    }
  }
  componentDidLoad() {
    this.setMultipleInputs();
  }
  // If the item contains multiple clickable elements and/or inputs, then the item
  // should not have a clickable input cover over the entire item to prevent
  // interfering with their individual click events
  setMultipleInputs() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll('ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle');
    // The following elements should also stay clickable when an input with cover is present
    const clickables = this.el.querySelectorAll('ion-anchor, ion-button, a, button');
    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1
      || covers.length + clickables.length > 1
      || covers.length > 0 && this.isClickable();
  }
  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  hasCover() {
    const inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
    return inputs.length === 1 && !this.multipleInputs;
  }
  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  isClickable() {
    return (this.href !== undefined || this.button);
  }
  canActivate() {
    return (this.isClickable() || this.hasCover());
  }
  getFirstInput() {
    const inputs = this.el.querySelectorAll('ion-input, ion-textarea');
    return inputs[0];
  }
  // This is needed for WebKit due to a delegatesFocus bug where
  // clicking on the left padding of an item is not focusing the input
  // but is opening the keyboard. It will no longer be needed with
  // iOS 14.
  delegateFocus(ev, input) {
    const clickedItem = ev.target.tagName === 'ION-ITEM';
    let firstActive = false;
    // If the first input is the same as the active element we need
    // to focus the first input again, but if the active element
    // is another input inside of the item we shouldn't switch focus
    if (document.activeElement) {
      firstActive = input.querySelector('input, textarea') === document.activeElement;
    }
    // Only focus the first input if we clicked on an ion-item
    // and the first input exists
    if (clickedItem && firstActive) {
      input.fireFocusEvents = false;
      input.setBlur();
      input.setFocus();
      helpers.raf(() => {
        input.fireFocusEvents = true;
      });
    }
  }
  render() {
    const { detail, detailIcon, download, labelColorStyles, lines, disabled, href, rel, target, routerAnimation, routerDirection } = this;
    const childStyles = {};
    const mode = ionicGlobal.getIonMode(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download,
        href,
        rel,
        target
      };
    // Only set onClick if the item is clickable to prevent screen
    // readers from reading all items as clickable
    const clickFn = clickable ? {
      onClick: (ev) => { theme.openURL(href, ev, routerDirection, routerAnimation); }
    } : {};
    const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });
    return (index.h(index.Host, { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign(Object.assign({}, childStyles), labelColorStyles), theme.createColorClasses(this.color, {
        'item': true,
        [mode]: true,
        [`item-lines-${lines}`]: lines !== undefined,
        'item-disabled': disabled,
        'in-list': theme.hostContext('ion-list', this.el),
        'item-multiple-inputs': this.multipleInputs,
        'ion-activatable': canActivate,
        'ion-focusable': true,
      })) }, index.h(TagType, Object.assign({}, attrs, { class: "item-native", part: "native", disabled: disabled }, clickFn), index.h("slot", { name: "start" }), index.h("div", { class: "item-inner" }, index.h("div", { class: "input-wrapper" }, index.h("slot", null)), index.h("slot", { name: "end" }), showDetail && index.h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon", part: "detail-icon" }), index.h("div", { class: "item-inner-highlight" })), canActivate && mode === 'md' && index.h("ion-ripple-effect", null)), index.h("div", { class: "item-highlight" })));
  }
  static get delegatesFocus() { return true; }
  get el() { return index.getElement(this); }
};
Item.style = {
  ios: itemIosCss,
  md: itemMdCss
};

const labelIosCss = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{align-self:baseline}.label-fixed.sc-ion-label-ios-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;transform:translate3d(0,  27px,  0);transform-origin:left top;transition:transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{transform-origin:right top}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.label-floating.sc-ion-label-ios-h,.item-has-placeholder .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{transform:translate3d(0,  0,  0) scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s>p,.ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}";

const labelMdCss = ".item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{align-self:baseline}.label-fixed.sc-ion-label-md-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{transform-origin:left top;transform:translateY(50%) scale(0.75);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl].label-stacked.sc-ion-label-md-h,[dir=rtl] .label-stacked.sc-ion-label-md-h{transform-origin:right top}.label-floating.sc-ion-label-md-h{transform:translateY(96%);transform-origin:left top;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl].label-floating.sc-ion-label-md-h,[dir=rtl] .label-floating.sc-ion-label-md-h{transform-origin:right top}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.label-floating.sc-ion-label-md-h,.item-has-placeholder .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{transform:translateY(50%) scale(0.75)}.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s>p,.ion-color .sc-ion-label-md-h.sc-ion-label-md-s>p{color:inherit}";

const Label = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionColor = index.createEvent(this, "ionColor", 7);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
    this.inRange = false;
    this.noAnimate = false;
  }
  componentWillLoad() {
    this.inRange = !!this.el.closest('ion-range');
    this.noAnimate = (this.position === 'floating');
    this.emitStyle();
    this.emitColor();
  }
  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1000);
    }
  }
  colorChanged() {
    this.emitColor();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitColor() {
    const { color } = this;
    this.ionColor.emit({
      'item-label-color': color !== undefined,
      [`ion-color-${color}`]: color !== undefined
    });
  }
  emitStyle() {
    const { inRange, position } = this;
    // If the label is inside of a range we don't want
    // to override the classes added by the label that
    // is a direct child of the item
    if (!inRange) {
      this.ionStyle.emit({
        'label': true,
        [`label-${position}`]: position !== undefined
      });
    }
  }
  render() {
    const position = this.position;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
        [`label-${position}`]: position !== undefined,
        [`label-no-animate`]: (this.noAnimate)
      }) }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "color": ["colorChanged"],
    "position": ["positionChanged"]
  }; }
};
Label.style = {
  ios: labelIosCss,
  md: labelMdCss
};

const rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;transition:transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";

const rangeMdCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{transform:scale(0.67);transition-duration:120ms;transition-property:transform, background-color, border;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;transition:transform 120ms ease, background 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;transform:rotate(-45deg);transition:background 120ms ease;background:var(--pin-background);content:\"\";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}";

const Range = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.ratioA = 0;
    this.ratioB = 0;
    /**
     * How long, in milliseconds, to wait to trigger the
     * `ionChange` event after each change in the range value.
     * This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 0;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = '';
    /**
     * Show two knobs.
     */
    this.dualKnobs = false;
    /**
     * Minimum integer value of the range.
     */
    this.min = 0;
    /**
     * Maximum integer value of the range.
     */
    this.max = 100;
    /**
     * If `true`, a pin with integer value is shown when the knob
     * is pressed.
     */
    this.pin = false;
    /**
     * If `true`, the knob snaps to tick marks evenly spaced based
     * on the step property value.
     */
    this.snaps = false;
    /**
     * Specifies the value granularity.
     */
    this.step = 1;
    /**
     * If `true`, tick marks are displayed based on the step value.
     * Only applies when `snaps` is `true`.
     */
    this.ticks = true;
    /**
     * If `true`, the user cannot interact with the range.
     */
    this.disabled = false;
    /**
     * the value of the range.
     */
    this.value = 0;
    this.clampBounds = (value) => {
      return helpers.clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper)
        };
      }
      else {
        return this.clampBounds(value);
      }
    };
    this.setupGesture = async () => {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (await Promise.resolve().then(function () { return require('./index-6eff209d.js'); })).createGesture({
          el: rangeSlider,
          gestureName: 'range',
          gesturePriority: 100,
          threshold: 0,
          onStart: ev => this.onStart(ev),
          onMove: ev => this.onMove(ev),
          onEnd: ev => this.onEnd(ev),
        });
        this.gesture.enable(!this.disabled);
      }
    };
    this.handleKeyboard = (knob, isIncrease) => {
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === 'A') {
        this.ratioA = helpers.clamp(0, this.ratioA + step, 1);
      }
      else {
        this.ratioB = helpers.clamp(0, this.ratioB + step, 1);
      }
      this.updateValue();
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
        this.emitStyle();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
        this.emitStyle();
      }
    };
  }
  debounceChanged() {
    this.ionChange = helpers.debounceEvent(this.ionChange, this.debounce);
  }
  minChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
    this.emitStyle();
  }
  valueChanged(value) {
    if (!this.noUpdate) {
      this.updateRatio();
    }
    value = this.ensureValueInBounds(value);
    this.ionChange.emit({ value });
  }
  componentDidLoad() {
    this.setupGesture();
    this.didLoad = true;
  }
  connectedCallback() {
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    /**
     * If we have not yet rendered
     * ion-range, then rangeSlider is not defined.
     * But if we are moving ion-range via appendChild,
     * then rangeSlider will be defined.
     */
    if (this.didLoad) {
      this.setupGesture();
    }
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  getValue() {
    const value = this.value || 0;
    if (this.dualKnobs) {
      if (typeof value === 'object') {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    }
    else {
      if (typeof value === 'object') {
        return value.upper;
      }
      return value;
    }
  }
  emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'interactive-disabled': this.disabled
    });
  }
  onStart(detail) {
    const rect = this.rect = this.rangeSlider.getBoundingClientRect();
    const currentX = detail.currentX;
    // figure out which knob they started closer to
    let ratio = helpers.clamp(0, (currentX - rect.left) / rect.width, 1);
    if (document.dir === 'rtl') {
      ratio = 1 - ratio;
    }
    this.pressedKnob =
      !this.dualKnobs ||
        Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
        ? 'A'
        : 'B';
    this.setFocus(this.pressedKnob);
    // update the active knob's position
    this.update(currentX);
  }
  onMove(detail) {
    this.update(detail.currentX);
  }
  onEnd(detail) {
    this.update(detail.currentX);
    this.pressedKnob = undefined;
  }
  update(currentX) {
    // figure out where the pointer is currently at
    // update the knob being interacted with
    const rect = this.rect;
    let ratio = helpers.clamp(0, (currentX - rect.left) / rect.width, 1);
    if (document.dir === 'rtl') {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      // snaps the ratio to the current value
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    // update which knob is pressed
    if (this.pressedKnob === 'A') {
      this.ratioA = ratio;
    }
    else {
      this.ratioB = ratio;
    }
    // Update input value
    this.updateValue();
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    return 0;
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const { min, max } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    }
    else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const { valA, valB } = this;
    this.value = !this.dualKnobs
      ? valA
      : {
        lower: Math.min(valA, valB),
        upper: Math.max(valA, valB)
      };
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  render() {
    const { min, max, step, el, handleKeyboard, pressedKnob, disabled, pin, ratioLower, ratioUpper } = this;
    const mode = ionicGlobal.getIonMode(this);
    const barStart = `${ratioLower * 100}%`;
    const barEnd = `${100 - ratioUpper * 100}%`;
    const doc = document;
    const isRTL = doc.dir === 'rtl';
    const start = isRTL ? 'right' : 'left';
    const end = isRTL ? 'left' : 'right';
    const tickStyle = (tick) => {
      return {
        [start]: tick[start]
      };
    };
    const barStyle = {
      [start]: barStart,
      [end]: barEnd
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const tick = {
          ratio,
          active: ratio >= ratioLower && ratio <= ratioUpper,
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    helpers.renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return (index.h(index.Host, { onFocusin: this.onFocus, onFocusout: this.onBlur, class: theme.createColorClasses(this.color, {
        [mode]: true,
        'in-item': theme.hostContext('ion-item', el),
        'range-disabled': disabled,
        'range-pressed': pressedKnob !== undefined,
        'range-has-pin': pin
      }) }, index.h("slot", { name: "start" }), index.h("div", { class: "range-slider", ref: rangeEl => this.rangeSlider = rangeEl }, ticks.map(tick => (index.h("div", { style: tickStyle(tick), role: "presentation", class: {
        'range-tick': true,
        'range-tick-active': tick.active
      }, part: tick.active ? 'tick-active' : 'tick' }))), index.h("div", { class: "range-bar", role: "presentation", part: "bar" }), index.h("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle, part: "bar-active" }), renderKnob(isRTL, {
      knob: 'A',
      pressed: pressedKnob === 'A',
      value: this.valA,
      ratio: this.ratioA,
      pin,
      disabled,
      handleKeyboard,
      min,
      max
    }), this.dualKnobs && renderKnob(isRTL, {
      knob: 'B',
      pressed: pressedKnob === 'B',
      value: this.valB,
      ratio: this.ratioB,
      pin,
      disabled,
      handleKeyboard,
      min,
      max
    })), index.h("slot", { name: "end" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "min": ["minChanged"],
    "max": ["maxChanged"],
    "disabled": ["disabledChanged"],
    "value": ["valueChanged"]
  }; }
};
const renderKnob = (isRTL, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }) => {
  const start = isRTL ? 'right' : 'left';
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  return (index.h("div", { onKeyDown: (ev) => {
      const key = ev.key;
      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      }
      else if (key === 'ArrowRight' || key === 'ArrowUp') {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, class: {
      'range-knob-handle': true,
      'range-knob-a': knob === 'A',
      'range-knob-b': knob === 'B',
      'range-knob-pressed': pressed,
      'range-knob-min': value === min,
      'range-knob-max': value === max
    }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && index.h("div", { class: "range-pin", role: "presentation", part: "pin" }, Math.round(value)), index.h("div", { class: "range-knob", role: "presentation", part: "knob" })));
};
const ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  return helpers.clamp(min, value, max);
};
const valueToRatio = (value, min, max) => {
  return helpers.clamp(0, (value - min) / (max - min), 1);
};
Range.style = {
  ios: rangeIosCss,
  md: rangeMdCss
};

const rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}";

const RippleEffect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Sets the type of ripple-effect:
     *
     * - `bounded`: the ripple effect expands from the user's click position
     * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
     *
     * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
     * while surfaces for unbounded ripples should have it set to visible.
     */
    this.type = 'bounded';
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(x, y) {
    return new Promise(resolve => {
      index.readTask(() => {
        const rect = this.el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const hypotenuse = Math.sqrt(width * width + height * height);
        const maxDim = Math.max(height, width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - rect.left;
        let posY = y - rect.top;
        if (this.unbounded) {
          posX = width * 0.5;
          posY = height * 0.5;
        }
        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = width * 0.5 - posX;
        const moveY = height * 0.5 - posY;
        index.writeTask(() => {
          const div = document.createElement('div');
          div.classList.add('ripple-effect');
          const style = div.style;
          style.top = styleY + 'px';
          style.left = styleX + 'px';
          style.width = style.height = initialSize + 'px';
          style.setProperty('--final-scale', `${finalScale}`);
          style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
          const container = this.el.shadowRoot || this.el;
          container.appendChild(div);
          setTimeout(() => {
            resolve(() => {
              removeRipple(div);
            });
          }, 225 + 100);
        });
      });
    });
  }
  get unbounded() {
    return this.type === 'unbounded';
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "presentation", class: {
        [mode]: true,
        'unbounded': this.unbounded
      } }));
  }
  get el() { return index.getElement(this); }
};
const removeRipple = (ripple) => {
  ripple.classList.add('fade-out');
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
RippleEffect.style = rippleEffectCss;

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Row.style = rowCss;

const titleIosCss = ":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;transform-origin:left center;bottom:0;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host-context([dir=rtl]):host(.title-large),:host-context([dir=rtl]).title-large{transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{transform-origin:calc(100% - inherit)}";

const titleMdCss = ":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}";

const ToolbarTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true
    });
  }
  getSize() {
    return (this.size !== undefined) ? this.size : 'default';
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const size = this.getSize();
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
        [`title-${size}`]: true,
      }) }, index.h("div", { class: "toolbar-title" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "size": ["sizeChanged"]
  }; }
};
ToolbarTitle.style = {
  ios: titleIosCss,
  md: titleMdCss
};

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
          this.fsw = fsw_min$1.u(iid);
          this.swu = fsw_min$1.d(iid);
        }
      }
    }
    else {
      this.iid = 0;
    }
  }
  fswUpdate(newValue, oldValue) {
    const len = 6;
    const tooLong = typeof newValue === 'string' && newValue.length > len;
    if (tooLong) {
      this.fsw = this.fsw.substring(0, len);
    }
    else {
      if (newValue != oldValue) {
        var fsw = fsw_min$1.e.symbol(newValue);
        if (fsw && fsw.symbol) {
          this.fsw = fsw.symbol;
          this.iid = fsw_min$1.x(fsw.symbol);
          this.swu = fsw_min$1.b(fsw.symbol);
        }
      }
    }
  }
  swuUpdate(newValue, oldValue) {
    if (newValue != oldValue) {
      var swu = fsw_min$1.l.symbol(newValue);
      if (swu && swu.symbol) {
        this.iid = fsw_min$1.g(swu.symbol);
        this.fsw = fsw_min$1.m(swu.symbol);
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
      styleStr = fsw_min$1.t(styleObj);
    }
    //var svgSize = parseFloat(window.getComputedStyle(this.el).getPropertyValue("font-size").slice(0,-2))/30;
    return (index.h(index.Host, { iid: this.iid, fsw: this.fsw, swu: this.swu, styling: this.styling, innerHTML: this.sgnw ? fsw_min$1.w(this.fsw + (styleStr)) : '' }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "iid": ["iidUpdate"],
    "fsw": ["fswUpdate"],
    "swu": ["swuUpdate"]
  }; }
};
SgnwSymbol.style = sgnwSymbolCss;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var fsw_min = createCommonjsModule(function (module, exports) {
/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
!function(o,s){s(exports);}(commonjsGlobal,(function(o){let s={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};s.prefix=`(?:${s.sort}(?:${s.symbol})+)`,s.spatial=`${s.symbol}${s.coord}`,s.signbox=`${s.box}${s.coord}(?:${s.spatial})*`,s.sign=`${s.prefix}?${s.signbox}`,s.sortable=`${s.prefix}${s.signbox}`;let e={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};e.colorbase=`(?:${e.colorhex}|${e.colorname})`,e.color=`_${e.colorbase}_`,e.colors=`_${e.colorbase}(?:,${e.colorbase})?_`,e.background=`G${e.color}`,e.detail=`D${e.colors}`,e.detailsym=`D[0-9]{2}${e.colors}`,e.classes=`${e.classbase}(?: ${e.classbase})*`,e.full=`-(${e.colorize})?(${e.padding})?(${e.background})?(${e.detail})?(${e.zoom})?(?:-((?:${e.detailsym})*)((?:${e.zoomsym})*))?(?:-(${e.classes})?!(?:(${e.id})!)?)?`;const t=o=>o.split("x").map(o=>parseInt(o)),r={symbol:o=>{const r=`^(${s.symbol})(${s.coord})?(${e.full})?`,l="string"==typeof o?o.match(new RegExp(r)):void 0;return {symbol:l?l[1]:void 0,coord:l&&l[2]?t(l[2]):void 0,style:l?l[3]:void 0}},sign:o=>{const r=`^(${s.prefix})?(${s.signbox})(${e.full})?`,l="string"==typeof o?o.match(new RegExp(r)):void 0;return l?{sequence:l[1]?l[1].slice(1).match(/.{6}/g):void 0,box:l[2][0],max:t(l[2].slice(1,8)),spatials:l[2].length<9?void 0:l[2].slice(8).match(/(.{13})/g).map(o=>({symbol:o.slice(0,6),coord:[parseInt(o.slice(6,9)),parseInt(o.slice(10,13))]})),style:l[3]}:{}}},l={symbol:o=>{if("string"==typeof o.symbol){const t=(o.symbol.match(s.symbol)||[""])[0];if(t){return t+((((o.coord&&o.coord[0]||"").toString()+"x"+(o.coord&&o.coord[1]||"").toString()).match(s.coord)||[""])[0]||"")+("string"==typeof o.style&&(o.style.match(e.full)||[""])[0]||"")}}},sign:o=>{let t="string"!=typeof o.box?"M":(o.box+"M").match(s.box);const r=(((o.max&&o.max[0]||"").toString()+"x"+(o.max&&o.max[1]||"").toString()).match(s.coord)||[""])[0]||"";if(!r)return;let l="";o.sequence&&Array.isArray(o.sequence)&&(l=(l=o.sequence.map(o=>(o.match(s.symbol)||[""])[0]).join(""))?"A"+l:"");let c="";return o.spatials&&Array.isArray(o.spatials)&&(c=o.spatials.map(o=>{if("string"==typeof o.symbol){const e=(o.symbol.match(s.symbol)||[""])[0];if(e){const t=(((o.coord&&o.coord[0]||"").toString()+"x"+(o.coord&&o.coord[1]||"").toString()).match(s.coord)||[""])[0]||"";if(t)return e+t}}return ""}).join("")),l+t+r+c+("string"==typeof o.style&&(o.style.match(e.full)||[""])[0]||"")}},c=[256,517,759,767,877,895,903],i={all:[256,907],writing:[256,894],hand:[256,516],movement:[517,758],dynamic:[759,766],head:[767,876],hcenter:[767,876],vcenter:[767,885],trunk:[877,885],limb:[886,894],location:[895,902],punctuation:[903,907]},n=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"];o.category=c,o.colorize=o=>{const s=r.symbol(o);let e="#000000";if(s.symbol){const o=parseInt(s.symbol.slice(1,4),16),t=c.findIndex(s=>s>o);e=n[t<0?6:t-1];}return e},o.colors=n,o.compose=l,o.group=[256,270,286,324,332,390,420,442,461,501,517,534,554,597,613,648,678,695,725,739,759,767,778,810,827,857,877,886,895,903],o.isType=(o,s)=>{const e=r.symbol(o);if(e.symbol){const o=parseInt(e.symbol.slice(1,4),16),t=i[s];if(t)return t[0]<=o&&t[1]>=o}return !1},o.kind=[256,895,903],o.parse=r,o.ranges=i,o.re=s,Object.defineProperty(o,"__esModule",{value:!0});}));
});

var swu_min = createCommonjsModule(function (module, exports) {
/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
!function(o,e){e(exports);}(commonjsGlobal,(function(o){let e={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};e.prefix=`(?:${e.sort}(?:${e.symbol})+)`,e.spatial=`${e.symbol}${e.coord}`,e.signbox=`${e.box}${e.coord}(?:${e.spatial})*`,e.sign=`${e.prefix}?${e.signbox}`,e.sortable=`${e.prefix}${e.signbox}`;let s={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};s.colorbase=`(?:${s.colorhex}|${s.colorname})`,s.color=`_${s.colorbase}_`,s.colors=`_${s.colorbase}(?:,${s.colorbase})?_`,s.background=`G${s.color}`,s.detail=`D${s.colors}`,s.detailsym=`D[0-9]{2}${s.colors}`,s.classes=`${s.classbase}(?: ${s.classbase})*`,s.full=`-(${s.colorize})?(${s.padding})?(${s.background})?(${s.detail})?(${s.zoom})?(?:-((?:${s.detailsym})*)((?:${s.zoomsym})*))?(?:-(${s.classes})?!(?:(${s.id})!)?)?`;const t=o=>parseInt(o.codePointAt(0))-120844+250,r=o=>[t(o.slice(0,2)),t(o.slice(2,4))],c=o=>o.map(o=>(o=>String.fromCodePoint(120844+parseInt(o)-250))(o)).join(""),n=o=>parseInt(o.codePointAt(0)),l={symbol:o=>{const t=`^(${e.symbol})(${e.coord})?(${s.full})?`,c="string"==typeof o?o.match(new RegExp(t)):void 0;return {symbol:c?c[1]:void 0,coord:c&&c[2]?r(c[2]):void 0,style:c?c[3]:void 0}},sign:o=>{const t=`^(${e.prefix})?(${e.signbox})(${s.full})?`,c="string"==typeof o?o.match(new RegExp(t)):void 0;return c?{sequence:c[1]?c[1].slice(2).match(/.{2}/g):void 0,box:c[2].slice(0,2),max:r(c[2].slice(2,6)),spatials:c[2].length<7?void 0:c[2].slice(6).match(/(.{6})/g).map(o=>({symbol:o.slice(0,2),coord:r(o.slice(2))})),style:c[3]}:{}}},i={symbol:o=>{if("object"==typeof o&&null!==o&&"string"==typeof o.symbol){const t=(o.symbol.match(e.symbol)||[""])[0];if(t){const e=o.coord&&o.coord[0]||"",r=o.coord&&o.coord[1]||"";return t+(e&&r?c([e,r]):"")+("string"==typeof o.style&&(o.style.match(s.full)||[""])[0]||"")}}},sign:o=>{if("object"!=typeof o||null===o)return;let t="string"!=typeof o.box?"𝠃":(o.box+"𝠃").match(e.box);const r=o.max&&o.max[0]||"",n=o.max&&o.max[1]||"",l=r&&n?c([r,n]):void 0;if(!l)return;let i="";o.sequence&&Array.isArray(o.sequence)&&(i=(i=o.sequence.map(o=>(o.match(e.symbol)||[""])[0]).join(""))?"𝠀"+i:"");let a="";return o.spatials&&Array.isArray(o.spatials)&&(a=o.spatials.map(o=>{if("string"==typeof o.symbol){const s=(o.symbol.match(e.symbol)||[""])[0];if(s){const e=o.coord&&o.coord[0]||"",t=o.coord&&o.coord[1]||"",r=e&&t?c([e,t]):"";if(r)return s+r}}return ""}).join("")),i+t+l+a+("string"==typeof o.style&&(o.style.match(s.full)||[""])[0]||"")}},a=[262145,287201,310433,311201,321761,323489,324257],d={all:[262145,324736],writing:[262145,323488],hand:[262145,287200],movement:[287201,310432],dynamic:[310433,311200],head:[311201,321760],hcenter:[311201,321760],vcenter:[311201,322624],trunk:[321761,322624],limb:[322625,323488],location:[323489,324256],punctuation:[324257,324736]},u=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"];o.category=a,o.colorize=o=>{const e=l.symbol(o);let s="#000000";if(e.symbol){const o=n(e.symbol),t=a.findIndex(e=>e>o);s=u[t<0?6:t-1];}return s},o.colors=u,o.compose=i,o.decode=o=>o.replace(/\\u([0-9A-F]{4})/g,(function(o,e){return String.fromCharCode(parseInt(e,16))})),o.encode=o=>o.replace(/[\u007F-\uFFFF]/g,(function(o){return "\\u"+("0000"+o.charCodeAt(0).toString(16)).substr(-4).toUpperCase()})),o.group=[262145,263489,265025,268673,269441,275009,277889,280001,281825,285665,287201,288833,290753,294881,296417,299777,302657,304289,307169,308513,310433,311201,312257,315329,316961,319841,321761,322625,323489,324257],o.isType=(o,e)=>{const s=l.symbol(o);if(s.symbol){const o=n(s.symbol),t=d[e];if(t)return t[0]<=o&&t[1]>=o}return !1},o.kind=[262145,323489,324257],o.pair=o=>[o.charCodeAt(0).toString(16).toUpperCase(),o.charCodeAt(1).toString(16).toUpperCase()],o.parse=l,o.ranges=d,o.re=e,Object.defineProperty(o,"__esModule",{value:!0});}));
});

var convert_min = createCommonjsModule(function (module, exports) {
/* Sutton SignWriting Core Module v1.2.0 (https://github.com/sutton-signwriting/core), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
!function(e,o){o(exports);}(commonjsGlobal,(function(e){let o={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};o.prefix=`(?:${o.sort}(?:${o.symbol})+)`,o.spatial=`${o.symbol}${o.coord}`,o.signbox=`${o.box}${o.coord}(?:${o.spatial})*`,o.sign=`${o.prefix}?${o.signbox}`,o.sortable=`${o.prefix}${o.signbox}`;let s={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};s.prefix=`(?:${s.sort}(?:${s.symbol})+)`,s.spatial=`${s.symbol}${s.coord}`,s.signbox=`${s.box}${s.coord}(?:${s.spatial})*`,s.sign=`${s.prefix}?${s.signbox}`,s.sortable=`${s.prefix}${s.signbox}`;const t=e=>({A:"𝠀",B:"𝠁",L:"𝠂",M:"𝠃",R:"𝠄"})[e],r=e=>parseInt(e.codePointAt(0))-120844+250,n=e=>String.fromCodePoint(120844+parseInt(e)-250),c=e=>[r(e.slice(0,2)),r(e.slice(2,4))],i=e=>e.map(e=>n(e)).join(""),a=e=>e.split("x").map(e=>parseInt(e)),p=e=>parseInt(e.codePointAt(0)),u=e=>String.fromCodePoint(e),d=e=>{const o=p(e)-262145,s=parseInt(o/96),t=parseInt((o-96*s)/16),r=parseInt(o-96*s-16*t);return "S"+(s+256).toString(16)+t.toString(16)+r.toString(16)},f=e=>u(262145+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16));e.code2swu=u,e.coord2fsw=e=>e.join("x"),e.coord2swu=i,e.fsw2coord=a,e.fsw2swu=e=>{if(!e)return "";const s=e.match(new RegExp(o.prefix,"g"));s&&s.forEach((function(o){e=e.replace(o,"𝠀"+o.slice(1).match(/.{6}/g).map(e=>f(e)).join(""));}));const r=e.match(new RegExp(o.box+o.coord,"g"));r&&r.forEach((function(o){e=e.replace(o,t(o.slice(0,1))+i(a(o.slice(1,8))));}));const n=e.match(new RegExp(o.spatial,"g"));return n&&n.forEach((function(o){e=e.replace(o,f(o.slice(0,6))+i(a(o.slice(6,13))));})),e},e.id2key=e=>{const o=e-1,s=parseInt(o/96),t=parseInt((o-96*s)/16),r=parseInt(o-96*s-16*t);return "S"+(s+256).toString(16)+t.toString(16)+r.toString(16)},e.id2swu=e=>u(e+262144),e.key2id=e=>1+96*(parseInt(e.slice(1,4),16)-256)+16*parseInt(e.slice(4,5),16)+parseInt(e.slice(5,6),16),e.key2swu=f,e.mark2swu=t,e.num2swu=n,e.swu2code=p,e.swu2coord=c,e.swu2fsw=e=>{if(!e)return "";let o=e.replace(/𝠀/g,"A").replace(/𝠁/g,"B").replace(/𝠂/g,"L").replace(/𝠃/g,"M").replace(/𝠄/g,"R");const t=o.match(new RegExp(s.symbol,"g"));t&&t.forEach((function(e){o=o.replace(e,d(e));}));const r=o.match(new RegExp(s.coord,"g"));return r&&r.forEach((function(e){o=o.replace(e,c(e).join("x"));})),o},e.swu2id=e=>p(e)-262144,e.swu2key=d,e.swu2mark=e=>({"𝠀":"A","𝠁":"B","𝠂":"L","𝠃":"M","𝠄":"R"})[e],e.swu2num=r,Object.defineProperty(e,"__esModule",{value:!0});}));
});

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
let t={};const o=document.createElement("canvas");o.width=152,o.height=152;const e=o.getContext("2d"),l=function(o){if(o in t)return [...t[o]];e.clearRect(0,0,152,152),e.font="60px 'SuttonSignWritingLine'",e.fillText(String.fromCodePoint(o+983040),0,0);const l=e.getImageData(0,0,152,152).data;let i,s,n,a;t:for(i=151;i>=0;i--)for(s=0;s<152;s+=1)for(a=0;a<4;a+=1)if(n=4*i+4*s*152+a,l[n])break t;var r=i;t:for(s=151;s>=0;s--)for(i=0;i<r;i+=1)for(a=0;a<4;a+=1)if(n=4*i+4*s*152+a,l[n])break t;var d=s+1;if(r=Math.ceil(r/2),d=Math.ceil(d/2),14394==o&&(r=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(o)&&(r=20),31921==o&&(r=22),38460==o&&(r=23),[20164,20212].includes(o)&&(r=25),31894==o&&(r=28),46698==o&&(r=29),29606==o&&(r=30),44855==o&&(r=40),32667==o&&(r=50),[11088,11474,11490,11506].includes(o)&&(d=20),6285==o&&(d=21),40804==o&&(d=31),41475==o&&(d=36),0==r&&0==d){const t={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};o in t&&(r=t[o][0],d=t[o][1]);}return 0!=r||0!=d?(t[o]=[r,d],[r,d]):void 0},i=function(t){return String.fromCodePoint(t+983040)},s=function(t){return String.fromCodePoint(t+1048576)},n=function(t){return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${s(t)}</text>\n    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${i(t)}</text>`},a=function(t){if(l(1))t();else {const o=setInterval((function(){l(1)&&(clearInterval(o),t());}),100);}},r=function(t){const o=function(){const t=document.createElement("canvas");t.width=15,t.height=30;const o=t.getContext("2d");o.font="30px 'SuttonSignWritingFill'",o.fillText(s(1),0,0);return !o.getImageData(0,0,15,30).data.every(t=>0===t)};if(o())t();else {const e=setInterval((function(){o()&&(clearInterval(e),t());}),100);}};var d=Object.freeze({__proto__:null,cssAppend:function(t=""){if(!document.getElementById("SgnwFontCss")){const o=document.createElement("style");o.setAttribute("id","SgnwFontCss"),o.appendChild(document.createTextNode(`\n  @font-face {\n    font-family: "SuttonSignWritingLine";\n    src: \n      local('SuttonSignWritingLine'),\n      ${t?`url('${t}SuttonSignWritingLine.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingFill";\n    src: \n      local('SuttonSignWritingFill'),\n      ${t?`url('${t}SuttonSignWritingFill.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingOneD";\n    src: \n      local('SuttonSignWritingOneD'),\n      ${t?`url('${t}SuttonSignWritingOneD.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');\n  }\n    `)),document.head.appendChild(o);}},cssLoaded:function(t){let o=!1,e=!1;a(()=>{o=!0;}),r(()=>{e=!0;});const l=setInterval((function(){o&&e&&(clearInterval(l),t());}),100);},cssLoadedLine:a,cssLoadedFill:r,symbolSize:l,symbolLine:i,symbolFill:s,symbolText:n});const c=t=>t.map(t=>(t=>String.fromCodePoint(120844+parseInt(t)-250))(t)).join(""),m=t=>(t=>parseInt(t.codePointAt(0)))(t)-262144,f=t=>1+96*(parseInt(t.slice(1,4),16)-256)+16*parseInt(t.slice(4,5),16)+parseInt(t.slice(5,6),16),g=function(t){return l(f(t))},p=function(t){return i(f(t))},y=function(t){return s(f(t))},x=function(t){return n(f(t))};let $={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};$.colorbase=`(?:${$.colorhex}|${$.colorname})`,$.color=`_${$.colorbase}_`,$.colors=`_${$.colorbase}(?:,${$.colorbase})?_`,$.background="G"+$.color,$.detail="D"+$.colors,$.detailsym="D[0-9]{2}"+$.colors,$.classes=`${$.classbase}(?: ${$.classbase})*`,$.full=`-(${$.colorize})?(${$.padding})?(${$.background})?(${$.detail})?(${$.zoom})?(?:-((?:${$.detailsym})*)((?:${$.zoomsym})*))?(?:-(${$.classes})?!(?:(${$.id})!)?)?`;const u=t=>(new RegExp(`^${$.colorhex}$`).test(t)?"#":"")+t,b=t=>{const o="^"+$.full,e=("string"==typeof t?t.match(new RegExp(o)):[])||[];return {colorize:e[1]?!!e[1]:void 0,padding:e[2]?parseInt(e[2].slice(1)):void 0,background:e[3]?u(e[3].slice(2,-1)):void 0,detail:e[4]?e[4].slice(2,-1).split(",").map(u):void 0,zoom:e[5]?"Zx"===e[5]?"x":parseFloat(e[5].slice(1)):void 0,detailsym:e[6]?e[6].match(new RegExp($.detailsym,"g")).map(t=>{const o=t.split("_"),e=o[1].split(",").map(u);return {index:parseInt(o[0].slice(1)),detail:e}}):void 0,zoomsym:e[7]?e[7].match(new RegExp($.zoomsym,"g")).map(t=>{const o=t.split(",");return {index:parseInt(o[0].slice(1)),zoom:parseFloat(o[1]),offset:o[2]?o[2].split("x").map(t=>parseInt(t)-500):void 0}}):void 0,classes:e[8]?e[8]:void 0,id:e[9]?e[9]:void 0}};let h={symbol:"S[123][0-9a-f]{2}[0-5][0-9a-f]",coord:"[0-9]{3}x[0-9]{3}",sort:"A",box:"[BLMR]"};h.prefix=`(?:${h.sort}(?:${h.symbol})+)`,h.spatial=`${h.symbol}${h.coord}`,h.signbox=`${h.box}${h.coord}(?:${h.spatial})*`,h.sign=`${h.prefix}?${h.signbox}`,h.sortable=`${h.prefix}${h.signbox}`;let z={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};z.colorbase=`(?:${z.colorhex}|${z.colorname})`,z.color=`_${z.colorbase}_`,z.colors=`_${z.colorbase}(?:,${z.colorbase})?_`,z.background="G"+z.color,z.detail="D"+z.colors,z.detailsym="D[0-9]{2}"+z.colors,z.classes=`${z.classbase}(?: ${z.classbase})*`,z.full=`-(${z.colorize})?(${z.padding})?(${z.background})?(${z.detail})?(${z.zoom})?(?:-((?:${z.detailsym})*)((?:${z.zoomsym})*))?(?:-(${z.classes})?!(?:(${z.id})!)?)?`;const v=t=>t.split("x").map(t=>parseInt(t)),w=t=>{const o=`^(${h.symbol})(${h.coord})?(${z.full})?`,e="string"==typeof t?t.match(new RegExp(o)):void 0;return {symbol:e?e[1]:void 0,coord:e&&e[2]?v(e[2]):void 0,style:e?e[3]:void 0}},S=t=>{const o=`^(${h.prefix})?(${h.signbox})(${z.full})?`,e="string"==typeof t?t.match(new RegExp(o)):void 0;return e?{sequence:e[1]?e[1].slice(1).match(/.{6}/g):void 0,box:e[2][0],max:v(e[2].slice(1,8)),spatials:e[2].length<9?void 0:e[2].slice(8).match(/(.{13})/g).map(t=>({symbol:t.slice(0,6),coord:[parseInt(t.slice(6,9)),parseInt(t.slice(10,13))]})),style:e[3]}:{}},I=[256,517,759,767,877,895,903],k=[767,876],_=[767,885],F=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],M=t=>{const o=w(t);let e="#000000";if(o.symbol){const t=parseInt(o.symbol.slice(1,4),16),l=I.findIndex(o=>o>t);e=F[l<0?6:l-1];}return e};var E=Object.freeze({__proto__:null,symbolSize:g,symbolLine:p,symbolFill:y,symbolText:x,symbolSvg:t=>{const o=w(t);if(o.symbol){let e=g(o.symbol);if(e){let l,i=b(o.style),s=x(o.symbol);s=`  <g transform="translate(500,500)">\n${s}\n  </g>`,i.colorize?l=M(o.symbol):i.detail&&(l=i.detail[0]),l&&(s=s.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let n=i.detail&&i.detail[1];n&&(s=s.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${n}"`));let a=500,r=500,d="";i.padding&&(a-=i.padding,r-=i.padding,e[0]+=2*i.padding,e[1]+=2*i.padding),i.background&&(d=`\n  <rect x="${a}" y="${r}" width="${e[0]}" height="${e[1]}" style="fill:${i.background};" />`);let c="";"x"!=i.zoom&&(c=` width="${e[0]*(i.zoom?i.zoom:1)}" height="${e[1]*(i.zoom?i.zoom:1)}"`);let m="";i.classes&&(m=` class="${i.classes}"`);let f="";return i.id&&(f=` id="${i.id}"`),`<svg${m}${f} version="1.1" xmlns="http://www.w3.org/2000/svg"${c} viewBox="${a} ${r} ${e[0]} ${e[1]}">\n  <text font-size="0">${t}</text>${d}\n${s}\n</svg>`}}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},symbolPng:t=>{const o=function(t){const o=w(t);if(o.symbol){let t=g(o.symbol);if(t){const e=document.createElement("canvas"),l=e.getContext("2d");let i=b(o.style),s="black";i.colorize?s=M(o.symbol):i.detail&&(s=i.detail[0]);let n=i.detail&&i.detail[1]||"white",a=500,r=a+t[0],d=500,c=d+t[1];i.padding&&(a-=i.padding,d-=i.padding,r+=i.padding,c+=i.padding);let m=1;"x"!=i.zoom&&(m=i.zoom);let f=(r-a)*m,g=(c-d)*m;return e.width=f||1,e.height=g||1,i.background&&(l.rect(0,0,f,g),l.fillStyle=i.background,l.fill()),l.font=30*m+"px 'SuttonSignWritingFill'",l.fillStyle=n,l.fillText(y(o.symbol),(500-a)*m,(500-d)*m),l.font=30*m+"px 'SuttonSignWritingLine'",l.fillStyle=s,l.fillText(p(o.symbol),(500-a)*m,(500-d)*m),e}}}(t),e=o.toDataURL("image/png");return o.remove(),e},symbolNormalize:t=>{const o=w(t);if(!o.symbol)return null;{let t=g(o.symbol);if(t)return `${o.symbol}${500-parseInt(t[0]/2)}x${500-parseInt(t[1]/2)}${o.style||""}`}},signSvg:t=>{let o=S(t);if(o.spatials){let e=b(o.style);e.detailsym&&e.detailsym.forEach(t=>{o.spatials[t.index-1]&&(o.spatials[t.index-1].detail=t.detail);});let l=Math.min(...o.spatials.map(t=>t.coord[0])),i=Math.min(...o.spatials.map(t=>t.coord[1])),s=o.max[0],n=o.max[1];e.zoomsym&&e.zoomsym.forEach(t=>{if(o.spatials[t.index-1]){o.spatials[t.index-1].zoom=t.zoom,t.offset&&(o.spatials[t.index-1].coord[0]+=t.offset[0],o.spatials[t.index-1].coord[1]+=t.offset[1]);let e=g(o.spatials[t.index-1].symbol);s=Math.max(s,o.spatials[t.index-1].coord[0]+e[0]*t.zoom),n=Math.max(n,o.spatials[t.index-1].coord[1]+e[1]*t.zoom);}});let a="";e.classes&&(a=` class="${e.classes}"`);let r="";e.id&&(r=` id="${e.id}"`);let d="";e.padding&&(l-=e.padding,i-=e.padding,s+=e.padding,n+=e.padding),e.background&&(d=`\n  <rect x="${l}" y="${i}" width="${s-l}" height="${n-i}" style="fill:${e.background};" />`);let c="";"x"!=e.zoom&&(c=` width="${(s-l)*(e.zoom?e.zoom:1)}" height="${(n-i)*(e.zoom?e.zoom:1)}"`);let m=`<svg${a}${r} version="1.1" xmlns="http://www.w3.org/2000/svg"${c} viewBox="${l} ${i} ${s-l} ${n-i}">\n  <text font-size="0">${t}</text>${d}`;const f=e.detail&&e.detail[0],p=e.detail&&e.detail[1];return m+="\n"+o.spatials.map(t=>{let o=x(t.symbol),l=f;t.detail?l=t.detail[0]:e.colorize&&(l=M(t.symbol)),l&&(o=o.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let i=p;return t.detail&&t.detail[1]&&(i=t.detail[1]),i&&(o=o.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${i}"`)),t.zoom&&(o=`<g transform="scale(${t.zoom})">${o}</g>`),`  <g transform="translate(${t.coord[0]},${t.coord[1]})">\n${o}\n  </g>`}).join("\n"),m+="\n</svg>",m}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},signPng:t=>{const o=function(t){const o=S(t);if(o.spatials){const t=document.createElement("canvas"),e=t.getContext("2d");let l=b(o.style);l.detailsym&&l.detailsym.forEach(t=>{o.spatials[t.index-1]&&(o.spatials[t.index-1].detail=t.detail);});let i=Math.min(...o.spatials.map(t=>t.coord[0])),s=Math.min(...o.spatials.map(t=>t.coord[1])),n=o.max[0],a=o.max[1];l.zoomsym&&l.zoomsym.forEach(t=>{if(o.spatials[t.index-1]){o.spatials[t.index-1].zoom=t.zoom,t.offset&&(o.spatials[t.index-1].coord[0]+=t.offset[0],o.spatials[t.index-1].coord[1]+=t.offset[1]);let e=g(o.spatials[t.index-1].symbol);n=Math.max(n,o.spatials[t.index-1].coord[0]+e[0]*t.zoom),a=Math.max(a,o.spatials[t.index-1].coord[1]+e[1]*t.zoom);}}),l.padding&&(i-=l.padding,s-=l.padding,n+=l.padding,a+=l.padding);let r=1;"x"!=l.zoom&&(r=l.zoom);let d=(n-i)*r,c=(a-s)*r;t.width=d||1,t.height=c||1,l.background&&(e.rect(0,0,d,c),e.fillStyle=l.background,e.fill());const m=l.detail&&l.detail[0]||"black",f=l.detail&&l.detail[1]||"white";return o.spatials.forEach(t=>{let o=m;t.detail?o=t.detail[0]:l.colorize&&(o=M(t.symbol));let n=f;t.detail&&t.detail[1]&&(n=t.detail[1]);let a=t.zoom||1;e.font=30*r*a+"px 'SuttonSignWritingFill'",e.fillStyle=n,e.fillText(y(t.symbol),(t.coord[0]-i)*r,(t.coord[1]-s)*r),e.font=30*r*a+"px 'SuttonSignWritingLine'",e.fillStyle=o,e.fillText(p(t.symbol),(t.coord[0]-i)*r,(t.coord[1]-s)*r);}),t}}(t),e=o.toDataURL("image/png");return o.remove(),e},signNormalize:t=>{const o=S(t);if(o.spatials){const t=o.spatials.reduce((t,o)=>{const e=g(o.symbol);return t[o.symbol]={width:e[0],height:e[1]},t},{}),e=o=>({x1:Math.min(...o.map(t=>t.coord[0])),y1:Math.min(...o.map(t=>t.coord[1])),x2:Math.max(...o.map(o=>o.coord[0]+parseInt(t[o.symbol].width))),y2:Math.max(...o.map(o=>o.coord[1]+parseInt(t[o.symbol].height)))}),l=k,i=o.spatials.filter(t=>{const o=parseInt(t.symbol.slice(1,4),16);return l[0]<=o&&l[1]>=o}),s=_,n=o.spatials.filter(t=>{const o=parseInt(t.symbol.slice(1,4),16);return s[0]<=o&&s[1]>=o});let a=e(o.spatials),r=[a.x2,a.y2];if(i.length){const t=e(i);a.x1=t.x1,a.x2=t.x2;}if(n.length){const t=e(n);a.y1=t.y1,a.y2=t.y2;}const d=[parseInt((a.x2+a.x1)/2)-500,parseInt((a.y2+a.y1)/2)-500];return (o.sequence?"A"+o.sequence.join(""):"")+o.box+(r[0]-d[0])+"x"+(r[1]-d[1])+o.spatials.map(t=>t.symbol+(t.coord[0]-d[0])+"x"+(t.coord[1]-d[1])).join("")+(o.style||"")}}});const A=function(t){return l(m(t))},C=function(t){return i(m(t))},W=function(t){return s(m(t))},L=function(t){return n(m(t))};let Z={symbol:"(?:(?:\ud8c0[\udc01-\udfff])|(?:[\ud8c1-\ud8fc][\udc00-\udfff])|(?:\ud8fd[\udc00-\udc80]))",coord:"(?:\ud836[\udc0c-\uddff]){2}",sort:"𝠀",box:"\ud836[\udc01-\udc04]"};Z.prefix=`(?:${Z.sort}(?:${Z.symbol})+)`,Z.spatial=`${Z.symbol}${Z.coord}`,Z.signbox=`${Z.box}${Z.coord}(?:${Z.spatial})*`,Z.sign=`${Z.prefix}?${Z.signbox}`,Z.sortable=`${Z.prefix}${Z.signbox}`;let D={colorize:"C",colorhex:"(?:[0-9a-fA-F]{3}){1,2}",colorname:"[a-zA-Z]+",padding:"P[0-9]{2}",zoom:"Z(?:[0-9]+(?:\\.[0-9]+)?|x)",zoomsym:"Z[0-9]{2},[0-9]+(?:\\.[0-9]+)?(?:,[0-9]{3}x[0-9]{3})?",classbase:"-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",id:"[a-zA-Z][_a-zA-Z0-9-]{0,100}"};D.colorbase=`(?:${D.colorhex}|${D.colorname})`,D.color=`_${D.colorbase}_`,D.colors=`_${D.colorbase}(?:,${D.colorbase})?_`,D.background="G"+D.color,D.detail="D"+D.colors,D.detailsym="D[0-9]{2}"+D.colors,D.classes=`${D.classbase}(?: ${D.classbase})*`,D.full=`-(${D.colorize})?(${D.padding})?(${D.background})?(${D.detail})?(${D.zoom})?(?:-((?:${D.detailsym})*)((?:${D.zoomsym})*))?(?:-(${D.classes})?!(?:(${D.id})!)?)?`;const P=t=>parseInt(t.codePointAt(0))-120844+250,R=t=>[P(t.slice(0,2)),P(t.slice(2,4))],T=t=>{const o=`^(${Z.symbol})(${Z.coord})?(${D.full})?`,e="string"==typeof t?t.match(new RegExp(o)):void 0;return {symbol:e?e[1]:void 0,coord:e&&e[2]?R(e[2]):void 0,style:e?e[3]:void 0}},j=t=>{const o=`^(${Z.prefix})?(${Z.signbox})(${D.full})?`,e="string"==typeof t?t.match(new RegExp(o)):void 0;return e?{sequence:e[1]?e[1].slice(2).match(/.{2}/g):void 0,box:e[2].slice(0,2),max:R(e[2].slice(2,6)),spatials:e[2].length<7?void 0:e[2].slice(6).match(/(.{6})/g).map(t=>({symbol:t.slice(0,2),coord:R(t.slice(2))})),style:e[3]}:{}},O=[262145,287201,310433,311201,321761,323489,324257],q=[311201,321760],B=[311201,322624],N=["#0000CC","#CC0000","#FF0099","#006600","#000000","#884411","#FF9900"],U=t=>{const o=T(t);let e="#000000";if(o.symbol){const t=(t=>parseInt(t.codePointAt(0)))(o.symbol),l=O.findIndex(o=>o>t);e=N[l<0?6:l-1];}return e};var G=Object.freeze({__proto__:null,symbolSize:A,symbolLine:C,symbolFill:W,symbolText:L,symbolSvg:t=>{const o=T(t);if(o.symbol){let e=A(o.symbol);if(e){let l,i=b(o.style),s=L(o.symbol);s=`  <g transform="translate(500,500)">\n${s}\n  </g>`,i.colorize?l=U(o.symbol):i.detail&&(l=i.detail[0]),l&&(s=s.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let n=i.detail&&i.detail[1];n&&(s=s.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${n}"`));let a=500,r=500,d="";i.padding&&(a-=i.padding,r-=i.padding,e[0]+=2*i.padding,e[1]+=2*i.padding),i.background&&(d=`\n  <rect x="${a}" y="${r}" width="${e[0]}" height="${e[1]}" style="fill:${i.background};" />`);let c="";"x"!=i.zoom&&(c=` width="${e[0]*(i.zoom?i.zoom:1)}" height="${e[1]*(i.zoom?i.zoom:1)}"`);let m="";i.classes&&(m=` class="${i.classes}"`);let f="";return i.id&&(f=` id="${i.id}"`),`<svg${m}${f} version="1.1" xmlns="http://www.w3.org/2000/svg"${c} viewBox="${a} ${r} ${e[0]} ${e[1]}">\n  <text font-size="0">${t}</text>${d}\n${s}\n</svg>`}}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},symbolPng:t=>{const o=function(t){const o=T(t);if(o.symbol){let t=A(o.symbol);if(t){const e=document.createElement("canvas"),l=e.getContext("2d");let i=b(o.style),s="black";i.colorize?s=U(o.symbol):i.detail&&(s=i.detail[0]);let n=i.detail&&i.detail[1]||"white",a=500,r=a+t[0],d=500,c=d+t[1];i.padding&&(a-=i.padding,d-=i.padding,r+=i.padding,c+=i.padding);let m=1;"x"!=i.zoom&&(m=i.zoom);let f=(r-a)*m,g=(c-d)*m;return e.width=f||1,e.height=g||1,i.background&&(l.rect(0,0,f,g),l.fillStyle=i.background,l.fill()),l.font=30*m+"px 'SuttonSignWritingFill'",l.fillStyle=n,l.fillText(W(o.symbol),(500-a)*m,(500-d)*m),l.font=30*m+"px 'SuttonSignWritingLine'",l.fillStyle=s,l.fillText(C(o.symbol),(500-a)*m,(500-d)*m),e}}}(t),e=o.toDataURL("image/png");return o.remove(),e},symbolNormalize:t=>{const o=T(t);if(!o.symbol)return null;{let t=A(o.symbol);if(t)return `${o.symbol}${c([500-parseInt(t[0]/2),500-parseInt(t[1]/2)])}${o.style||""}`}},signSvg:t=>{let o=j(t);if(o.spatials){let e=b(o.style);e.detailsym&&e.detailsym.forEach(t=>{o.spatials[t.index-1]&&(o.spatials[t.index-1].detail=t.detail);});let l=Math.min(...o.spatials.map(t=>t.coord[0])),i=Math.min(...o.spatials.map(t=>t.coord[1])),s=o.max[0],n=o.max[1];e.zoomsym&&e.zoomsym.forEach(t=>{if(o.spatials[t.index-1]){o.spatials[t.index-1].zoom=t.zoom,t.offset&&(o.spatials[t.index-1].coord[0]+=t.offset[0],o.spatials[t.index-1].coord[1]+=t.offset[1]);let e=A(o.spatials[t.index-1].symbol);s=Math.max(s,o.spatials[t.index-1].coord[0]+e[0]*t.zoom),n=Math.max(n,o.spatials[t.index-1].coord[1]+e[1]*t.zoom);}});let a="";e.classes&&(a=` class="${e.classes}"`);let r="";e.id&&(r=` id="${e.id}"`);let d="";e.padding&&(l-=e.padding,i-=e.padding,s+=e.padding,n+=e.padding),e.background&&(d=`\n  <rect x="${l}" y="${i}" width="${s-l}" height="${n-i}" style="fill:${e.background};" />`);let c="";"x"!=e.zoom&&(c=` width="${(s-l)*(e.zoom?e.zoom:1)}" height="${(n-i)*(e.zoom?e.zoom:1)}"`);let m=`<svg${a}${r} version="1.1" xmlns="http://www.w3.org/2000/svg"${c} viewBox="${l} ${i} ${s-l} ${n-i}">\n  <text font-size="0">${t}</text>${d}`;const f=e.detail&&e.detail[0],g=e.detail&&e.detail[1];return m+="\n"+o.spatials.map(t=>{let o=L(t.symbol),l=f;t.detail?l=t.detail[0]:e.colorize&&(l=U(t.symbol)),l&&(o=o.replace(/class="sym-line" fill="black"/,`class="sym-line" fill="${l}"`));let i=g;return t.detail&&t.detail[1]&&(i=t.detail[1]),i&&(o=o.replace(/class="sym-fill" fill="white"/,`class="sym-fill" fill="${i}"`)),t.zoom&&(o=`<g transform="scale(${t.zoom})">${o}</g>`),`  <g transform="translate(${t.coord[0]},${t.coord[1]})">\n${o}\n  </g>`}).join("\n"),m+="\n</svg>",m}return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>'},signPng:t=>{const o=function(t){const o=j(t);if(o.spatials){const t=document.createElement("canvas"),e=t.getContext("2d");let l=b(o.style);l.detailsym&&l.detailsym.forEach(t=>{o.spatials[t.index-1]&&(o.spatials[t.index-1].detail=t.detail);});let i=Math.min(...o.spatials.map(t=>t.coord[0])),s=Math.min(...o.spatials.map(t=>t.coord[1])),n=o.max[0],a=o.max[1];l.zoomsym&&l.zoomsym.forEach(t=>{if(o.spatials[t.index-1]){o.spatials[t.index-1].zoom=t.zoom,t.offset&&(o.spatials[t.index-1].coord[0]+=t.offset[0],o.spatials[t.index-1].coord[1]+=t.offset[1]);let e=A(o.spatials[t.index-1].symbol);n=Math.max(n,o.spatials[t.index-1].coord[0]+e[0]*t.zoom),a=Math.max(a,o.spatials[t.index-1].coord[1]+e[1]*t.zoom);}}),l.padding&&(i-=l.padding,s-=l.padding,n+=l.padding,a+=l.padding);let r=1;"x"!=l.zoom&&(r=l.zoom);let d=(n-i)*r,c=(a-s)*r;t.width=d||1,t.height=c||1,l.background&&(e.rect(0,0,d,c),e.fillStyle=l.background,e.fill());const m=l.detail&&l.detail[0]||"black",f=l.detail&&l.detail[1]||"white";return o.spatials.forEach(t=>{let o=m;t.detail?o=t.detail[0]:l.colorize&&(o=U(t.symbol));let n=f;t.detail&&t.detail[1]&&(n=t.detail[1]);let a=t.zoom||1;e.font=30*r*a+"px 'SuttonSignWritingFill'",e.fillStyle=n,e.fillText(W(t.symbol),(t.coord[0]-i)*r,(t.coord[1]-s)*r),e.font=30*r*a+"px 'SuttonSignWritingLine'",e.fillStyle=o,e.fillText(C(t.symbol),(t.coord[0]-i)*r,(t.coord[1]-s)*r);}),t}}(t),e=o.toDataURL("image/png");return o.remove(),e},signNormalize:t=>{const o=j(t);if(o.spatials){const t=o.spatials.reduce((t,o)=>{const e=A(o.symbol);return t[o.symbol]={width:e[0],height:e[1]},t},{}),e=o=>({x1:Math.min(...o.map(t=>t.coord[0])),y1:Math.min(...o.map(t=>t.coord[1])),x2:Math.max(...o.map(o=>o.coord[0]+parseInt(t[o.symbol].width))),y2:Math.max(...o.map(o=>o.coord[1]+parseInt(t[o.symbol].height)))}),l=q,i=o.spatials.filter(t=>{const o=parseInt(t.symbol.slice(1,4),16);return l[0]<=o&&l[1]>=o}),s=B,n=o.spatials.filter(t=>{const o=parseInt(t.symbol.slice(1,4),16);return s[0]<=o&&s[1]>=o});let a=e(o.spatials),r=[a.x2,a.y2];if(i.length){const t=e(i);a.x1=t.x1,a.x2=t.x2;}if(n.length){const t=e(n);a.y1=t.y1,a.y2=t.y2;}const d=[parseInt((a.x2+a.x1)/2)-500,parseInt((a.y2+a.y1)/2)-500];return (o.sequence?"𝠀"+o.sequence.join(""):"")+o.box+c([r[0]-d[0],r[1]-d[1]])+o.spatials.map(t=>t.symbol+c([t.coord[0]-d[0],t.coord[1]-d[1]])).join("")+(o.style||"")}}});

var symbol_min = createCommonjsModule(function (module, exports) {
/* Sutton SignWriting Unicode 8 Module v1.1.2 (https://github.com/sutton-signwriting/unicode8), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
!function(e,o){o(exports);}(commonjsGlobal,(function(e){let o={base:"(?:\ud836[\udc00-\ude8b])",fill:"(?:\ud836[\ude9b-\ude9f])",rotation:"(?:\ud836[\udea1-\udeaf])"};o.full=`(${o.base})(${o.fill})?(${o.rotation})?`;e.compose=e=>{if("object"!=typeof e||null===e)return;const o=(e.base?e.base:"")+(e.fill?e.fill:"")+(e.rotation?e.rotation:"");return o||void 0},e.parse=e=>{const t="^"+o.full,i=("string"==typeof e?e.match(new RegExp(t)):[])||[];return {base:i[1]?i[1]:void 0,fill:i[2]?i[2]:void 0,rotation:i[3]?i[3]:void 0}},e.re=o,Object.defineProperty(e,"__esModule",{value:!0});}));
});

var convert_min$1 = createCommonjsModule(function (module, exports) {
/* Sutton SignWriting Unicode 8 Module v1.1.2 (https://github.com/sutton-signwriting/unicode8), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
!function(t,e){e(exports);}(commonjsGlobal,(function(t){let e={base:"(?:\ud836[\udc00-\ude8b])",fill:"(?:\ud836[\ude9b-\ude9f])",rotation:"(?:\ud836[\udea1-\udeaf])"};e.full=`(${e.base})(${e.fill})?(${e.rotation})?`;const o=t=>{const o="^"+e.full,i=("string"==typeof t?t.match(new RegExp(o)):[])||[];return {base:i[1]?i[1]:void 0,fill:i[2]?i[2]:void 0,rotation:i[3]?i[3]:void 0}},i=t=>String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023));t.code2uni=i,t.fsw2uni=t=>{let e=parseInt(t.slice(1,4),16),o=parseInt(t.slice(4,5),16),n=parseInt(t.slice(5,6),16);return i(e+120576)+(o?i(o+121498):"")+(n?i(n+121504):"")},t.swu2uni=t=>{const e=t.codePointAt(0)-262145,o=parseInt(e/96),n=parseInt((e-96*o)/16),s=parseInt(e-96*o-16*n);return i(o+120832)+(n?i(n+121498):"")+(s?i(s+121504):"")},t.uni2code=t=>t.codePointAt(0),t.uni2fsw=t=>{let e=o(t);return e.base?(e.base=e.base.codePointAt(0)-120576,e.fill=e.fill?e.fill.codePointAt(0)-121498:0,e.rotation=e.rotation?e.rotation.codePointAt(0)-121504:0,"S"+e.base.toString(16)+e.fill.toString(16)+e.rotation.toString(16)):void 0},t.uni2hex=t=>t.codePointAt(0).toString(16).toUpperCase(),t.uni2swu=t=>{let e=o(t);return e.base?(e.base=e.base.codePointAt(0)-120832,e.fill=e.fill?e.fill.codePointAt(0)-121498:0,e.rotation=e.rotation?e.rotation.codePointAt(0)-121504:0,i(262145+96*e.base+16*e.fill+e.rotation)):void 0},Object.defineProperty(t,"__esModule",{value:!0});}));
});

const sgnwSymbolPickerCss = ":host{display:block;width:30em}.swu{font-family:SuttonSignWritingOneD !important;font-size:2em}.uni8{font-family:NotoSansSignWriting !important;font-size:3em}";

const SgnwSymbolPicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.kind = 0;
    this.category = 0;
    this.group = 0;
    this.base = 0;
    this.focus = "";
    this.focusChanged = (name) => {
      this.focus = name;
    };
    this.symbolMod = (part, mod) => {
      this.focusChanged('');
      let fsw = fsw_min.parse.symbol(this.fsw);
      let sym = { 'base': undefined, 'fill': undefined, 'rotation': undefined };
      if (fsw.symbol) {
        sym = {
          'base': parseInt(fsw.symbol.substring(1, 4), 16),
          'fill': parseInt(fsw.symbol.substring(4, 5), 16),
          'rotation': parseInt(fsw.symbol.substring(5, 6), 16),
        };
        switch (part) {
          case 'base': {
            if (sym['base'] == 0x100 && mod == -1) {
              mod = 0;
              sym['base'] = 0x38b;
            }
            if (sym['base'] == 0x38b && mod == 1) {
              mod = 0;
              sym['base'] = 0x100;
            }
            break;
          }
          case 'fill': {
            if (sym['fill'] == 0x0 && mod == -1) {
              mod = 0;
              sym['fill'] = 0x5;
            }
            if (sym['fill'] == 0x5 && mod == 1) {
              mod = 0;
              sym['fill'] = 0x0;
            }
            break;
          }
          case 'rotation': {
            if (sym['rotation'] == 0x0 && mod == -1) {
              mod = 0;
              sym['rotation'] = 0xf;
            }
            if (sym['rotation'] == 0xf && mod == 1) {
              mod = 0;
              sym['rotation'] = 0x0;
            }
            break;
          }
        }
        sym[part] = sym[part] + mod;
        fsw = "S" + sym['base'].toString(16) + sym['fill'].toString(16) + sym['rotation'].toString(16);
        this.setSymbol('fsw', fsw);
      }
    };
    this.setSymbol = (type, setting) => {
      switch (type) {
        case "fsw": {
          let parsed = fsw_min.parse.symbol(setting);
          if (!parsed['symbol']) {
            return;
          }
          this.fsw = parsed['symbol'];
          this.swu = convert_min.key2swu(this.fsw);
          this.iid = convert_min.key2id(this.fsw);
          this.uni = convert_min$1.fsw2uni(this.fsw);
          break;
        }
        case "swu": {
          let parsed = swu_min.parse.symbol(setting);
          if (!parsed['symbol']) {
            return;
          }
          this.swu = parsed['symbol'];
          this.fsw = convert_min.swu2key(this.swu);
          this.iid = convert_min.swu2id(this.swu);
          this.uni = convert_min$1.fsw2uni(this.fsw);
          break;
        }
        case "swuhex": {
          const match = setting.match(/^0x4([0-9a-f]{4})/);
          if (!match || !match[1]) {
            return;
          }
          setting = '' + parseInt(match[1], 16);
        }
        case "iid": {
          let iid = parseInt(setting);
          if (iid < 1 || iid > 62592) {
            return;
          }
          this.iid = iid;
          this.fsw = convert_min.id2key(this.iid);
          this.swu = convert_min.id2swu(this.iid);
          this.uni = convert_min$1.fsw2uni(this.fsw);
          break;
        }
        case "unihex": {
          let matches = setting.match(/U\+1D[0-9A-F]{3}/g);
          if (!matches) {
            return;
          }
          setting = matches.map(m => convert_min$1.code2uni(parseInt(m.substring(2), 16))).join('');
        }
        case "uni": {
          let parsed = symbol_min.parse(setting);
          if (!parsed['base']) {
            return;
          }
          this.uni = symbol_min.compose(parsed);
          this.fsw = convert_min$1.uni2fsw(this.uni);
          this.swu = convert_min.key2swu(this.fsw);
          this.iid = convert_min.key2id(this.fsw);
          break;
        }
        default: {
          return;
        }
      }
      let look;
      let value;
      value = parseInt(this.fsw.substring(1, 4), 16);
      look = value;
      while (fsw_min.kind.indexOf(look) == -1) {
        look = look - 1;
      }
      this.kind = fsw_min.kind.indexOf(look);
      look = value;
      while (fsw_min.category.indexOf(look) == -1) {
        look = look - 1;
      }
      this.category = fsw_min.category.indexOf(look);
      look = value;
      while (fsw_min.group.indexOf(look) == -1) {
        look = look - 1;
      }
      this.group = fsw_min.group.indexOf(look);
      this.base = value - 0x100;
    };
    this.rangeChanged = (event) => {
      const el = event.target;
      const name = el.name;
      if (name != this.focus) {
        return;
      }
      const index = parseInt(el.value);
      let i;
      let value;
      switch (name) {
        case "kind": {
          value = fsw_min.kind[index];
          this.category = fsw_min.category.indexOf(value);
          this.group = fsw_min.group.indexOf(value);
          this.base = value - 0x100;
          break;
        }
        case "category": {
          value = fsw_min.category[index];
          i = index;
          while (fsw_min.kind.indexOf(fsw_min.category[i]) == -1) {
            i = i - 1;
          }
          this.kind = fsw_min.kind.indexOf(fsw_min.category[i]);
          this.group = fsw_min.group.indexOf(value);
          this.base = value - 0x100;
          break;
        }
        case "group": {
          value = fsw_min.group[index];
          i = index;
          while (fsw_min.kind.indexOf(fsw_min.group[i]) == -1) {
            i = i - 1;
          }
          this.kind = fsw_min.kind.indexOf(fsw_min.group[i]);
          i = index;
          while (fsw_min.category.indexOf(fsw_min.group[i]) == -1) {
            i = i - 1;
          }
          this.category = fsw_min.category.indexOf(fsw_min.group[i]);
          this.base = value - 0x100;
          break;
        }
        case "base": {
          value = index + 0x100;
          i = index;
          while (fsw_min.kind.indexOf(i + 0x100) == -1) {
            i = i - 1;
          }
          this.kind = fsw_min.kind.indexOf(i + 0x100);
          i = index;
          while (fsw_min.category.indexOf(i + 0x100) == -1) {
            i = i - 1;
          }
          this.category = fsw_min.category.indexOf(i + 0x100);
          i = index;
          while (fsw_min.group.indexOf(i + 0x100) == -1) {
            i = i - 1;
          }
          this.group = fsw_min.group.indexOf(i + 0x100);
          break;
        }
        default: {
          return;
        }
      }
      let key = "S" + value.toString(16) + "00";
      this.fsw = key;
      this.iid = convert_min.key2id(key);
      this.swu = convert_min.key2swu(key);
      this.uni = convert_min$1.fsw2uni(key);
    };
    this.codepoints = () => {
      let parsed = symbol_min.parse(this.uni);
      let codes = [];
      if (!parsed.base) {
        return;
      }
      codes.push("U+" + convert_min$1.uni2hex(parsed.base));
      if (parsed.fill) {
        codes.push("U+" + convert_min$1.uni2hex(parsed.fill));
      }
      if (parsed.rotation) {
        codes.push("U+" + convert_min$1.uni2hex(parsed.rotation));
      }
      return codes.join(' ');
    };
  }
  componentWillLoad() {
    if (this.fsw) {
      this.setSymbol('fsw', this.fsw);
      return;
    }
    if (this.swu) {
      this.setSymbol('swu', this.swu);
      return;
    }
    if (this.iid) {
      this.setSymbol('iid', this.iid.toString());
      return;
    }
    if (this.uni) {
      this.setSymbol('uni', this.uni);
      return;
    }
  }
  validateFSW(newValue) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    const has6chars = typeof newValue === 'string' && newValue.length == 6;
    if (isBlank) {
      throw new Error('name: required');
    }
    if (!has6chars) {
      throw new Error('name: has6chars');
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-card", null, index.h("ion-item", null, index.h("ion-range", { name: "kind", value: this.kind, onIonFocus: () => this.focusChanged('kind'), onIonChange: this.rangeChanged, min: 0, max: 2, snaps: true }, index.h("ion-label", { slot: "start" }, "Kind"))), index.h("ion-item", null, index.h("ion-range", { name: "category", value: this.category, onIonFocus: () => this.focusChanged('category'), onIonChange: this.rangeChanged, min: 0, max: 6, snaps: true }, index.h("ion-label", { slot: "start" }, "Category"))), index.h("ion-item", null, index.h("ion-range", { name: "group", value: this.group, onIonFocus: () => this.focusChanged('group'), onIonChange: this.rangeChanged, min: 0, max: 29, snaps: true }, index.h("ion-label", { slot: "start" }, "Group"))), index.h("ion-item", null, index.h("ion-range", { name: "base", value: this.base, onIonFocus: () => this.focusChanged('base'), onIonChange: this.rangeChanged, min: 0, max: 651, snaps: true }, index.h("ion-label", { slot: "start" }, "Base"))), index.h("ion-grid", null, index.h("ion-row", null, index.h("ion-col", { size: "4" }), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('base', 1) }, index.h("ion-icon", { name: "caret-up-outline" }))), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('fill', 1) }, index.h("ion-icon", { name: "caret-up-outline" }))), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('rotation', 1) }, index.h("ion-icon", { name: "caret-up-outline" })))), index.h("ion-row", null, index.h("ion-col", { size: "4" }), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('base', -1) }, index.h("ion-icon", { name: "caret-down-outline" }))), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('fill', -1) }, index.h("ion-icon", { name: "caret-down-outline" }))), index.h("ion-col", { size: "2" }, index.h("ion-button", { expand: "block", onClick: () => this.symbolMod('rotation', -1) }, index.h("ion-icon", { name: "caret-down-outline" })))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "Symbol")), index.h("ion-col", { size: "6" }, d.symbolSize(this.iid)
      ? index.h("sgnw-symbol", { fsw: this.fsw, styling: "-CZ2" })
      : index.h("ion-title", null, "invalid symbol"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "FSW")), index.h("ion-col", { size: "6" }, index.h("ion-input", { id: "fsw-input", name: "fsw-input", type: "text", pattern: fsw_min.re.symbol, onIonFocus: () => this.focusChanged('fsw-input'), value: this.fsw })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("fsw", this.element.shadowRoot.querySelector('ion-input#fsw-input').value); } }, "Set"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "SWU")), index.h("ion-col", { size: "6" }, index.h("ion-input", { class: "swu", id: "swu-input", name: "swu-input", type: "text", pattern: swu_min.re.symbol, onIonFocus: () => this.focusChanged('swu-input'), value: this.swu })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("swu", this.element.shadowRoot.querySelector('ion-input#swu-input').value); } }, "Set"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "SWU Hex")), index.h("ion-col", { size: "6" }, index.h("ion-input", { id: "swuhex-input", name: "swuhex-input", type: "text", pattern: "0x4[0-9a-f]{4}", onIonFocus: () => this.focusChanged('swuhex-input'), value: "0x" + (0x40000 + this.iid).toString(16) })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("swuhex", this.element.shadowRoot.querySelector('ion-input#swuhex-input').value); } }, "Set"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "ISWA ID")), index.h("ion-col", { size: "6" }, index.h("ion-input", { id: "iid-input", name: "iid-input", type: "number", onIonFocus: () => this.focusChanged('iid-input'), value: this.iid })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("iid", this.element.shadowRoot.querySelector('ion-input#iid-input').value); } }, "Set"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "Unicode 8")), index.h("ion-col", { size: "6" }, index.h("ion-input", { class: "uni8", id: "uni-input", name: "uni-input", type: "text", pattern: symbol_min.re.symbol, onIonFocus: () => this.focusChanged('uni-input'), value: this.uni })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("uni", this.element.shadowRoot.querySelector('ion-input#uni-input').value); } }, "Set"))), index.h("ion-row", null, index.h("ion-col", { size: "4" }, index.h("ion-title", null, "Code(s)")), index.h("ion-col", { size: "6" }, index.h("ion-input", { id: "unihex-input", name: "unihex-input", type: "text", onIonFocus: () => this.focusChanged('unihex-input'), value: this.codepoints() })), index.h("ion-col", { size: "2" }, index.h("ion-button", { onClick: () => { this.setSymbol("unihex", this.element.shadowRoot.querySelector('ion-input#unihex-input').value); } }, "Set")))))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "fsw": ["validateFSW"]
  }; }
};
SgnwSymbolPicker.style = sgnwSymbolPickerCss;

exports.ion_button = Button;
exports.ion_card = Card;
exports.ion_col = Col;
exports.ion_grid = Grid;
exports.ion_icon = Icon;
exports.ion_input = Input;
exports.ion_item = Item;
exports.ion_label = Label;
exports.ion_range = Range;
exports.ion_ripple_effect = RippleEffect;
exports.ion_row = Row;
exports.ion_title = ToolbarTitle;
exports.sgnw_symbol = SgnwSymbol;
exports.sgnw_symbol_picker = SgnwSymbolPicker;
