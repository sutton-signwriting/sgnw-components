/*!
 * The Sutton SignWriting Web Components
 */
import { e as createCommonjsModule, f as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-c68e7108.js';

var font = createCommonjsModule(function (module, exports) {
/**
* Sutton SignWriting TrueType Font Module v1.3.2 (https://github.com/sutton-signwriting/font-ttf)
* Author: Steve Slevinski  (https://SteveSlevinski.me)
* font.js is released under the MIT License.
*/

(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? factory(exports) :
  typeof undefined === 'function' && undefined.amd ? undefined(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ssw = global.ssw || {}, global.ssw.ttf = global.ssw.ttf || {}, global.ssw.ttf.font = {})));
})(commonjsGlobal, (function (exports) { 'use strict';

  /**
   * Function that appends font-face CSS for the Sutton SignWriting fonts for system installed fonts, relative directory fonts, or content delivery network
   * @function font.cssAppend
   * @param {string} dir - an optional relative directory for font location
   * @example
   * font.cssAppend('./font/')
   */
  const cssAppend = function (dir = '') {
    const id = "SgnwFontCss";

    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.setAttribute("id", "SgnwFontCss");
      style.appendChild(document.createTextNode(`
  @font-face {
    font-family: "SuttonSignWritingLine";
    src: 
      local('SuttonSignWritingLine'),
      ${dir ? `url('${dir}SuttonSignWritingLine.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');
  }
  @font-face {
    font-family: "SuttonSignWritingFill";
    src: 
      local('SuttonSignWritingFill'),
      ${dir ? `url('${dir}SuttonSignWritingFill.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');
  }
  @font-face {
    font-family: "SuttonSignWritingOneD";
    src: 
      local('SuttonSignWritingOneD'),
      ${dir ? `url('${dir}SuttonSignWritingOneD.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');
  }
    `));
      document.head.appendChild(style);
    }
  };

  let sizes = {};
  const zoom = 2;
  const bound = 76 * zoom;
  let context;
  /**
   * Function that returns the size of a symbol using an id
   * @function font.symbolSize
   * @param {number} id - a 16-bit number of a symbol
   * @example
   * font.symbolSize(1)
   * 
   * return [15,30]
   */

  const symbolSize = function (id) {
    if (id in sizes) {
      return [...sizes[id]];
    }

    if (!context) {
      const canvaser = document.createElement("canvas");
      canvaser.width = bound;
      canvaser.height = bound;
      context = canvaser.getContext("2d");
    }

    context.clearRect(0, 0, bound, bound);
    context.font = 30 * zoom + "px 'SuttonSignWritingLine'";
    context.fillText(String.fromCodePoint(id + 0xF0000), 0, 0);
    const imgData = context.getImageData(0, 0, bound, bound).data;
    let w, h, i, s;

    wloop: for (w = bound - 1; w >= 0; w--) {
      for (h = 0; h < bound; h += 1) {
        for (s = 0; s < 4; s += 1) {
          i = w * 4 + h * 4 * bound + s;

          if (imgData[i]) {
            break wloop;
          }
        }
      }
    }

    var width = w;

    hloop: for (h = bound - 1; h >= 0; h--) {
      for (w = 0; w < width; w += 1) {
        for (s = 0; s < 4; s += 1) {
          i = w * 4 + h * 4 * bound + s;

          if (imgData[i]) {
            break hloop;
          }
        }
      }
    }

    var height = h + 1;
    width = Math.ceil(width / zoom);
    height = Math.ceil(height / zoom); // Rounding error in chrome.  Manual fixes.

    if (14394 == id) {
      width = 19;
    }

    if ([10468, 10480, 10496, 10512, 10500, 10532, 10548, 10862, 10878, 10894, 11058, 11074, 11476, 11488, 11492, 11504, 11508, 11520, 10516, 10910, 10926, 11042, 11082, 10942].includes(id)) {
      width = 20;
    }

    if (31921 == id) {
      width = 22;
    }

    if (38460 == id) {
      width = 23;
    }

    if ([20164, 20212].includes(id)) {
      width = 25;
    }

    if (31894 == id) {
      width = 28;
    }

    if (46698 == id) {
      width = 29;
    }

    if (29606 == id) {
      width = 30;
    }

    if (44855 == id) {
      width = 40;
    }

    if (32667 == id) {
      width = 50;
    }

    if ([11088, 11474, 11490, 11506].includes(id)) {
      height = 20;
    }

    if (6285 == id) {
      height = 21;
    }

    if (40804 == id) {
      height = 31;
    }

    if (41475 == id) {
      height = 36;
    } // Error in chrome.  Manual fix.
    // if (width==0 && height==0) {


    if (width == 0 && height == 0) {
      const sizefix = {
        9: [15, 30],
        10: [21, 30],
        11: [30, 15],
        12: [30, 21],
        13: [15, 30],
        14: [21, 30]
      };

      if (id in sizefix) {
        width = sizefix[id][0];
        height = sizefix[id][1];
      }
    }

    if (width == 0 && height == 0) {
      return undefined;
    }

    sizes[id] = [width, height];
    return [width, height];
  };

  /**
   * Function that returns a plane 15 character for a symbol line using an id
   * @function font.symbolLine
   * @param {number} id - a 16-bit number of a symbol
   * @example
   * font.symbolLine(1)
   * 
   * return '󰀁'
   */
  const symbolLine = function (id) {
    return String.fromCodePoint(id + 0xF0000);
  };
  /**
   * Function that returns a plane 16 character for a symbol fill using an id
   * @function font.symbolFill
   * @param {number} id - a 16-bit number of a symbol
   * @example
   * font.symbolFill(1)
   * 
   * return '􀀁'
   */


  const symbolFill = function (id) {
    return String.fromCodePoint(id + 0x100000);
  };
  /**
   * Function that creates two text elements for a symbol using an id
   * @function font.symbolText
   * @param {number} id - a 16-bit number of a symbol
   * @example
   * font.symbolText(1)
   * 
   * return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀁</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀁</text>`
   */


  const symbolText = function (id) {
    return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${symbolFill(id)}</text>
    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${symbolLine(id)}</text>`;
  };

  /**
   * Function that executes a callback function once the Sutton SignWriiting Line and Fill fonts are ready to use
   * @function font.cssLoaded
   * @param {function} callback - a callback function to execute when fonts are ready
   * @example
   * const callback = () => {
   *   console.log("Sutton SignWriting Line and Fill fonts are ready to use")
   * }
   * 
   * font.cssLoaded( callback )
   */

  const cssLoaded = function (callback) {
    let lineReady = false;
    let fillReady = false;
    cssLoadedLine(() => {
      lineReady = true;
    });
    cssLoadedFill(() => {
      fillReady = true;
    });
    const cssCheck = setInterval(function () {
      if (lineReady && fillReady) {
        clearInterval(cssCheck);
        callback();
      }
    }, 100);
  };
  /**
   * Function that executes a callback function once the Sutton SignWriiting Line font is ready to use
   * @function font.cssLoadedLine
   * @param {function} callback - a callback function to execute when line font is ready
   * @example
   * const callback = () => {
   *   console.log("Sutton SignWriting Line font is ready to use")
   * }
   * 
   * font.cssLoadedLine( callback )
   */


  const cssLoadedLine = function (callback) {
    if (!symbolSize(1)) {
      const cssCheck = setInterval(function () {
        if (symbolSize(1)) {
          clearInterval(cssCheck);
          callback();
        }
      }, 100);
    } else {
      callback();
    }
  };
  /**
   * Function that executes a callback function once the Sutton SignWriiting Fill font is ready to use
   * @function font.cssLoadedFill
   * @param {function} callback - a callback function to execute when fill font is ready
   * @example
   * const callback = () => {
   *   console.log("Sutton SignWriting Fill font is ready to use")
   * }
   * 
   * font.cssLoadedFill( callback )
   */


  const cssLoadedFill = function (callback) {
    const fillReady = function () {
      const canvaser = document.createElement("canvas");
      canvaser.width = 15;
      canvaser.height = 30;
      const context = canvaser.getContext("2d");
      context.font = "30px 'SuttonSignWritingFill'";
      context.fillText(symbolFill(1), 0, 0);
      const imgData = context.getImageData(0, 0, 15, 30).data;
      return !imgData.every(item => item === 0);
    };

    if (!fillReady()) {
      const cssCheck = setInterval(function () {
        if (fillReady()) {
          clearInterval(cssCheck);
          callback();
        }
      }, 100);
    } else {
      callback();
    }
  };

  exports.cssAppend = cssAppend;
  exports.cssLoaded = cssLoaded;
  exports.cssLoadedFill = cssLoadedFill;
  exports.cssLoadedLine = cssLoadedLine;
  exports.symbolFill = symbolFill;
  exports.symbolLine = symbolLine;
  exports.symbolSize = symbolSize;
  exports.symbolText = symbolText;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/* support ongoing development on https://patreon.com/signwriting */
});

const font$1 = /*@__PURE__*/getDefaultExportFromCjs(font);

// @ts-ignore
window['sgnw'] = false;
const event = new Event('sgnw');
const rgb2hex = function (rgba) {
  return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
    let parts = values.split(',');
    if (parts.length == 4 && (parseInt(parts[3]) == 0)) {
      return 'transparent';
    }
    else {
      return parts.slice(0, 3)
        .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
        .join('');
    }
  });
};
const rgba2hex = function (rgba) {
  return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
    let parts = values.split(',');
    if (parts.length == 4 && (parseInt(parts[3]) < 1)) {
      return 'transparent';
    }
    else {
      return parts.slice(0, 3)
        .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
        .join('');
    }
  });
};
const md2mdx = function (md, tag) {
  let regex = new RegExp("\\.\\./(" + tag + ")-([a-z]+)", "g");
  return md.replace(regex, "./?path=/docs/fsw-components-$1-$2");
};
const cssValues = function (el) {
  let css = window.getComputedStyle(el, null);
  let styleObj = {
    "background": rgba2hex(css.getPropertyValue("background-color")),
    "detail": [
      rgb2hex(css.getPropertyValue("color")),
      rgb2hex(css.getPropertyValue("background-color"))
    ],
    "zoom": parseInt(css.getPropertyValue("font-size").slice(0, -2)) / 30
  };
  let elem = el;
  while (styleObj.detail[1] == "transparent") {
    elem = elem.parentElement;
    if (elem == null) {
      elem = document.body;
    }
    css = window.getComputedStyle(elem, null);
    styleObj.detail[1] = rgb2hex(css.getPropertyValue("background-color"));
  }
  return styleObj;
};
function appGlobalScript () {
  font.cssAppend();
  font.cssLoaded(() => {
    window['sgnw'] = true;
    window.dispatchEvent(event);
  });
}

export { appGlobalScript as a, rgb2hex as b, cssValues as c, rgba2hex as r };
