//

import { Component, Element, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { parse, compose } from '@sutton-signwriting/unicode8/symbol/symbol.min.mjs';

@Component({
  tag: 'sgnw-uni8-symbol',
  styleUrl: 'sgnw-uni8-symbol.css',
  shadow: true
})

export class SgnwUni8Symbol {

  @Element() el: HTMLElement; //this.el

  /** SignWriting in Unicode 8 (uni8) for symbol */
  @Prop({mutable: true, reflect: true}) uni: string;

  render() {
    return (
      <Host uni={this.uni}>
        <span>{compose(parse(this.uni))}</span>
      </Host>
    )
  }
}
