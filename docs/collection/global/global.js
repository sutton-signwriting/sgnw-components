// @ts-ignore
import { cssAppend, cssLoaded } from '@sutton-signwriting/font-ttf/font/font.min.mjs';
window['sgnw'] = false;
const event = new Event('sgnw');
export default function () {
    cssAppend();
    cssLoaded(() => {
        window['sgnw'] = true;
        window.dispatchEvent(event);
    });
}
