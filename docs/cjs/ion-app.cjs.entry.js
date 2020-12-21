'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-215593b0.js');
const ionicGlobal = require('./ionic-global-bcaf818a.js');

const appCss = "html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(async () => {
        const isHybrid = ionicGlobal.isPlatform(window, 'hybrid');
        if (!ionicGlobal.config.getBoolean('_testing')) {
          Promise.resolve().then(function () { return require('./tap-click-cd858b48.js'); }).then(module => module.startTapClick(ionicGlobal.config));
        }
        if (ionicGlobal.config.getBoolean('statusTap', isHybrid)) {
          Promise.resolve().then(function () { return require('./status-tap-2c02d845.js'); }).then(module => module.startStatusTap());
        }
        if (ionicGlobal.config.getBoolean('inputShims', needInputShims())) {
          Promise.resolve().then(function () { return require('./input-shims-213e83f8.js'); }).then(module => module.startInputShims(ionicGlobal.config));
        }
        const hardwareBackButtonModule = await Promise.resolve().then(function () { return require('./hardware-back-button-ca468aae.js'); });
        if (ionicGlobal.config.getBoolean('hardwareBackButton', isHybrid)) {
          hardwareBackButtonModule.startHardwareBackButton();
        }
        else {
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        if (typeof window !== 'undefined') {
          Promise.resolve().then(function () { return require('./keyboard-1dcbde6c.js'); }).then(module => module.startKeyboardAssist(window));
        }
        Promise.resolve().then(function () { return require('./focus-visible-1583bc8e.js'); }).then(module => module.startFocusVisible());
      });
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'ion-page': true,
        'force-statusbar-padding': ionicGlobal.config.getBoolean('_forceStatusbarPadding'),
      } }));
  }
  get el() { return index.getElement(this); }
};
const needInputShims = () => {
  return ionicGlobal.isPlatform(window, 'ios') && ionicGlobal.isPlatform(window, 'mobile');
};
const rIC = (callback) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
  }
  else {
    setTimeout(callback, 32);
  }
};
App.style = appCss;

exports.ion_app = App;
