/*!
 * The Sutton SignWriting Web Components
 */
import { e as createCommonjsModule, f as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-c68e7108.js';

var fsw = createCommonjsModule(function (module, exports) {
/**
* Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
* Author: Steve Slevinski  (https://SteveSlevinski.me)
* fsw.js is released under the MIT License.
*/

(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? factory(exports) :
  typeof undefined === 'function' && undefined.amd ? undefined(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ssw = global.ssw || {}, global.ssw.fsw = {})));
})(commonjsGlobal, (function (exports) { 'use strict';

  /**
   * Object of regular expressions for FSW strings
   * 
   * @alias fsw.re
   * @property {string} symbol - regular expressions for a symbol
   * @property {string} coord - regular expressions for a coordinate
   * @property {string} sort - regular expressions for the sorting marker
   * @property {string} box - regular expression for a signbox marker
   * @property {string} prefix - regular expression for a sorting marker followed by one or more symbols
   * @property {string} spatial - regular expression for a symbol followed by a coordinate
   * @property {string} signbox - regular expression for a signbox marker, max coordinate and zero or more spatial symbols
   * @property {string} sign - regular expression for an optional prefix followed by a signbox
   * @property {string} sortable - regular expression for a mandatory prefix followed by a signbox
   */
  let re$1 = {
    'symbol': 'S[123][0-9a-f]{2}[0-5][0-9a-f]',
    'coord': '[0-9]{3}x[0-9]{3}',
    'sort': 'A',
    'box': '[BLMR]'
  };
  re$1.prefix = `(?:${re$1.sort}(?:${re$1.symbol})+)`;
  re$1.spatial = `${re$1.symbol}${re$1.coord}`;
  re$1.signbox = `${re$1.box}${re$1.coord}(?:${re$1.spatial})*`;
  re$1.sign = `${re$1.prefix}?${re$1.signbox}`;
  re$1.sortable = `${re$1.prefix}${re$1.signbox}`;

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


  const parse$1 = styleString => {
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

  /** The convert module contains functions to convert between Formal SignWriitng in ASCII (FSW) and SignWriting in Unicode (SWU) characters, along with other types of data.
   * [Characters set definitions](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html#name-characters)
   * @module convert
   */
  /**
   * Function to convert an FSW coordinate string to an array of x,y integers
   * @function convert.fsw2coord
   * @param {string} fswCoord - An FSW coordinate string
   * @returns {number[]} Array of x,y integers
   * @example
   * convert.fsw2coord('500x500')
   * 
   * return [500, 500]
   */


  const fsw2coord = fswCoord => fswCoord.split('x').map(num => parseInt(num));

  const parse = {
    /**
     * Function to parse an fsw symbol with optional coordinate and style string
     * @function fsw.parse.symbol
     * @param {string} fswSym - an fsw symbol
     * @returns {object} elements of fsw symbol
     * @example
     * fsw.parse.symbol('S10000500x500-C')
     * 
     * return {
     *  'symbol': 'S10000',
     *  'coord': [500, 500],
     *  'style': '-C'
     * }
     */
    symbol: fswSym => {
      const regex = `^(${re$1.symbol})(${re$1.coord})?(${re.full})?`;
      const symbol = typeof fswSym === 'string' ? fswSym.match(new RegExp(regex)) : undefined;
      return {
        'symbol': symbol ? symbol[1] : undefined,
        'coord': symbol && symbol[2] ? fsw2coord(symbol[2]) : undefined,
        'style': symbol ? symbol[3] : undefined
      };
    },

    /**
     * Function to parse an fsw sign with style string
     * @function fsw.parse.sign
     * @param {string} fswSign - an fsw sign
     * @returns {object} elements of fsw sign
     * @example
     * fsw.parse.sign('AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475-C')
     * 
     * return {
     *  sequence: ['S10011', 'S10019', 'S2e704', 'S2e748'],
     *  box: 'M',
     *  max: [525, 535],
     *  spatials: [
     *    {
     *      symbol: 'S2e748',
     *      coord: [483, 510]
     *    },
     *    {
     *      symbol: 'S10011',
     *      coord: [501, 466]
     *    },
     *    {
     *      symbol: 'S2e704',
     *      coord: [510, 500]
     *    },
     *    {
     *      symbol: 'S10019',
     *      coord: [476, 475]
     *    }
     *  ],
     *  style: '-C'
     * }
     */
    sign: fswSign => {
      const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re.full})?`;
      const sign = typeof fswSign === 'string' ? fswSign.match(new RegExp(regex)) : undefined;

      if (sign) {
        return {
          'sequence': sign[1] ? sign[1].slice(1).match(/.{6}/g) : undefined,
          'box': sign[2][0],
          'max': fsw2coord(sign[2].slice(1, 8)),
          'spatials': sign[2].length < 9 ? undefined : sign[2].slice(8).match(/(.{13})/g).map(m => {
            return {
              symbol: m.slice(0, 6),
              coord: [parseInt(m.slice(6, 9)), parseInt(m.slice(10, 13))]
            };
          }),
          'style': sign[3]
        };
      } else {
        return {};
      }
    },

    /**
     * Function to parse an fsw text
     * @function fsw.parse.text
     * @param {string} fswText - an fsw text
     * @returns {array} fsw signs and punctuations
     * @example
     * fsw.parse.text('AS14c20S27106M518x529S14c20481x471S27106503x489 AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468 S38800464x496')
     * 
     * return [
     *  'AS14c20S27106M518x529S14c20481x471S27106503x489',
     *  'AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468',
     *  'S38800464x496'
     * ]
     */
    text: fswText => {
      if (typeof fswText !== 'string') return [];
      const regex = `(${re$1.sign}(${re.full})?|${re$1.spatial}(${re.full})?)`;
      const matches = fswText.match(new RegExp(regex, 'g'));
      return matches ? [...matches] : [];
    }
  };

  const compose = {
    /**
     * Function to compose an fsw symbol with optional coordinate and style string
     * @function fsw.compose.symbol
     * @param {object} fswSymObject - an fsw symbol object
     * @param {string} fswSymObject.symbol - an fsw symbol key
     * @param {number[]} fswSymObject.coord - top-left coordinate of symbol
     * @param {string} fswSymObject.style - a style string for custom appearance
     * @returns {string} an fsw symbol string
     * @example
     * fsw.compose.symbol({
     *  'symbol': 'S10000',
     *  'coord': [480, 480],
     *  'style': '-C'
     * })
     * 
     * return 'S10000480x480-C'
     */
    symbol: fswSymObject => {
      if (typeof fswSymObject.symbol === 'string') {
        const symbol = (fswSymObject.symbol.match(re$1.symbol) || [''])[0];

        if (symbol) {
          const x = (fswSymObject.coord && fswSymObject.coord[0] || '').toString();
          const y = (fswSymObject.coord && fswSymObject.coord[1] || '').toString();
          const coord = ((x + 'x' + y).match(re$1.coord) || [''])[0] || '';
          const styleStr = typeof fswSymObject.style === 'string' && (fswSymObject.style.match(re.full) || [''])[0] || '';
          return symbol + coord + styleStr;
        }
      }

      return undefined;
    },

    /**
     * Function to compose an fsw sign with style string
     * @function fsw.compose.sign
     * @param {object} fswSymObject - an fsw sign object
     * @param {string[]} fswSignObject.sequence - an ordered array of symbols
     * @param {string} fswSignObject.box - a choice BLMR: horizontal Box, Left, Middle, and Right lane
     * @param {number[]} fswSignObject.max - max bottom-right coordinate of the signbox space
     * @param {{symbol:string,coord:number[]}[]} fswSignObject.spatials - array of symbols with top-left coordinate placement
     * @param {string} fswSignObject.style - a style string for custom appearance
     * @returns {string} an fsw sign string
     * @example
     * fsw.compose.sign({
     *  sequence: ['S10011', 'S10019', 'S2e704', 'S2e748'],
     *  box: 'M',
     *  max: [525, 535],
     *  spatials: [
     *    {
     *      symbol: 'S2e748',
     *      coord: [483, 510]
     *    },
     *    {
     *      symbol: 'S10011',
     *      coord: [501, 466]
     *    },
     *    {
     *      symbol: 'S2e704',
     *      coord: [510, 500]
     *    },
     *    {
     *      symbol: 'S10019',
     *      coord: [476, 475]
     *    }
     *  ],
     *  style: '-C'
     * })
     * 
     * return 'AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475-C'
     */
    sign: fswSignObject => {
      let box = typeof fswSignObject.box !== 'string' ? 'M' : (fswSignObject.box + 'M').match(re$1.box);
      const x = (fswSignObject.max && fswSignObject.max[0] || '').toString();
      const y = (fswSignObject.max && fswSignObject.max[1] || '').toString();
      const max = ((x + 'x' + y).match(re$1.coord) || [''])[0] || '';
      if (!max) return undefined;
      let prefix = '';

      if (fswSignObject.sequence && Array.isArray(fswSignObject.sequence)) {
        prefix = fswSignObject.sequence.map(key => (key.match(re$1.symbol) || [''])[0]).join('');
        prefix = prefix ? 'A' + prefix : '';
      }

      let signbox = '';

      if (fswSignObject.spatials && Array.isArray(fswSignObject.spatials)) {
        signbox = fswSignObject.spatials.map(spatial => {
          if (typeof spatial.symbol === 'string') {
            const symbol = (spatial.symbol.match(re$1.symbol) || [''])[0];

            if (symbol) {
              const x = (spatial.coord && spatial.coord[0] || '').toString();
              const y = (spatial.coord && spatial.coord[1] || '').toString();
              const coord = ((x + 'x' + y).match(re$1.coord) || [''])[0] || '';

              if (coord) {
                return symbol + coord;
              }
            }
          }

          return '';
        }).join('');
      }

      const styleStr = typeof fswSignObject.style === 'string' && (fswSignObject.style.match(re.full) || [''])[0] || '';
      return prefix + box + max + signbox + styleStr;
    }
  };

  /**
   * Function to gather sizing information about an fsw sign or symbol
   * @function fsw.info
   * @param {string} fsw - an fsw sign or symbol
   * @returns {object} information about the fsw string
   * @example
   * fsw.info('AS14c20S27106L518x529S14c20481x471S27106503x489-P10Z2')
   * 
   * return {
   *   minX: 481,
   *   minY: 471,
   *   width: 37,
   *   height: 58,
   *   zoom: 2,
   *   padding: 10,
   *   segment: 'sign',
   *   lane: -1
   * }
   */

  const info = fsw => {
    let lanes = {
      "B": 0,
      "L": -1,
      "M": 0,
      "R": 1
    };
    let parsed = parse.sign(fsw);
    let width, height, segment, x1, x2, y1, y2, lane;

    if (parsed.spatials) {
      x1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[0]));
      x2 = parsed.max[0];
      width = x2 - x1;
      y1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[1]));
      y2 = parsed.max[1];
      height = y2 - y1;
      segment = 'sign';
      lane = parsed.box;
    } else {
      parsed = parse.symbol(fsw);
      lane = "M";

      if (parsed.coord) {
        x1 = parsed.coord[0];
        width = (500 - x1) * 2;
        y1 = parsed.coord[1];
        height = (500 - y1) * 2;
        segment = 'symbol';
      } else {
        x1 = 490;
        width = 20;
        y1 = 490;
        height = 20;
        segment = 'none';
      }
    }

    let style = parse$1(parsed.style);
    let zoom = style.zoom || 1;
    let padding = style.padding || 0;
    return {
      minX: x1,
      minY: y1,
      width: width,
      height: height,
      segment: segment,
      lane: lanes[lane],
      padding: padding,
      zoom: zoom
    };
  };

  const columnDefaults = {
    'height': 500,
    'width': 150,
    'offset': 50,
    'pad': 20,
    'margin': 5,
    'dynamic': false,
    'background': undefined,
    'punctuation': {
      'spacing': true,
      'pad': 30,
      'pull': true
    },
    'style': {
      'detail': ['black', 'white'],
      'zoom': 1
    }
  };
  /**
   * Function to an object of column options with default values
   * 
   * @function fsw.columnDefaultsMerge
   * @param {ColumnOptions} options - object of column options
   * @returns {ColumnOptions} object of column options merged with column defaults
   * @example
   * fsw.columnDefaultsMerge({height: 500,width:150})
   * 
   * return {
   *   "height": 500,
   *   "width": 150,
   *   "offset": 50,
   *   "pad": 20,
   *   "margin": 5,
   *   "dynamic": false,
   *   "punctuation": {
   *     "spacing": true,
   *     "pad": 30,
   *     "pull": true
   *   },
   *   "style": {
   *     "detail": [
   *       "black",
   *       "white"
   *     ],
   *     "zoom": 1
   *   }
   * }
   */

  const columnDefaultsMerge = options => {
    if (typeof options !== 'object') options = {};
    return { ...columnDefaults,
      ...options,
      punctuation: { ...columnDefaults.punctuation,
        ...options.punctuation
      },
      style: { ...columnDefaults.style,
        ...options.style
      }
    };
  };
  /**
   * Function to transform an FSW text to an array of columns
   * 
   * @function fsw.columns
   * @param {string} fswText - FSW text of signs and punctuation
   * @param {ColumnOptions} options - object of column options
   * @returns {{options:ColumnOptions,widths:number[],columns:ColumnData}} object of column options, widths array, and column data
   * @example
   * fsw.columns('AS14c20S27106M518x529S14c20481x471S27106503x489 AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468 S38800464x496', {height: 500,width:150})
   * 
   * return {
   *   "options": {
   *     "height": 500,
   *     "width": 150,
   *     "offset": 50,
   *     "pad": 20,
   *     "margin": 5,
   *     "dynamic": false,
   *     "punctuation": {
   *       "spacing": true,
   *       "pad": 30,
   *       "pull": true
   *     },
   *     "style": {
   *       "detail": [
   *         "black",
   *         "white"
   *       ],
   *       "zoom": 1
   *     }
   *   },
   *   "widths": [
   *     150
   *   ],
   *   "columns": [
   *     [
   *       {
   *         "x": 56,
   *         "y": 20,
   *         "minX": 481,
   *         "minY": 471,
   *         "width": 37,
   *         "height": 58,
   *         "lane": 0,
   *         "padding": 0,
   *         "segment": "sign",
   *         "text": "AS14c20S27106M518x529S14c20481x471S27106503x489",
   *         "zoom": 1
   *       },
   *       {
   *         "x": 57,
   *         "y": 118,
   *         "minX": 482,
   *         "minY": 468,
   *         "width": 36,
   *         "height": 65,
   *         "lane": 0,
   *         "padding": 0,
   *         "segment": "sign",
   *         "text": "AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468",
   *         "zoom": 1
   *       },
   *       {
   *         "x": 39,
   *         "y": 203,
   *         "minX": 464,
   *         "minY": 496,
   *         "width": 72,
   *         "height": 8,
   *         "lane": 0,
   *         "padding": 0,
   *         "segment": "symbol",
   *         "text": "S38800464x496",
   *         "zoom": 1
   *       }
   *     ]
   *   ]
   * }
   */


  const columns = (fswText, options) => {
    if (typeof fswText !== 'string') return {};
    const values = columnDefaultsMerge(options);
    let input = parse.text(fswText);
    let cursor = 0;
    let cols = [];
    let col = [];
    let plus = 0;
    let center = parseInt(values.width / 2);
    let maxHeight = values.height - values.margin;
    let pullable = true;
    let finalize = false;

    for (let val of input) {
      let informed = info(val);
      cursor += plus;

      if (values.punctuation.spacing) {
        cursor += informed.segment == 'sign' ? values.pad : 0;
      } else {
        cursor += values.pad;
      }

      finalize = cursor + informed.height > maxHeight;

      if (finalize && informed.segment == 'symbol' && values.punctuation.pull && pullable) {
        finalize = false;
        pullable = false;
      }

      if (col.length == 0) {
        finalize = false;
      }

      if (finalize) {
        cursor = values.pad;
        cols.push(col);
        col = [];
        pullable = true;
      }

      col.push(Object.assign(informed, {
        x: center + values.offset * informed.lane - (500 - informed.minX) * informed.zoom * values.style.zoom,
        y: cursor,
        text: val
      }));
      cursor += informed.height * informed.zoom * values.style.zoom;

      if (values.punctuation.spacing) {
        plus = informed.segment == 'sign' ? values.pad : values.punctuation.pad;
      } else {
        plus = values.pad;
      }
    }

    if (col.length) {
      cols.push(col);
    } // over height issue when pulling punctuation


    if (values.punctuation.pull) {
      for (let col of cols) {
        let last = col[col.length - 1];
        let diff = last.y + last.height - (values.height - values.margin);

        if (diff > 0) {
          let adj = parseInt(diff / col.length) + 1;

          for (let i in col) {
            col[i].y -= adj * i + adj;
          }
        }
      }
    } // contract, expand, adjust


    let widths = [];

    for (let col of cols) {
      let min = [center - values.offset - values.pad];
      let max = [center + values.offset + values.pad];

      for (let item of col) {
        min.push(item.x - values.pad);
        max.push(item.x + item.width + values.pad);
      }

      min = Math.min(...min);
      max = Math.max(...max);
      let width = values.width;
      let adj = 0;

      if (!values.dynamic) {
        adj = center - parseInt((min + max) / 2);
      } else {
        width = max - min;
        adj = -min;
      }

      for (let item of col) {
        item.x += adj;
      }

      widths.push(width);
    }

    return {
      'options': values,
      'widths': widths,
      'columns': cols
    };
  };

  /**
   * Array of numbers for kinds of symbols: writing, location, and punctuation.
   * @alias fsw.kind
   * @type {array}
   */

  const kind = [0x100, 0x37f, 0x387];
  /**
   * Array of numbers for categories of symbols: hand, movement, dynamics, head, trunk & limb, location, and punctuation.
   * @alias fsw.category
   * @type {array}
   */

  const category = [0x100, 0x205, 0x2f7, 0x2ff, 0x36d, 0x37f, 0x387];
  /**
   * Array of numbers for the 30 symbol groups.
   * @alias fsw.group
   * @type {array}
   */

  const group = [0x100, 0x10e, 0x11e, 0x144, 0x14c, 0x186, 0x1a4, 0x1ba, 0x1cd, 0x1f5, 0x205, 0x216, 0x22a, 0x255, 0x265, 0x288, 0x2a6, 0x2b7, 0x2d5, 0x2e3, 0x2f7, 0x2ff, 0x30a, 0x32a, 0x33b, 0x359, 0x36d, 0x376, 0x37f, 0x387];
  /**
   * Object of symbol ranges with starting and ending numbers.
   * 
   *   { all, writing, hand, movement, dynamic, head, hcenter, vcenter, trunk, limb, location, punctuation }
   * @alias fsw.ranges
   * @type {object}
   */

  const ranges = {
    'all': [0x100, 0x38b],
    'writing': [0x100, 0x37e],
    'hand': [0x100, 0x204],
    'movement': [0x205, 0x2f6],
    'dynamic': [0x2f7, 0x2fe],
    'head': [0x2ff, 0x36c],
    'hcenter': [0x2ff, 0x36c],
    'vcenter': [0x2ff, 0x375],
    'trunk': [0x36d, 0x375],
    'limb': [0x376, 0x37e],
    'location': [0x37f, 0x386],
    'punctuation': [0x387, 0x38b]
  };
  /**
   * Function to test if symbol is of a certain type.
   * @function fsw.isType
   * @param {string} key - an FSW symbol key
   * @param {string} type - the name of a symbol range
   * @returns {boolean} is symbol of specified type
   * @example
   * fsw.isType('S10000', 'hand')
   * 
   * return true
   */

  const isType = (key, type) => {
    const parsed = parse.symbol(key);

    if (parsed.symbol) {
      const dec = parseInt(parsed.symbol.slice(1, 4), 16);
      const range = ranges[type];

      if (range) {
        return range[0] <= dec && range[1] >= dec;
      }
    }

    return false;
  };

  /**
   * Array of colors associated with the seven symbol categories.
   * @alias fsw.colors
   * @type {array}
   */

  const colors = ['#0000CC', '#CC0000', '#FF0099', '#006600', '#000000', '#884411', '#FF9900'];
  /**
   * Function that returns the standardized color for a symbol.
   * @function fsw.colorize
   * @param {string} key - an FSW symbol key
   * @returns {string} name of standardized color for symbol
   * @example
   * fsw.colorize('S10000')
   * 
   * return '#0000CC'
   */

  const colorize = key => {
    const parsed = parse.symbol(key);
    let color = '#000000';

    if (parsed.symbol) {
      const dec = parseInt(parsed.symbol.slice(1, 4), 16);
      const index = category.findIndex(val => val > dec);
      color = colors[index < 0 ? 6 : index - 1];
    }

    return color;
  };

  exports.category = category;
  exports.colorize = colorize;
  exports.colors = colors;
  exports.columnDefaults = columnDefaults;
  exports.columnDefaultsMerge = columnDefaultsMerge;
  exports.columns = columns;
  exports.compose = compose;
  exports.group = group;
  exports.info = info;
  exports.isType = isType;
  exports.kind = kind;
  exports.parse = parse;
  exports.ranges = ranges;
  exports.re = re$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/* support ongoing development on https://patreon.com/signwriting */
});

const fsw$1 = /*@__PURE__*/getDefaultExportFromCjs(fsw);

export { fsw as f };
