//
import { Component, Element, Listen, Host, h } from '@stencil/core';

import { overlap } from '../../global/global';

@Component({
  tag: 'fsw-signbox',
  styleUrl: 'fsw-signbox.css',
  scoped: true
})

export class FswSignbox {

  @Element() el: HTMLElement; //this.el

  @Listen('paletteSymbolDrop', { target: 'window' })
  paletteSymbolDropHandler(event: CustomEvent<Object>) {
    const target = event.target as HTMLElement;
    if (overlap(target,this.el)){
      console.log(event.detail);
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}


//
//    window.addEventListener('fancyEvent', function(e) {})
//
//    var adj = DictionaryFront.signmaker.size/2;
//    var sb = document.getElementById("signbox");
//    if (overlap(this.element,sb)){
//      var offset1 = getOffset( this.element ),
//        offset2 = getOffset( sb );
//      var symbol = {symbol:this.element.symbol,x: parseInt(500-adj+offset1.left-offset2.left),y: parseInt(500-adj-1+offset1.top-offset2.top)};
//      DictionaryFront.signbox.addSymbol(symbol);
//    } else {
//      var seq = document.getElementById("sequence");
//      if (overlap(this.element,seq)){
//        var offset1 = getOffset( this.element ),
//        offset2 = getOffset( seq );
//        var symbol = {symbol:this.element.symbol};
//        DictionaryFront.sequence.addSymbol(symbol,parseInt((offset1.top-offset2.top)/28));
//      }
//    }
