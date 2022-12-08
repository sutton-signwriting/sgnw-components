//
import { Component, Element, Host, h } from '@stencil/core';

import draggabilly from 'draggabilly';

@Component({
  tag: 'fsw-spatial',
  styleUrl: 'fsw-spatial.css',
  scoped: true
})

export class FswSymbol {

  @Element() el: HTMLElement; //this.el
  protected draggie;

  componentDidLoad(){
    this.draggie = new draggabilly(this.el);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
