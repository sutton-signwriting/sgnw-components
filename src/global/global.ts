
import '@ionic/core';

// @ts-ignore
import { cssAppend, cssLoaded } from '@sutton-signwriting/font-ttf/font/font.min.mjs';
// @ts-ignore
import { cssAppend as cssAppendUnicode8 } from '@sutton-signwriting/unicode8/font/font.min.mjs';

declare global {
  interface Window { sgnw: boolean; }
}

window['sgnw'] = false;

const event = new Event('sgnw');

export const rgb2hex = function(rgba: string) {
  return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
    let parts = values.split(',')
    if ( parts.length==4 && (parseInt(parts[3]) == 0) ) {
      return 'transparent'
    } else {
      return parts.slice(0,3)
        .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
        .join('')
    }
  })
}

export const rgba2hex = function(rgba: string) {
  return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
    let parts = values.split(',')
    if ( parts.length==4 && (parseInt(parts[3]) < 1) ) {
      return 'transparent'
    } else {
      return parts.slice(0,3)
        .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
        .join('')
    }
  })
}

export default function() { // or export default async function()
  cssAppend();
  cssLoaded( ()=> {
    window['sgnw'] = true;
    window.dispatchEvent(event);
  });
  cssAppendUnicode8();
}
