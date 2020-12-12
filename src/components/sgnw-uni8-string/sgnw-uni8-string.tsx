//

import { Component, Element, Prop, Host, h } from '@stencil/core';

// @ts-ignore
import { parse, compose } from '@sutton-signwriting/unicode8/string/string.min.mjs';

@Component({
  tag: 'sgnw-uni8-string',
  styleUrl: 'sgnw-uni8-string.css',
  shadow: true
})

export class SgnwUni8String {

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
