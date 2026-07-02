import { forceUpdate } from '@stencil/core';

import { onThemeChange } from './global';

// Stencil forbids @Component classes from extending a base class, so this is
// composition, not inheritance: components own an instance and dispose it on
// disconnect. The rendered SVG bakes in colors read at render time, so any
// computed color change (theme toggle, ancestor restyle, media query) must
// trigger a re-render.
export class ColorWatch {

  private stopThemeWatch: () => void;

  private handleColorChange = (event: TransitionEvent) => {
    if (event.propertyName == 'color' || event.propertyName == 'background-color') {
      forceUpdate(this.component);
    }
  };

  constructor(private el: HTMLElement, private component: any) {
    this.stopThemeWatch = onThemeChange(() => forceUpdate(this.component));
    this.el.addEventListener('transitionend', this.handleColorChange);
  }

  dispose() {
    this.stopThemeWatch();
    this.el.removeEventListener('transitionend', this.handleColorChange);
  }
}
