/*!
 * The Sutton SignWriting Web Components
 */
import { e as createCommonjsModule, f as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-c68e7108.js';

var swu$2 = createCommonjsModule(function (module, exports) {
/**
* Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
* Author: Steve Slevinski  (https://SteveSlevinski.me)
* swu.js is released under the MIT License.
*/

(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? factory(exports) :
  typeof undefined === 'function' && undefined.amd ? undefined(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ssw = global.ssw || {}, global.ssw.swu = {})));
})(commonjsGlobal, (function (exports) { 'use strict';

  /**
   * Object of regular expressions for SWU strings in UTF-16
   * 
   * @alias swu.re
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
    'symbol': '(?:(?:\uD8C0[\uDC01-\uDFFF])|(?:[\uD8C1-\uD8FC][\uDC00-\uDFFF])|(?:\uD8FD[\uDC00-\uDC80]))',
    'coord': '(?:\uD836[\uDC0C-\uDDFF]){2}',
    'sort': '\uD836\uDC00',
    'box': '\uD836[\uDC01-\uDC04]'
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
   * Function to convert an SWU number character to an integer
   * @function convert.swu2num
   * @param {string} swuNum - SWU number character
   * @returns {number} Integer value for number
   * @example
   * convert.swu2num('𝤆')
   * 
   * return 500
   */


  const swu2num = swuNum => parseInt(swuNum.codePointAt(0)) - 0x1D80C + 250;
  /**
   * Function to convert a number to an SWU number character
   * @function convert.num2swu
   * @param {number} num - Integer value for number
   * @returns {string} SWU number character
   * @example
   * convert.num2swu(500)
   * 
   * return '𝤆'
   */


  const num2swu = num => String.fromCodePoint(0x1D80C + parseInt(num) - 250);
  /**
   * Function to convert two SWU number characters to an array of x,y integers
   * @function convert.swu2coord
   * @param {string} swuCoord - Two SWU number character
   * @returns {number[]} Array of x,y integers
   * @example
   * convert.swu2coord('𝤆𝤆')
   * 
   * return [500, 500]
   */


  const swu2coord = swuCoord => [swu2num(swuCoord.slice(0, 2)), swu2num(swuCoord.slice(2, 4))];
  /**
   * Function to convert an array of x,y integers to two SWU number characters
   * @function convert.coord2swu
   * @param {number[]} coord - Array of x,y integers
   * @returns {string} Two SWU number character
   * @example
   * convert.coord2swu([500, 500])
   * 
   * return '𝤆𝤆'
   */


  const coord2swu = coord => coord.map(num => num2swu(num)).join('');
  /**
   * Function to convert an SWU symbol character to a code point on plane 4
   * @function convert.swu2code
   * @param {string} swuSym - SWU symbol character
   * @returns {number} Code point on plane 4
   * @example
   * convert.swu2code('񀀁')
   * 
   * return 0x40001
   */


  const swu2code = swuSym => parseInt(swuSym.codePointAt(0));

  const parse = {
    /**
     * Function to parse an swu symbol with optional coordinate and style string
     * @function swu.parse.symbol
     * @param {string} swuSym - an swu symbol
     * @returns {object} elements of swu symbol
     * @example
     * swu.parse.symbol('񀀁𝤆𝤆-C')
     * 
     * return {
     *  'symbol': '񀀁',
     *  'coord': [500, 500],
     *  'style': '-C'
     * }
     */
    symbol: swuSym => {
      const regex = `^(${re$1.symbol})(${re$1.coord})?(${re.full})?`;
      const symbol = typeof swuSym === 'string' ? swuSym.match(new RegExp(regex)) : undefined;
      return {
        'symbol': symbol ? symbol[1] : undefined,
        'coord': symbol && symbol[2] ? swu2coord(symbol[2]) : undefined,
        'style': symbol ? symbol[3] : undefined
      };
    },

    /**
      * Function to parse an swu sign with style string
      * @function swu.parse.sign
      * @param {string} swuSign - an swu sign
      * @returns {object} elements of swu sign
      * @example
      * swu.parse.sign('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭-C')
      * 
      * return {
      *  sequence: ['񀀒','񀀚','񋚥','񋛩'],
      *  box: '𝠃',
      *  max: [525, 535],
      *  spatials: [
      *    {
      *      symbol: '񋛩',
      *      coord: [483, 510]
      *    },
      *    {
      *      symbol: '񀀒',
      *      coord: [501, 466]
      *    },
      *    {
      *      symbol: '񋚥',
      *      coord: [510, 500]
      *    },
      *    {
      *      symbol: '񀀚',
      *      coord: [476, 475]
      *    }
      *  ],
      *  style: '-C'
      * }
      */
    sign: swuSign => {
      const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re.full})?`;
      const sign = typeof swuSign === 'string' ? swuSign.match(new RegExp(regex)) : undefined;

      if (sign) {
        return {
          'sequence': sign[1] ? sign[1].slice(2).match(/.{2}/g) : undefined,
          'box': sign[2].slice(0, 2),
          'max': swu2coord(sign[2].slice(2, 6)),
          'spatials': sign[2].length < 7 ? undefined : sign[2].slice(6).match(/(.{6})/g).map(m => {
            return {
              symbol: m.slice(0, 2),
              coord: swu2coord(m.slice(2))
            };
          }),
          'style': sign[3]
        };
      } else {
        return {};
      }
    },

    /**
     * Function to parse an swu text
     * @function swu.parse.text
     * @param {string} swuText - an swu text
     * @returns {array} swu signs and punctuations
     * @example
     * swu.parse.text('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂')
     * 
     * return [
     *  '𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻',
     *  '𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦',
     *  '񏌁𝣢𝤂'
     * ]
     */
    text: swuText => {
      if (typeof swuText !== 'string') return [];
      const regex = `(${re$1.sign}(${re.full})?|${re$1.spatial}(${re.full})?)`;
      const matches = swuText.match(new RegExp(regex, 'g'));
      return matches ? [...matches] : [];
    }
  };
  /**
   * Function to encode SWU characters using the UTF-16 escape format.
   * @function swu.encode
   * @param {string} swu - SWU characters
   * @returns {string} UTF-16 escape format
   * @example
   * swu.encode('񀀁𝤆𝤆')
   * 
   * return '\\uD8C0\\uDC01\\uD836\\uDD06\\uD836\\uDD06'
   */

  const encode = text => text.replace(/[\u007F-\uFFFF]/g, function (chr) {
    return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4).toUpperCase();
  });
  /**
   * Function to decode UTF-16 escape format to SWU characters.
   * @function swu.decode
   * @param {string} encoded - UTF-16 escape format
   * @returns {string} SWU characters
   * @example
   * swu.decode('\\uD8C0\\uDC01\\uD836\\uDD06\\uD836\\uDD06')
   * 
   * return '񀀁𝤆𝤆'
   */


  const decode = encoded => encoded.replace(/\\u([0-9A-F]{4})/g, function (match, chr) {
    return String.fromCharCode(parseInt(chr, 16));
  });
  /**
   * Function to decompose an SWU character into UTF-16 surrogate pairs.
   * @function swu.pair
   * @param {string} swuChar - an SWU character
   * @returns {string[]} an array of UTF-16 surrogate pairs
   * @example
   * swu.pair('񀀁')
   * 
   * return ['D8C0', 'DC01']
   */


  const pair = swuChar => [swuChar.charCodeAt(0).toString(16).toUpperCase(), swuChar.charCodeAt(1).toString(16).toUpperCase()];

  const compose = {
    /**
     * Function to compose an swu symbol with optional coordinate and style string
     * @function swu.compose.symbol
     * @param {object} swuSymObject - an swu symbol object
     * @param {string} swuSymObject.symbol - an swu symbol key
     * @param {number[]} swuSymObject.coord - top-left coordinate of symbol with 500,500 center
     * @param {string} swuSymObject.style - a style string for custom appearance
     * @returns {string} an swu symbol string
     * @example
     * swu.compose.symbol({
     *  'symbol': '񀀁',
     *  'coord': [500, 500],
     *  'style': '-C'
     * })
     * 
     * return '񀀁𝤆𝤆-C'
     */
    symbol: swuSymObject => {
      if (typeof swuSymObject !== 'object' || swuSymObject === null) return undefined;

      if (typeof swuSymObject.symbol === 'string') {
        const symbol = (swuSymObject.symbol.match(re$1.symbol) || [''])[0];

        if (symbol) {
          const x = swuSymObject.coord && swuSymObject.coord[0] || '';
          const y = swuSymObject.coord && swuSymObject.coord[1] || '';
          const coord = x && y ? coord2swu([x, y]) : '';
          const styleStr = typeof swuSymObject.style === 'string' && (swuSymObject.style.match(re.full) || [''])[0] || '';
          return symbol + coord + styleStr;
        }
      }

      return undefined;
    },

    /**
     * Function to compose an swu sign with style string
     * @function swu.compose.sign
     * @param {object} swuSignObject - an swu sign object
     * @param {string[]} swuSignObject.sequence - an ordered array of symbols
     * @param {string} swuSignObject.box - a choice of signbox marker: horizontal Box, Left, Middle, and Right lane
     * @param {number[]} swuSignObject.max - max bottom-right coordinate of the signbox space
     * @param {{symbol:string,coord:number[]}[]} swuSignObject.spatials - array of symbols with top-left coordinate placement
     * @param {string} swuSignObject.style - a style string for custom appearance
     * @returns {string} an swu sign string
     * @example
     * swu.compose.sign({
     *  sequence: ['񀀒','񀀚','񋚥','񋛩'],
     *  box: '𝠃',
     *  max: [525, 535],
     *  spatials: [
     *    {
     *      symbol: '񋛩',
     *      coord: [483, 510]
     *    },
     *    {
     *      symbol: '񀀒',
     *      coord: [501, 466]
     *    },
     *    {
     *      symbol: '񋚥',
     *      coord: [510, 500]
     *    },
     *    {
     *      symbol: '񀀚',
     *      coord: [476, 475]
     *    }
     *  ],
     *  style: '-C'
     * })
     * 
     * return '𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭-C'
     */
    sign: swuSignObject => {
      if (typeof swuSignObject !== 'object' || swuSignObject === null) return undefined;
      let box = typeof swuSignObject.box !== 'string' ? '𝠃' : (swuSignObject.box + '𝠃').match(re$1.box);
      const x = swuSignObject.max && swuSignObject.max[0] || '';
      const y = swuSignObject.max && swuSignObject.max[1] || '';
      const max = x && y ? coord2swu([x, y]) : undefined;
      if (!max) return undefined;
      let prefix = '';

      if (swuSignObject.sequence && Array.isArray(swuSignObject.sequence)) {
        prefix = swuSignObject.sequence.map(key => (key.match(re$1.symbol) || [''])[0]).join('');
        prefix = prefix ? '𝠀' + prefix : '';
      }

      let signbox = '';

      if (swuSignObject.spatials && Array.isArray(swuSignObject.spatials)) {
        signbox = swuSignObject.spatials.map(spatial => {
          if (typeof spatial.symbol === 'string') {
            const symbol = (spatial.symbol.match(re$1.symbol) || [''])[0];

            if (symbol) {
              const x = spatial.coord && spatial.coord[0] || '';
              const y = spatial.coord && spatial.coord[1] || '';
              const coord = x && y ? coord2swu([x, y]) : '';

              if (coord) {
                return symbol + coord;
              }
            }
          }

          return '';
        }).join('');
      }

      const styleStr = typeof swuSignObject.style === 'string' && (swuSignObject.style.match(re.full) || [''])[0] || '';
      return prefix + box + max + signbox + styleStr;
    }
  };

  /**
   * Function to gather sizing information about an swu sign or symbol
   * @function swu.info
   * @param {string} swu - an swu sign or symbol
   * @returns {object} information about the swu string
   * @example
   * swu.info('𝠀񁲡񈩧𝠂𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻-P10Z2')
   * 
   * return {
   *   minX: 481,
   *   minY: 471,
   *   width: 37,
   *   height: 58,
   *   segment: 'sign',
   *   lane: -1
   *   padding: 10,
   *   zoom: 2
   * }
   */

  const info = swu => {
    let lanes = {
      '𝠁': 0,
      '𝠂': -1,
      '𝠃': 0,
      '𝠄': 1
    };
    let parsed = parse.sign(swu);
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
      parsed = parse.symbol(swu);
      lane = "𝠃";

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
   * @function swu.columnDefaultsMerge
   * @param {ColumnOptions} options - object of column options
   * @returns {ColumnOptions} object of column options merged with column defaults
   * @example
   * swu.columnDefaultsMerge({height: 500,width:150})
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
   * Function to transform an SWU text to an array of columns
   * 
   * @function swu.columns
   * @param {string} swuText - SWU text of signs and punctuation
   * @param {ColumnOptions} options - object of column options
   * @returns {{options:ColumnOptions,widths:number[],columns:ColumnData}} object of column options, widths array, and column data
   * @example
   * swu.columns('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂', {height: 500,width:150})
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
   *         "text": "𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻",
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
   *         "text": "𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦",
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
   *         "text": "񏌁𝣢𝤂",
   *         "zoom": 1
   *       }
   *     ]
   *   ]
   * }
   */


  const columns = (swuText, options) => {
    if (typeof swuText !== 'string') return {};
    const values = columnDefaultsMerge(options);
    let input = parse.text(swuText);
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
   * Array of plane 4 code points for kinds of symbols: writing, location, and punctuation.
   * @alias swu.kind
   * @type {array}
   */

  const kind = [0x40001, 0x4efa1, 0x4f2a1];
  /**
   * Array of plane 4 code points for categories of symbols: hand, movement, dynamics, head, trunk & limb, location, and punctuation.
   * @alias swu.category
   * @type {array}
   */

  const category = [0x40001, 0x461e1, 0x4bca1, 0x4bfa1, 0x4e8e1, 0x4efa1, 0x4f2a1];
  /**
   * Array of plane 4 code points for the 30 symbol groups.
   * @alias swu.group
   * @type {array}
   */

  const group = [0x40001, 0x40541, 0x40b41, 0x41981, 0x41c81, 0x43241, 0x43d81, 0x445c1, 0x44ce1, 0x45be1, 0x461e1, 0x46841, 0x46fc1, 0x47fe1, 0x485e1, 0x49301, 0x49e41, 0x4a4a1, 0x4afe1, 0x4b521, 0x4bca1, 0x4bfa1, 0x4c3c1, 0x4cfc1, 0x4d621, 0x4e161, 0x4e8e1, 0x4ec41, 0x4efa1, 0x4f2a1];
  /**
   * Object of symbol ranges with starting and ending code points on plane 4.
   * 
   *   { all, writing, hand, movement, dynamic, head, hcenter, vcenter, trunk, limb, location, punctuation }
   * @alias swu.ranges
   * @type {object}
   */

  const ranges = {
    'all': [0x40001, 0x4f480],
    'writing': [0x40001, 0x4efa0],
    'hand': [0x40001, 0x461e0],
    'movement': [0x461e1, 0x4bca0],
    'dynamic': [0x4bca1, 0x4bfa0],
    'head': [0x4bfa1, 0x4e8e0],
    'hcenter': [0x4bfa1, 0x4e8e0],
    'vcenter': [0x4bfa1, 0x4ec40],
    'trunk': [0x4e8e1, 0x4ec40],
    'limb': [0x4ec41, 0x4efa0],
    'location': [0x4efa1, 0x4f2a0],
    'punctuation': [0x4f2a1, 0x4f480]
  };
  /**
   * Function to test if symbol is of a certain type.
   * @function swu.isType
   * @param {string} swuSym - an SWU symbol character
   * @param {string} type - the name of a symbol range
   * @returns {boolean} is symbol of specified type
   * @example
   * swu.isType('񀀁', 'hand')
   * 
   * return true
   */

  const isType = (swuSym, type) => {
    const parsed = parse.symbol(swuSym);

    if (parsed.symbol) {
      const code = swu2code(parsed.symbol);
      const range = ranges[type];

      if (range) {
        return range[0] <= code && range[1] >= code;
      }
    }

    return false;
  };

  /**
   * Array of colors associated with the seven symbol categories.
   * @alias swu.colors
   * @type {array}
   */

  const colors = ['#0000CC', '#CC0000', '#FF0099', '#006600', '#000000', '#884411', '#FF9900'];
  /**
   * Function that returns the standardized color for a symbol.
   * @function swu.colorize
   * @param {string} swuSym - an SWU symbol character
   * @returns {string} name of standardized color for symbol
   * @example
   * swu.colorize('񀀁')
   * 
   * return '#0000CC'
   */

  const colorize = swuSym => {
    const parsed = parse.symbol(swuSym);
    let color = '#000000';

    if (parsed.symbol) {
      const code = swu2code(parsed.symbol);
      const index = category.findIndex(val => val > code);
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
  exports.decode = decode;
  exports.encode = encode;
  exports.group = group;
  exports.info = info;
  exports.isType = isType;
  exports.kind = kind;
  exports.pair = pair;
  exports.parse = parse;
  exports.ranges = ranges;
  exports.re = re$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/* support ongoing development on https://patreon.com/signwriting */
});

const swu$3 = /*@__PURE__*/getDefaultExportFromCjs(swu$2);

var swu = createCommonjsModule(function (module, exports) {
/**
* Sutton SignWriting TrueType Font Module v1.3.2 (https://github.com/sutton-signwriting/font-ttf)
* Author: Steve Slevinski  (https://SteveSlevinski.me)
* swu.js is released under the MIT License.
*/

(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? factory(exports) :
  typeof undefined === 'function' && undefined.amd ? undefined(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ssw = global.ssw || {}, global.ssw.ttf = global.ssw.ttf || {}, global.ssw.ttf.swu = {})));
})(commonjsGlobal, (function (exports) { 'use strict';

  /**
  * Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
  * Author: Steve Slevinski  (https://SteveSlevinski.me)
  * convert.mjs is released under the MIT License.
  */
  /**
   * Function to convert a number to an SWU number character
   * @function convert.num2swu
   * @param {number} num - Integer value for number
   * @returns {string} SWU number character
   * @example
   * convert.num2swu(500)
   * 
   * return '𝤆'
   */


  const num2swu = num => String.fromCodePoint(0x1D80C + parseInt(num) - 250);
  /**
   * Function to convert an array of x,y integers to two SWU number characters
   * @function convert.coord2swu
   * @param {number[]} coord - Array of x,y integers
   * @returns {string} Two SWU number character
   * @example
   * convert.coord2swu([500, 500])
   * 
   * return '𝤆𝤆'
   */


  const coord2swu = coord => coord.map(num => num2swu(num)).join('');
  /**
   * Function to convert an SWU symbol character to a code point on plane 4
   * @function convert.swu2code
   * @param {string} swuSym - SWU symbol character
   * @returns {number} Code point on plane 4
   * @example
   * convert.swu2code('񀀁')
   * 
   * return 0x40001
   */


  const swu2code$1 = swuSym => parseInt(swuSym.codePointAt(0));
  /**
   * Function to convert an SWU symbol character to a 16-bit ID
   * @function convert.swu2id
   * @param {string} swuSym - SWU symbol character
   * @returns {number} 16-bit ID
   * @example
   * convert.swu2id('񀀁')
   * 
   * return 1
   */


  const swu2id = swuSym => swu2code$1(swuSym) - 0x40000;
  /* support ongoing development on https://patreon.com/signwriting */

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

  const symbolSize$1 = function (id) {
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
   * Function that returns the size of a symbol using an SWU symbol character
   * @function swu.symbolSize
   * @param {string} swu - an SWU symbol character
   * @example
   * swu.symbolSize("񀀁")
   * 
   * return [15,30]
   */

  const symbolSize = function (swu) {
    return symbolSize$1(swu2id(swu));
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
  const symbolLine$1 = function (id) {
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


  const symbolFill$1 = function (id) {
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


  const symbolText$1 = function (id) {
    return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${symbolFill$1(id)}</text>
    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${symbolLine$1(id)}</text>`;
  };

  /**
   * Function that returns a plane 15 character for a symbol line using an SWU symbol character
   * @function swu.symbolLine
   * @param {string} swu - an SWU symbol character
   * @example
   * swu.symbolLine('񀀁')
   * 
   * return '󰀁'
   */

  const symbolLine = function (swu) {
    return symbolLine$1(swu2id(swu));
  };
  /**
   * Function that returns a plane 165 character for a symbol fill using an SWU symbol character
   * @function swu.symbolFill
   * @param {string} swu - an SWU symbol character
   * @example
   * swu.symbolFill('񀀁')
   * 
   * return '􀀁'
   */


  const symbolFill = function (swu) {
    return symbolFill$1(swu2id(swu));
  };
  /**
   * Function that creates two text elements for a symbol using an SWU symbol character
   * @function swu.symbolText
   * @param {string} swu - an SWU symbol character
   * @example
   * swu.symbolText('񀀁')
   * 
   * return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀁</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀁</text>`
   */


  const symbolText = function (swu) {
    return symbolText$1(swu2id(swu));
  };

  /**
  * Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
  * Author: Steve Slevinski  (https://SteveSlevinski.me)
  * style.mjs is released under the MIT License.
  */

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
  let re$2 = {
    'colorize': 'C',
    'colorhex': '(?:[0-9a-fA-F]{3}){1,2}',
    'colorname': '[a-zA-Z]+',
    'padding': 'P[0-9]{2}',
    'zoom': 'Z(?:[0-9]+(?:\\.[0-9]+)?|x)',
    'classbase': '-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}',
    'id': '[a-zA-Z][_a-zA-Z0-9-]{0,100}'
  };
  re$2.colorbase = `(?:${re$2.colorhex}|${re$2.colorname})`;
  re$2.color = `_${re$2.colorbase}_`;
  re$2.colors = `_${re$2.colorbase}(?:,${re$2.colorbase})?_`;
  re$2.background = `G${re$2.color}`;
  re$2.detail = `D${re$2.colors}`;
  re$2.detailsym = `D[0-9]{2}${re$2.colors}`;
  re$2.classes = `${re$2.classbase}(?: ${re$2.classbase})*`;
  re$2.full = `-(${re$2.colorize})?(${re$2.padding})?(${re$2.background})?(${re$2.detail})?(${re$2.zoom})?(?:-((?:${re$2.detailsym})*))?(?:-(${re$2.classes})?!(?:(${re$2.id})!)?)?`;

  const prefixColor$1 = color => {
    const regex = new RegExp(`^${re$2.colorhex}$`);
    return (regex.test(color) ? '#' : '') + color;
  };

  const definedProps$1 = obj => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));
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


  const parse$2 = styleString => {
    const regex = `^${re$2.full}`;
    const m = (typeof styleString === 'string' ? styleString.match(new RegExp(regex)) : []) || [];
    return definedProps$1({
      'colorize': !m[1] ? undefined : !!m[1],
      'padding': !m[2] ? undefined : parseInt(m[2].slice(1)),
      'background': !m[3] ? undefined : prefixColor$1(m[3].slice(2, -1)),
      'detail': !m[4] ? undefined : m[4].slice(2, -1).split(',').map(prefixColor$1),
      'zoom': !m[5] ? undefined : m[5] === 'Zx' ? 'x' : parseFloat(m[5].slice(1)),
      'detailsym': !m[6] ? undefined : m[6].match(new RegExp(re$2.detailsym, 'g')).map(val => {
        const parts = val.split('_');
        const detail = parts[1].split(',').map(prefixColor$1);
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
    const background = !styleObject.background || !(typeof styleObject.background === 'string') ? undefined : styleObject.background.match(re$2.colorbase)[0];
    style1 += !background ? '' : 'G_' + background + '_';
    const detail1 = !styleObject.detail || !styleObject.detail[0] || !(typeof styleObject.detail[0] === 'string') ? undefined : styleObject.detail[0].match(re$2.colorbase)[0];
    const detail2 = !styleObject.detail || !styleObject.detail[1] || !(typeof styleObject.detail[1] === 'string') ? undefined : styleObject.detail[1].match(re$2.colorbase)[0];

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
      const detail1 = !styleObject.detail || !styleObject.detail[0] ? undefined : styleObject.detail[0].match(re$2.colorbase)[0];
      const detail2 = !styleObject.detail || !styleObject.detail[1] ? undefined : styleObject.detail[1].match(re$2.colorbase)[0];

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
    const classes = !styleObject.classes || !(typeof styleObject.classes === 'string') ? undefined : styleObject.classes.match(re$2.classes)[0];
    style3 += !classes ? '' : classes;
    const id = !styleObject.id || !(typeof styleObject.id === 'string') ? undefined : styleObject.id.match(re$2.id)[0];
    style3 += classes || id ? '!' : '';
    style3 += !id ? '' : id + '!';
    return style1 + (style2 || style3 ? '-' + style2 : '') + (style3 ? '-' + style3 : '');
  };
  /* support ongoing development on https://patreon.com/signwriting */

  /**
  * Sutton SignWriting Core Module v1.4.2 (https://github.com/sutton-signwriting/core)
  * Author: Steve Slevinski  (https://SteveSlevinski.me)
  * swu.mjs is released under the MIT License.
  */

  /**
   * Object of regular expressions for SWU strings in UTF-16
   * 
   * @alias swu.re
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
    'symbol': '(?:(?:\uD8C0[\uDC01-\uDFFF])|(?:[\uD8C1-\uD8FC][\uDC00-\uDFFF])|(?:\uD8FD[\uDC00-\uDC80]))',
    'coord': '(?:\uD836[\uDC0C-\uDDFF]){2}',
    'sort': '\uD836\uDC00',
    'box': '\uD836[\uDC01-\uDC04]'
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
   * Function to convert an SWU number character to an integer
   * @function convert.swu2num
   * @param {string} swuNum - SWU number character
   * @returns {number} Integer value for number
   * @example
   * convert.swu2num('𝤆')
   * 
   * return 500
   */


  const swu2num = swuNum => parseInt(swuNum.codePointAt(0)) - 0x1D80C + 250;
  /**
   * Function to convert two SWU number characters to an array of x,y integers
   * @function convert.swu2coord
   * @param {string} swuCoord - Two SWU number character
   * @returns {number[]} Array of x,y integers
   * @example
   * convert.swu2coord('𝤆𝤆')
   * 
   * return [500, 500]
   */


  const swu2coord = swuCoord => [swu2num(swuCoord.slice(0, 2)), swu2num(swuCoord.slice(2, 4))];
  /**
   * Function to convert an SWU symbol character to a code point on plane 4
   * @function convert.swu2code
   * @param {string} swuSym - SWU symbol character
   * @returns {number} Code point on plane 4
   * @example
   * convert.swu2code('񀀁')
   * 
   * return 0x40001
   */


  const swu2code = swuSym => parseInt(swuSym.codePointAt(0));

  const parse = {
    /**
     * Function to parse an swu symbol with optional coordinate and style string
     * @function swu.parse.symbol
     * @param {string} swuSym - an swu symbol
     * @returns {object} elements of swu symbol
     * @example
     * swu.parse.symbol('񀀁𝤆𝤆-C')
     * 
     * return {
     *  'symbol': '񀀁',
     *  'coord': [500, 500],
     *  'style': '-C'
     * }
     */
    symbol: swuSym => {
      const regex = `^(${re$1.symbol})(${re$1.coord})?(${re.full})?`;
      const symbol = typeof swuSym === 'string' ? swuSym.match(new RegExp(regex)) : undefined;
      return {
        'symbol': symbol ? symbol[1] : undefined,
        'coord': symbol && symbol[2] ? swu2coord(symbol[2]) : undefined,
        'style': symbol ? symbol[3] : undefined
      };
    },

    /**
      * Function to parse an swu sign with style string
      * @function swu.parse.sign
      * @param {string} swuSign - an swu sign
      * @returns {object} elements of swu sign
      * @example
      * swu.parse.sign('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭-C')
      * 
      * return {
      *  sequence: ['񀀒','񀀚','񋚥','񋛩'],
      *  box: '𝠃',
      *  max: [525, 535],
      *  spatials: [
      *    {
      *      symbol: '񋛩',
      *      coord: [483, 510]
      *    },
      *    {
      *      symbol: '񀀒',
      *      coord: [501, 466]
      *    },
      *    {
      *      symbol: '񋚥',
      *      coord: [510, 500]
      *    },
      *    {
      *      symbol: '񀀚',
      *      coord: [476, 475]
      *    }
      *  ],
      *  style: '-C'
      * }
      */
    sign: swuSign => {
      const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re.full})?`;
      const sign = typeof swuSign === 'string' ? swuSign.match(new RegExp(regex)) : undefined;

      if (sign) {
        return {
          'sequence': sign[1] ? sign[1].slice(2).match(/.{2}/g) : undefined,
          'box': sign[2].slice(0, 2),
          'max': swu2coord(sign[2].slice(2, 6)),
          'spatials': sign[2].length < 7 ? undefined : sign[2].slice(6).match(/(.{6})/g).map(m => {
            return {
              symbol: m.slice(0, 2),
              coord: swu2coord(m.slice(2))
            };
          }),
          'style': sign[3]
        };
      } else {
        return {};
      }
    },

    /**
     * Function to parse an swu text
     * @function swu.parse.text
     * @param {string} swuText - an swu text
     * @returns {array} swu signs and punctuations
     * @example
     * swu.parse.text('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂')
     * 
     * return [
     *  '𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻',
     *  '𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦',
     *  '񏌁𝣢𝤂'
     * ]
     */
    text: swuText => {
      if (typeof swuText !== 'string') return [];
      const regex = `(${re$1.sign}(${re.full})?|${re$1.spatial}(${re.full})?)`;
      const matches = swuText.match(new RegExp(regex, 'g'));
      return matches ? [...matches] : [];
    }
  };
  /**
   * Function to gather sizing information about an swu sign or symbol
   * @function swu.info
   * @param {string} swu - an swu sign or symbol
   * @returns {object} information about the swu string
   * @example
   * swu.info('𝠀񁲡񈩧𝠂𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻-P10Z2')
   * 
   * return {
   *   minX: 481,
   *   minY: 471,
   *   width: 37,
   *   height: 58,
   *   segment: 'sign',
   *   lane: -1
   *   padding: 10,
   *   zoom: 2
   * }
   */

  const info = swu => {
    let lanes = {
      '𝠁': 0,
      '𝠂': -1,
      '𝠃': 0,
      '𝠄': 1
    };
    let parsed = parse.sign(swu);
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
      parsed = parse.symbol(swu);
      lane = "𝠃";

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
   * @function swu.columnDefaultsMerge
   * @param {ColumnOptions} options - object of column options
   * @returns {ColumnOptions} object of column options merged with column defaults
   * @example
   * swu.columnDefaultsMerge({height: 500,width:150})
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
   * Function to transform an SWU text to an array of columns
   * 
   * @function swu.columns
   * @param {string} swuText - SWU text of signs and punctuation
   * @param {ColumnOptions} options - object of column options
   * @returns {{options:ColumnOptions,widths:number[],columns:ColumnData}} object of column options, widths array, and column data
   * @example
   * swu.columns('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂', {height: 500,width:150})
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
   *         "text": "𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻",
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
   *         "text": "𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦",
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
   *         "text": "񏌁𝣢𝤂",
   *         "zoom": 1
   *       }
   *     ]
   *   ]
   * }
   */


  const columns = (swuText, options) => {
    if (typeof swuText !== 'string') return {};
    const values = columnDefaultsMerge(options);
    let input = parse.text(swuText);
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
   * Array of plane 4 code points for categories of symbols: hand, movement, dynamics, head, trunk & limb, location, and punctuation.
   * @alias swu.category
   * @type {array}
   */

  const category = [0x40001, 0x461e1, 0x4bca1, 0x4bfa1, 0x4e8e1, 0x4efa1, 0x4f2a1];
  /**
   * Object of symbol ranges with starting and ending code points on plane 4.
   * 
   *   { all, writing, hand, movement, dynamic, head, hcenter, vcenter, trunk, limb, location, punctuation }
   * @alias swu.ranges
   * @type {object}
   */

  const ranges = {
    'all': [0x40001, 0x4f480],
    'writing': [0x40001, 0x4efa0],
    'hand': [0x40001, 0x461e0],
    'movement': [0x461e1, 0x4bca0],
    'dynamic': [0x4bca1, 0x4bfa0],
    'head': [0x4bfa1, 0x4e8e0],
    'hcenter': [0x4bfa1, 0x4e8e0],
    'vcenter': [0x4bfa1, 0x4ec40],
    'trunk': [0x4e8e1, 0x4ec40],
    'limb': [0x4ec41, 0x4efa0],
    'location': [0x4efa1, 0x4f2a0],
    'punctuation': [0x4f2a1, 0x4f480]
  };
  /**
   * Array of colors associated with the seven symbol categories.
   * @alias swu.colors
   * @type {array}
   */


  const colors = ['#0000CC', '#CC0000', '#FF0099', '#006600', '#000000', '#884411', '#FF9900'];
  /**
   * Function that returns the standardized color for a symbol.
   * @function swu.colorize
   * @param {string} swuSym - an SWU symbol character
   * @returns {string} name of standardized color for symbol
   * @example
   * swu.colorize('񀀁')
   * 
   * return '#0000CC'
   */

  const colorize = swuSym => {
    const parsed = parse.symbol(swuSym);
    let color = '#000000';

    if (parsed.symbol) {
      const code = swu2code(parsed.symbol);
      const index = category.findIndex(val => val > code);
      color = colors[index < 0 ? 6 : index - 1];
    }

    return color;
  };
  /* support ongoing development on https://patreon.com/signwriting */

  /**
   * Function that creates an SVG image from an SWU symbol key with an optional style string
   * @function swu.symbolSvgBody
   * @param {string} swuSym - an SWU symbol key with optional style string
   * @example
   * swu.symbolSvgBody('S10000')
   * 
   * return `<text font-size="0">S10000</text>
   *   <g transform="translate(500,500)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀁</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀁</text>
   *   </g>`
   */

  const symbolSvgBody = swuSym => {
    const parsed = parse.symbol(swuSym);
    const blank = '';
    if (!parsed.symbol) return blank;
    let styling = parse$2(parsed.style);
    let x1, y1, x2, y2;

    if (parsed.coord) {
      x1 = parsed.coord[0];
      y1 = parsed.coord[1];
      x2 = 500 + (500 - x1);
      y2 = 500 + (500 - y1);
    } else {
      let size = symbolSize(parsed.symbol);
      if (!size) return blank;
      x1 = 500 - parseInt((size[0] + 1) / 2);
      y1 = 500 - parseInt((size[1] + 1) / 2);
      x2 = 500 + (500 - x1);
      y2 = 500 + (500 - y1);
    }

    let symSvg = symbolText(parsed.symbol);
    symSvg = `  <g transform="translate(${x1},${y1})">
${symSvg}
  </g>`;
    let line;

    if (styling.colorize) {
      line = colorize(parsed.symbol);
    } else if (styling.detail) {
      line = styling.detail[0];
    }

    if (line) {
      symSvg = symSvg.replace(/class="sym-line" fill="black"/, `class="sym-line" fill="${line}"`);
    }

    let fill = styling.detail && styling.detail[1];

    if (fill) {
      symSvg = symSvg.replace(/class="sym-fill" fill="white"/, `class="sym-fill" fill="${fill}"`);
    }

    let background = '';

    if (styling.padding) {
      x1 -= styling.padding;
      y1 -= styling.padding;
      x2 += styling.padding;
      y2 += styling.padding;
    }

    if (styling.background) {
      background = `\n  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${styling.background};" />`;
    }

    return `  <text font-size="0">${swuSym}</text>${background}
${symSvg}`;
  };
  /**
   * Function that creates an SVG image from an SWU symbol key with an optional style string
   * @function swu.symbolSvg
   * @param {string} swuSym - an SWU symbol key with optional style string
   * @example
   * swu.symbolSvg('S10000')
   * 
   * return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="500 500 15 30">
   *   <text font-size="0">S10000</text>
   *   <g transform="translate(500,500)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀁</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀁</text>
   *   </g>
   * </svg>`
   */


  const symbolSvg = swuSym => {
    const parsed = parse.symbol(swuSym);
    const blank = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';
    if (!parsed.symbol) return blank;
    let styling = parse$2(parsed.style);
    let x1, y1, x2, y2;

    if (parsed.coord) {
      x1 = parsed.coord[0];
      y1 = parsed.coord[1];
      x2 = 500 + (500 - x1);
      y2 = 500 + (500 - y1);
    } else {
      let size = symbolSize(parsed.symbol);
      if (!size) return blank;
      x1 = parseInt(500 - size[0] / 2);
      y1 = parseInt(500 - size[1] / 2);
      x2 = x1 + size[0];
      y2 = y1 + size[1];
    }

    let classes = '';

    if (styling.classes) {
      classes = ` class="${styling.classes}"`;
    }

    let id = '';

    if (styling.id) {
      id = ` id="${styling.id}"`;
    }

    if (styling.padding) {
      x1 -= styling.padding;
      y1 -= styling.padding;
      x2 += styling.padding;
      y2 += styling.padding;
    }

    let sizing = '';

    if (styling.zoom != 'x') {
      sizing = ` width="${(x2 - x1) * (styling.zoom ? styling.zoom : 1)}" height="${(y2 - y1) * (styling.zoom ? styling.zoom : 1)}"`;
    }

    return `<svg${classes}${id} version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
${symbolSvgBody(swuSym)}
</svg>`;
  };

  const symbolCanvas = function (swuSym) {
    const parsed = parse.symbol(swuSym);

    if (parsed.symbol) {
      let size = symbolSize(parsed.symbol);

      if (size) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        let styling = parse$2(parsed.style);
        let line = 'black';

        if (styling.colorize) {
          line = colorize(parsed.symbol);
        } else if (styling.detail) {
          line = styling.detail[0];
        }

        let fill = styling.detail && styling.detail[1] || 'white';
        let x1 = 500;
        let x2 = x1 + size[0];
        let y1 = 500;
        let y2 = y1 + size[1];

        if (styling.padding) {
          x1 -= styling.padding;
          y1 -= styling.padding;
          x2 += styling.padding;
          y2 += styling.padding;
        }

        let sizing = 1;

        if (styling.zoom != 'x') {
          sizing = styling.zoom;
        }

        let w = (x2 - x1) * sizing;
        let h = (y2 - y1) * sizing;
        canvas.width = w ? w : 1;
        canvas.height = h ? h : 1;

        if (styling.background) {
          context.rect(0, 0, w, h);
          context.fillStyle = styling.background;
          context.fill();
        }

        context.font = 30 * sizing + "px 'SuttonSignWritingFill'";
        context.fillStyle = fill;
        context.fillText(symbolFill(parsed.symbol), (500 - x1) * sizing, (500 - y1) * sizing);
        context.font = 30 * sizing + "px 'SuttonSignWritingLine'";
        context.fillStyle = line;
        context.fillText(symbolLine(parsed.symbol), (500 - x1) * sizing, (500 - y1) * sizing);
        return canvas;
      }
    }
  };
  /**
   * Function that creates a PNG data url from an SWU symbol character with an optional style string
   * @function swu.symbolPng
   * @param {string} swuSym - an SWU symbol character with optional style string
   * @example
   * swu.symbolPng('񀀁-CP10G_green_Z2')
   * 
   * return 'data:image/png;base64,iVBORw...'
   */


  const symbolPng = swuSym => {
    const canvas = symbolCanvas(swuSym);
    const png = canvas.toDataURL("image/png");
    canvas.remove();
    return png;
  };

  const blank = null;
  /**
   * Function that normalizes a symbol with a minimum coordinate for a center of 500,500
   * @function swu.symbolNormalize
   * @param {string} swuSym - an SWU symbol character with optional coordinate and style string
   * @example
   * swu.symbolNormalize('񀀁')
   * 
   * return '񀀁𝣿𝣷'
   */

  const symbolNormalize = swuSym => {
    const parsed = parse.symbol(swuSym);

    if (parsed.symbol) {
      let size = symbolSize(parsed.symbol);

      if (size) {
        return `${parsed.symbol}${coord2swu([500 - parseInt((size[0] + 1) / 2), 500 - parseInt((size[1] + 1) / 2)])}${parsed.style || ''}`;
      }
    } else {
      return blank;
    }
  };

  /**
   * Function that creates an SVG image from an SWU sign with an optional style string
   * @function swu.signSvgBody
   * @param {string} swuSign - an SWU sign with optional style string
   * @example
   * swu.signSvgBody('M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475')
   * 
   * return `<text font-size="0">M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475</text>
   *   <g transform="translate(483,510)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋛩</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻛩</text>
   *   </g>
   *   <g transform="translate(501,466)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀒</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀒</text>
   *   </g>
   *   <g transform="translate(510,500)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋚥</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻚥</text>
   *   </g>
   *   <g transform="translate(476,475)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀚</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀚</text>
   *   </g>`
   */

  const signSvgBody = swuSign => {
    let parsed = parse.sign(swuSign);
    const blank = '';

    if (parsed.spatials) {
      let styling = parse$2(parsed.style);

      if (styling.detailsym) {
        styling.detailsym.forEach(sym => {
          if (parsed.spatials[sym.index - 1]) {
            parsed.spatials[sym.index - 1].detail = sym.detail;
          }
        });
      }

      let x1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[0]));
      let y1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[1]));
      let x2 = parsed.max[0];
      let y2 = parsed.max[1];
      let background = '';

      if (styling.padding) {
        x1 -= styling.padding;
        y1 -= styling.padding;
        x2 += styling.padding;
        y2 += styling.padding;
      }

      if (styling.background) {
        background = `\n  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${styling.background};" />`;
      }

      let svg = `  <text font-size="0">${swuSign}</text>${background}`;
      const line = styling.detail && styling.detail[0];
      const fill = styling.detail && styling.detail[1];
      svg += '\n' + parsed.spatials.map(spatial => {
        let svg = symbolText(spatial.symbol);
        let symLine = line;

        if (spatial.detail) {
          symLine = spatial.detail[0];
        } else if (styling.colorize) {
          symLine = colorize(spatial.symbol);
        }

        if (symLine) {
          svg = svg.replace(/class="sym-line" fill="black"/, `class="sym-line" fill="${symLine}"`);
        }

        let symFill = fill;

        if (spatial.detail && spatial.detail[1]) {
          symFill = spatial.detail[1];
        }

        if (symFill) {
          svg = svg.replace(/class="sym-fill" fill="white"/, `class="sym-fill" fill="${symFill}"`);
        }

        return `  <g transform="translate(${spatial.coord[0]},${spatial.coord[1]})">
${svg}
  </g>`;
      }).join('\n');
      return svg;
    }

    return blank;
  };
  /**
   * Function that creates an SVG image from an SWU sign with an optional style string
   * @function swu.signSvg
   * @param {string} swuSign - an SWU sign with optional style string
   * @example
   * swu.signSvg('M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475')
   * 
   * return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="49" height="69" viewBox="476 466 49 69">
   *   <text font-size="0">M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475</text>
   *   <g transform="translate(483,510)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋛩</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻛩</text>
   *   </g>
   *   <g transform="translate(501,466)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀒</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀒</text>
   *   </g>
   *   <g transform="translate(510,500)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋚥</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻚥</text>
   *   </g>
   *   <g transform="translate(476,475)">
   *     <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􀀚</text>
   *     <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󰀚</text>
   *   </g>
   * </svg>`
   */


  const signSvg = swuSign => {
    let parsed = parse.sign(swuSign);
    const blank = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';

    if (parsed.spatials) {
      let styling = parse$2(parsed.style);
      let x1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[0]));
      let y1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[1]));
      let x2 = parsed.max[0];
      let y2 = parsed.max[1];
      let classes = '';

      if (styling.classes) {
        classes = ` class="${styling.classes}"`;
      }

      let id = '';

      if (styling.id) {
        id = ` id="${styling.id}"`;
      }

      if (styling.padding) {
        x1 -= styling.padding;
        y1 -= styling.padding;
        x2 += styling.padding;
        y2 += styling.padding;
      }

      let sizing = '';

      if (styling.zoom != 'x') {
        sizing = ` width="${(x2 - x1) * (styling.zoom ? styling.zoom : 1)}" height="${(y2 - y1) * (styling.zoom ? styling.zoom : 1)}"`;
      }

      let svg = `<svg${classes}${id} version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
`;
      svg += signSvgBody(swuSign);
      svg += '\n</svg>';
      return svg;
    }

    return blank;
  };

  const signCanvas = function (swuSign) {
    const parsed = parse.sign(swuSign);

    if (parsed.spatials) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      let styling = parse$2(parsed.style);

      if (styling.detailsym) {
        styling.detailsym.forEach(sym => {
          if (parsed.spatials[sym.index - 1]) {
            parsed.spatials[sym.index - 1].detail = sym.detail;
          }
        });
      }

      let x1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[0]));
      let y1 = Math.min(...parsed.spatials.map(spatial => spatial.coord[1]));
      let x2 = parsed.max[0];
      let y2 = parsed.max[1];

      if (styling.padding) {
        x1 -= styling.padding;
        y1 -= styling.padding;
        x2 += styling.padding;
        y2 += styling.padding;
      }

      let sizing = 1;

      if (styling.zoom != 'x') {
        sizing = styling.zoom;
      }

      let w = (x2 - x1) * sizing;
      let h = (y2 - y1) * sizing;
      canvas.width = w ? w : 1;
      canvas.height = h ? h : 1;

      if (styling.background) {
        context.rect(0, 0, w, h);
        context.fillStyle = styling.background;
        context.fill();
      }

      const line = styling.detail && styling.detail[0] || "black";
      const fill = styling.detail && styling.detail[1] || "white";
      parsed.spatials.forEach(spatial => {
        let symLine = line;

        if (spatial.detail) {
          symLine = spatial.detail[0];
        } else if (styling.colorize) {
          symLine = colorize(spatial.symbol);
        }

        let symFill = fill;

        if (spatial.detail && spatial.detail[1]) {
          symFill = spatial.detail[1];
        }

        context.font = 30 * sizing + "px 'SuttonSignWritingFill'";
        context.fillStyle = symFill;
        context.fillText(symbolFill(spatial.symbol), (spatial.coord[0] - x1) * sizing, (spatial.coord[1] - y1) * sizing);
        context.font = 30 * sizing + "px 'SuttonSignWritingLine'";
        context.fillStyle = symLine;
        context.fillText(symbolLine(spatial.symbol), (spatial.coord[0] - x1) * sizing, (spatial.coord[1] - y1) * sizing);
      });
      return canvas;
    }
  };
  /**
   * Function that creates a PNG data url from an SWU sign with an optional style string
   * @function swu.signPng
   * @param {string} swuSign - an SWU sign with optional style string
   * @example
   * swu.signPng('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭')
   * 
   * return 'data:image/png;base64,iVBORw...'
   */


  const signPng = swuSign => {
    const canvas = signCanvas(swuSign);
    const png = canvas.toDataURL("image/png");
    canvas.remove();
    return png;
  };

  /**
   * Function that normalizes an SWU sign for a center of 500,500
   * @function swu.signNormalize
   * @param {string} swuSign - an SWU sign with optional style string
   * @example
   * swu.signNormalize('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭')
   * 
   * return '𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭'
   */

  const signNormalize = swuSign => {
    const parsed = parse.sign(swuSign);

    if (parsed.spatials) {
      const symbolsizes = parsed.spatials.reduce((output, spatial) => {
        const size = symbolSize(spatial.symbol);
        output[spatial.symbol] = {
          width: size[0],
          height: size[1]
        };
        return output;
      }, {});

      const bbox = symbols => {
        const x1 = Math.min(...symbols.map(spatial => spatial.coord[0]));
        const y1 = Math.min(...symbols.map(spatial => spatial.coord[1]));
        const x2 = Math.max(...symbols.map(spatial => spatial.coord[0] + parseInt(symbolsizes[spatial.symbol].width)));
        const y2 = Math.max(...symbols.map(spatial => spatial.coord[1] + parseInt(symbolsizes[spatial.symbol].height)));
        return {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        };
      };

      const hrange = ranges['hcenter'];
      const hsyms = parsed.spatials.filter(spatial => {
        const dec = parseInt(spatial.symbol.slice(1, 4), 16);
        return hrange[0] <= dec && hrange[1] >= dec;
      });
      const vrange = ranges['vcenter'];
      const vsyms = parsed.spatials.filter(spatial => {
        const dec = parseInt(spatial.symbol.slice(1, 4), 16);
        return vrange[0] <= dec && vrange[1] >= dec;
      });
      let abox = bbox(parsed.spatials);
      let max = [abox.x2, abox.y2];

      if (hsyms.length) {
        const hbox = bbox(hsyms);
        abox.x1 = hbox.x1;
        abox.x2 = hbox.x2;
      }

      if (vsyms.length) {
        const vbox = bbox(vsyms);
        abox.y1 = vbox.y1;
        abox.y2 = vbox.y2;
      }

      const offset = [parseInt((abox.x2 + abox.x1) / 2) - 500, parseInt((abox.y2 + abox.y1) / 2) - 500];
      const swuout = (parsed.sequence ? '𝠀' + parsed.sequence.join('') : '') + parsed.box + coord2swu([max[0] - offset[0], max[1] - offset[1]]) + parsed.spatials.map(spatial => spatial.symbol + coord2swu([spatial.coord[0] - offset[0], spatial.coord[1] - offset[1]])).join('') + (parsed.style || '');
      return swuout;
    }
  };

  /**
   * Function that creates an SVG image for a column of SWU
   * @function swu.columnSvg
   * @param {ColumnData} swuColumn - an array of objects with information about FSW signs and punctuation
   * @param {ColumnOptions} options - an object of column options
   * @returns {string} column svg
   * @example
   * swu.columnSvg([
   *   {
   *     "x": 56,
   *     "y": 20,
   *     "minX": 481,
   *     "minY": 471,
   *     "width": 37,
   *     "height": 58,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "sign",
   *     "text": "𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻",
   *     "zoom": 1
   *   },
   *   {
   *     "x": 57,
   *     "y": 118,
   *     "minX": 482,
   *     "minY": 468,
   *     "width": 36,
   *     "height": 65,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "sign",
   *     "text": "𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦",
   *     "zoom": 1
   *   },
   *   {
   *     "x": 39,
   *     "y": 203,
   *     "minX": 464,
   *     "minY": 496,
   *     "width": 72,
   *     "height": 8,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "symbol",
   *     "text": "񏌁𝣢𝤂",
   *     "zoom": 1
   *   }
   * ],
   * {
   *   "height": 250,
   *   "width": 150,
   * })
   * 
   * return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="250" viewBox="0 0 150 250">
   *   <g transform="translate(56,20) scale(1) translate(-481,-471) ">
   *     <text font-size="0">𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻-D_black,white_Z1</text>
   *     <g transform="translate(481,471)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􁲡</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󱲡</text>
   *     </g>
   *     <g transform="translate(503,489)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􈩧</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󸩧</text>
   *     </g>
   *   </g>
   *   <g transform="translate(57,118) scale(1) translate(-482,-468) ">
   *     <text font-size="0">𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦-D_black,white_Z1</text>
   *     <g transform="translate(489,515)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􃊫</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󳊫</text>
   *     </g>
   *     <g transform="translate(482,490)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􃊢</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󳊢</text>
   *     </g>
   *     <g transform="translate(508,496)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􆇡</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󶇡</text>
   *     </g>
   *     <g transform="translate(500,468)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋛕</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻛕</text>
   *     </g>
   *   </g>
   *   <g transform="translate(39,203) scale(1) translate(-464,-496) ">
   *     <text font-size="0">񏌁𝣢𝤂-D_black,white_Z1</text>
   *     <g transform="translate(464,496)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􏌁</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󿌁</text>
   *     </g>
   *   </g>
   * </svg>`
   */

  const columnSvg = (swuColumn, options) => {

    if (typeof options !== 'object') options = {};
    const values = Object.assign(columnDefaults, options);
    let x1 = 0;
    let y1 = 0;
    let x2 = values.width;
    let y2 = values.height;
    let background = '';

    if (values.background) {
      background = `\n  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${values.background};" />`;
    }

    let sizing = ` width="${values.width}" height="${values.height}"`;
    let svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
  <text font-size="0">${x1}</text>${background}`;
    svg += swuColumn.map(item => {
      const dash = item.text.indexOf('-');

      if (dash > 0) {
        const itemStyle = item.text.substring(dash);
        const newStyle = { ...values.style,
          ...parse$2(itemStyle)
        };
        item.text = item.text.replace(itemStyle, compose(newStyle));
      } else {
        item.text += compose(values.style);
      }

      item.zoom = item.zoom * values.style.zoom;
      return '<g transform="translate(' + item.x + ',' + item.y + ') scale(' + item.zoom + ') translate(' + -item.minX + ',' + -item.minY + ') ">' + (item.segment == "sign" ? signSvgBody(item.text) : symbolSvgBody(item.text)) + '</g>';
    }).join('\n');
    svg += '\n</svg>';
    return svg;
  };

  /**
   * Function that creates an array of SVG column images for an SWU text
   * @function swu.columnsSvg
   * @param {string} swuText - a text of SWU signs and punctuation
   * @param {ColumnOptions} options - an object of column options
   * @returns {string[]} array of SVG columns
   * @example
   * swu.columnsSvg('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂',{
   *   "height": 250,
   *   "width": 150,
   * })
   * 
   * return [`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="250" viewBox="0 0 150 250">
   *   <g transform="translate(56,20) scale(1) translate(-481,-471) ">
   *     <text font-size="0">𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻-D_black,white_Z1</text>
   *     <g transform="translate(481,471)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􁲡</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󱲡</text>
   *     </g>
   *     <g transform="translate(503,489)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􈩧</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󸩧</text>
   *     </g>
   *   </g>
   *   <g transform="translate(57,118) scale(1) translate(-482,-468) ">
   *     <text font-size="0">𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦-D_black,white_Z1</text>
   *     <g transform="translate(489,515)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􃊫</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󳊫</text>
   *     </g>
   *     <g transform="translate(482,490)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􃊢</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󳊢</text>
   *     </g>
   *     <g transform="translate(508,496)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􆇡</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󶇡</text>
   *     </g>
   *     <g transform="translate(500,468)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􋛕</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󻛕</text>
   *     </g>
   *   </g>
   *   <g transform="translate(39,203) scale(1) translate(-464,-496) ">
   *     <text font-size="0">񏌁𝣢𝤂-D_black,white_Z1</text>
   *     <g transform="translate(464,496)">
   *       <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">􏌁</text>
   *       <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">󿌁</text>
   *     </g>
   *   </g>
   * </svg>`]
   */

  const columnsSvg = function (swuText, options) {
    if (typeof options !== 'object') options = {};
    let values = columns(swuText, options);
    let cols = values.columns.map((col, i) => {
      return columnSvg(col, { ...values.options,
        ...{
          width: values.widths[i]
        }
      });
    });
    return cols;
  };

  const columnCanvas = function (swuColumn, options) {
    if (typeof options !== 'object') options = {};
    const values = Object.assign(columnDefaults, options);
    const canvas = document.createElement('canvas');
    canvas.width = values.width;
    canvas.height = values.height;
    const context = canvas.getContext('2d');

    if (values.background) {
      context.rect(0, 0, values.width, values.height);
      context.fillStyle = values.background;
      context.fill();
    }

    swuColumn.map(item => {
      const dash = item.text.indexOf('-');

      if (dash > 0) {
        const itemStyle = item.text.substring(dash);
        const newStyle = { ...values.style,
          ...parse$2(itemStyle)
        };
        item.text = item.text.replace(itemStyle, compose(newStyle));
      } else {
        item.text += compose(values.style);
      }

      item.zoom = item.zoom * values.style.zoom;
      let parsed = {};

      if (item.segment == "sign") {
        parsed = parse.sign(item.text);
      } else {
        let sym = parse.symbol(item.text);
        parsed.style = sym.style;
        parsed.spatials = [sym];
      }

      let styling = parse$2(parsed.style);

      if (styling.background) {
        context.fillStyle = styling.background;
        context.fillRect(item.x - styling.padding * item.zoom, item.y - styling.padding * item.zoom, (item.width + styling.padding * 2) * item.zoom, (item.height + styling.padding * 2) * item.zoom);
      }

      if (styling.detailsym) {
        styling.detailsym.forEach(sym => {
          if (parsed.spatials[sym.index - 1]) {
            parsed.spatials[sym.index - 1].detail = sym.detail;
          }
        });
      }

      const line = styling.detail && styling.detail[0] || "black";
      const fill = styling.detail && styling.detail[1] || "white";
      parsed.spatials.forEach(spatial => {
        let symLine = line;

        if (spatial.detail) {
          symLine = spatial.detail[0];
        } else if (styling.colorize) {
          symLine = colorize(spatial.symbol);
        }

        let symFill = fill;

        if (spatial.detail && spatial.detail[1]) {
          symFill = spatial.detail[1];
        }

        context.font = 30 * item.zoom + "px 'SuttonSignWritingFill'";
        context.fillStyle = symFill;
        context.fillText(symbolFill(spatial.symbol), item.x + (spatial.coord[0] - item.minX) * item.zoom, item.y + (spatial.coord[1] - item.minY) * item.zoom);
        context.font = 30 * item.zoom + "px 'SuttonSignWritingLine'";
        context.fillStyle = symLine;
        context.fillText(symbolLine(spatial.symbol), item.x + (spatial.coord[0] - item.minX) * item.zoom, item.y + (spatial.coord[1] - item.minY) * item.zoom);
      });
    });
    return canvas;
  };
  /**
   * Function that creates a PNG data url for a column of SWU
   * @function swu.columnPng
   * @param {ColumnData} swuColumn - an array of SWU signs and punctuation with coordinates
   * @param {ColumnOptions} options - an object of column options
   * @returns {string} column png data url
   * @example
   * swu.columnPng([
   *   {
   *     "x": 56,
   *     "y": 20,
   *     "minX": 481,
   *     "minY": 471,
   *     "width": 37,
   *     "height": 58,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "sign",
   *     "text": "𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻",
   *     "zoom": 1
   *   },
   *   {
   *     "x": 57,
   *     "y": 118,
   *     "minX": 482,
   *     "minY": 468,
   *     "width": 36,
   *     "height": 65,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "sign",
   *     "text": "𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦",
   *     "zoom": 1
   *   },
   *   {
   *     "x": 39,
   *     "y": 203,
   *     "minX": 464,
   *     "minY": 496,
   *     "width": 72,
   *     "height": 8,
   *     "lane": 0,
   *     "padding": 0,
   *     "segment": "symbol",
   *     "text": "񏌁𝣢𝤂",
   *     "zoom": 1
   *   }
   * ],
   * {
   *   "height": 250,
   *   "width": 150,
   * })
   * 
   * return 'data:image/png;base64,iVBORw...'
   */


  const columnPng = (swuColumn, options) => {
    const canvas = columnCanvas(swuColumn, options);
    const png = canvas.toDataURL("image/png");
    canvas.remove();
    return png;
  };

  /**
   * Function that creates an SVG image for a column of SWU
   * @function swu.columnsPng
   * @param {string} swuText - an array of SWU signs and punctuation with coordinates
   * @param {ColumnOptions} options - an object of column options
   * @returns {string[]} array of PNG data urls
   * @example
   * swu.columnsPng('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂',{
   *   "height": 250,
   *   "width": 150,
   * })
   * 
   * return ['data:image/png;base64,iVBORw...']
   */

  const columnsPng = function (swuText, options) {
    if (typeof options !== 'object') options = {};
    let values = columns(swuText, options);
    let cols = values.columns.map((col, i) => {
      return columnPng(col, { ...values.options,
        ...{
          width: values.widths[i]
        }
      });
    });
    return cols;
  };

  exports.columnPng = columnPng;
  exports.columnSvg = columnSvg;
  exports.columnsPng = columnsPng;
  exports.columnsSvg = columnsSvg;
  exports.signNormalize = signNormalize;
  exports.signPng = signPng;
  exports.signSvg = signSvg;
  exports.signSvgBody = signSvgBody;
  exports.symbolFill = symbolFill;
  exports.symbolLine = symbolLine;
  exports.symbolNormalize = symbolNormalize;
  exports.symbolPng = symbolPng;
  exports.symbolSize = symbolSize;
  exports.symbolSvg = symbolSvg;
  exports.symbolSvgBody = symbolSvgBody;
  exports.symbolText = symbolText;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

/* support ongoing development on https://patreon.com/signwriting */
});

const swu$1 = /*@__PURE__*/getDefaultExportFromCjs(swu);

export { swu as a, swu$2 as s };
