/*!
 * The Sutton SignWriting Web Components
 */
import { e as createCommonjsModule, f as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-c68e7108.js';

var style = createCommonjsModule(function (module, exports) {
/**
* Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
* Author: Steve Slevinski  (https://SteveSlevinski.me)
* style.js is released under the MIT License.
*/

(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? factory(exports) :
  typeof undefined === 'function' && undefined.amd ? undefined(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ssw = global.ssw || {}, global.ssw.style = {})));
})(commonjsGlobal, (function (exports) { 'use strict';

  /**
   * Object of regular expressions for style strings
   * 
   * @alias style.re
   * @type {object}
   * @property {string} colorize - regular expression for colorize section
   * @property {string} colorhex - regular expression for color hex values with 3 or 6 characters
   * @property {string} colorname - regular expression for css color name
   * @property {string} padding - regular expression for padding section
   * @property {string} zoom - regular expression for zoom section
   * @property {string} classbase - regular expression for class name definition
   * @property {string} id - regular expression for id definition
   * @property {string} colorbase - regular expression for color hex or color name
   * @property {string} color - regular expression for single color entry
   * @property {string} colors - regular expression for double color entry
   * @property {string} background - regular expression for background section
   * @property {string} detail - regular expression for color details for line and optional fill
   * @property {string} detailsym - regular expression for color details for individual symbols
   * @property {string} classes - regular expression for one or more class names
   * @property {string} full - full regular expression for style string
   */
  let re = {
    'colorize': 'C',
    'colorhex': '(?:[0-9a-fA-F]{3}){1,2}',
    'colorname': '[a-zA-Z]+',
    'padding': 'P[0-9]{2}',
    'zoom': 'Z(?:[0-9]+(?:\\.[0-9]+)?|x)',
    'classbase': '-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}',
    'id': '[a-zA-Z][_a-zA-Z0-9-]{0,100}'
  };
  re.colorbase = `(?:${re.colorhex}|${re.colorname})`;
  re.color = `_${re.colorbase}_`;
  re.colors = `_${re.colorbase}(?:,${re.colorbase})?_`;
  re.background = `G${re.color}`;
  re.detail = `D${re.colors}`;
  re.detailsym = `D[0-9]{2}${re.colors}`;
  re.classes = `${re.classbase}(?: ${re.classbase})*`;
  re.full = `-(${re.colorize})?(${re.padding})?(${re.background})?(${re.detail})?(${re.zoom})?(?:-((?:${re.detailsym})*))?(?:-(${re.classes})?!(?:(${re.id})!)?)?`;

  const prefixColor = color => {
    const regex = new RegExp(`^${re.colorhex}$`);
    return (regex.test(color) ? '#' : '') + color;
  };

  const definedProps = obj => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));
  /**
   * Function to parse style string to object
   * @function style.parse
   * @param {string} styleString - a style string
   * @returns {StyleObject} elements of style string
   * @example
   * style.parse('-CP10G_blue_D_red,Cyan_')
   * 
   * return {
   *  'colorize': true,
   *  'padding': 10,
   *  'background': 'blue',
   *  'detail': ['red', 'Cyan']
   * }
   */


  const parse = styleString => {
    const regex = `^${re.full}`;
    const m = (typeof styleString === 'string' ? styleString.match(new RegExp(regex)) : []) || [];
    return definedProps({
      'colorize': !m[1] ? undefined : !!m[1],
      'padding': !m[2] ? undefined : parseInt(m[2].slice(1)),
      'background': !m[3] ? undefined : prefixColor(m[3].slice(2, -1)),
      'detail': !m[4] ? undefined : m[4].slice(2, -1).split(',').map(prefixColor),
      'zoom': !m[5] ? undefined : m[5] === 'Zx' ? 'x' : parseFloat(m[5].slice(1)),
      'detailsym': !m[6] ? undefined : m[6].match(new RegExp(re.detailsym, 'g')).map(val => {
        const parts = val.split('_');
        const detail = parts[1].split(',').map(prefixColor);
        return {
          'index': parseInt(parts[0].slice(1)),
          'detail': detail
        };
      }),
      'classes': !m[7] ? undefined : m[7],
      'id': !m[8] ? undefined : m[8]
    });
  };

  /**
   * Function to compose style string from object
   * @function style.compose
   * @param {StyleObject} styleObject - an object of style options
   * @returns {string} style string 
   * @example 
   * style.compose({
   *  'colorize': true,
   *  'padding': 10,
   *  'background': 'blue',
   *  'detail': ['red', 'Cyan'],
   *  'zoom': 1.1,
   *  'detailsym': [
   *    {
   *      'index': 1,
   *      'detail': ['#ff00ff']
   *    },
   *    {
   *      'index': 2,
   *      'detail': ['yellow', 'green']
   *    }
   *  ],
   *  'classes': 'primary blinking',
   *  'id': 'cursor'
   * })
   *
   * return '-CP10G_blue_D_red,Cyan_Z1.1-D01_ff00ff_D02_yellow,green_-primary blinking!cursor!'
   */

  const compose = styleObject => {
    if (typeof styleObject !== 'object' || styleObject === null) return undefined; // three sections

    let style1 = '-';
    style1 += !styleObject.colorize ? '' : 'C';
    const padding = parseInt(styleObject.padding);
    style1 += !padding || padding <= 0 || padding > 99 ? '' : 'P' + (padding > 9 ? padding : '0' + padding);
    const background = !styleObject.background || !(typeof styleObject.background === 'string') ? undefined : styleObject.background.match(re.colorbase)[0];
    style1 += !background ? '' : 'G_' + background + '_';
    const detail1 = !styleObject.detail || !styleObject.detail[0] || !(typeof styleObject.detail[0] === 'string') ? undefined : styleObject.detail[0].match(re.colorbase)[0];
    const detail2 = !styleObject.detail || !styleObject.detail[1] || !(typeof styleObject.detail[1] === 'string') ? undefined : styleObject.detail[1].match(re.colorbase)[0];

    if (detail1) {
      style1 += 'D_' + detail1;

      if (detail2) {
        style1 += ',' + detail2;
      }

      style1 += '_';
    }

    const zoom = styleObject.zoom === 'x' ? 'x' : parseFloat(styleObject.zoom);
    style1 += !zoom || zoom <= 0 ? '' : 'Z' + zoom;
    let style2 = '';
    const detailsym = !styleObject.detailsym || !Array.isArray(styleObject.detailsym) ? [] : styleObject.detailsym.map(styleObject => {
      const index = parseInt(styleObject.index);
      if (!index || index <= 0 || index > 99) return '';
      let style = 'D' + (index > 9 ? index : '0' + index);
      const detail1 = !styleObject.detail || !styleObject.detail[0] ? undefined : styleObject.detail[0].match(re.colorbase)[0];
      const detail2 = !styleObject.detail || !styleObject.detail[1] ? undefined : styleObject.detail[1].match(re.colorbase)[0];

      if (detail1) {
        style += '_' + detail1;

        if (detail2) {
          style += ',' + detail2;
        }

        style += '_';
      }

      return style;
    });
    style2 += detailsym.join('');
    let style3 = '';
    const classes = !styleObject.classes || !(typeof styleObject.classes === 'string') ? undefined : styleObject.classes.match(re.classes)[0];
    style3 += !classes ? '' : classes;
    const id = !styleObject.id || !(typeof styleObject.id === 'string') ? undefined : styleObject.id.match(re.id)[0];
    style3 += classes || id ? '!' : '';
    style3 += !id ? '' : id + '!';
    return style1 + (style2 || style3 ? '-' + style2 : '') + (style3 ? '-' + style3 : '');
  };

  exports.compose = compose;
  exports.parse = parse;
  exports.re = re;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/* support ongoing development on https://patreon.com/signwriting */
});

const style$1 = /*@__PURE__*/getDefaultExportFromCjs(style);

export { style as s };
