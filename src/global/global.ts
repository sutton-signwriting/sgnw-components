
// @ts-ignore
import { cssAppend, cssLoaded } from '@sutton-signwriting/font-ttf/font/font.min.mjs';

declare global {
  interface Window { sgnw: boolean; }
}

window['sgnw'] = false;

const event = new Event('sgnw');
export default function() { // or export default async function()
  cssAppend();
  cssLoaded( ()=> {
    window['sgnw'] = true;
    window.dispatchEvent(event);
  })
}