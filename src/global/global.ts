
// @ts-ignore
import { cssAppend, cssLoaded } from '@sutton-signwriting/font-ttf/font/font';

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

export const cssValues = function(el: Element){
  let css = window.getComputedStyle(el, null);
  let styleObj = {
    "background": rgba2hex(css.getPropertyValue("background-color")),
    "detail": [
      rgb2hex(css.getPropertyValue("color")),
      rgb2hex(css.getPropertyValue("background-color"))
    ],
    "zoom": parseInt(css.getPropertyValue("font-size").slice(0,-2))/30
  }
  let elem = el;
  while(styleObj.detail[1] == "transparent"){
    elem = elem.parentElement;
    if (elem == null) {
      elem = document.body;
    }
    css = window.getComputedStyle(elem, null);
    styleObj.detail[1] = rgb2hex(css.getPropertyValue("background-color"));
  }
  return styleObj;
}

export const mergeStyle = function( obj1: Object, obj2: Object){
  const zoom1 = ('zoom' in obj1)?obj1['zoom']:1;
  const zoom2 = ('zoom' in obj2)?obj2['zoom']:1;
  return {
    ...obj1,
    ...obj2,
    ...{zoom: zoom1 * zoom2}
  }
}
export default function() { // or export default async function()
  cssAppend();
  cssLoaded( ()=> {
    window['sgnw'] = true;
    window.dispatchEvent(event);
  });
}
