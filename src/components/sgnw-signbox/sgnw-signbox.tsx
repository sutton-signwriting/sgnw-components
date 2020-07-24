//

import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'sgnw-signbox',
  styleUrl: 'sgnw-signbox.css',
  shadow: true,
})

export class SgnwSignbox {

  /** array of spatials */
//  @Prop({mutable: true, reflect: true}) spatials: array;

//  @Watch('spatials')
//  updateSpatials() {
//    this.createSymbolList(this.spatials);
//  }

  @Listen('mousedown', { capture: true })
  handleMouseDown(ev) {
    ev
    console.log('mousedown');
  }
  @Listen('touchstart', { capture: true })
  handleTouchStart(ev) {
    ev
    console.log('touchstart');
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }

}
   