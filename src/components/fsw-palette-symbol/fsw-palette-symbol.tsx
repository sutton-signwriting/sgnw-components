import { Component, Element, Prop, State, Event, EventEmitter, Host, h } from '@stencil/core';

import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

import draggabilly from 'draggabilly';

@Component({
  tag: 'fsw-palette-symbol',
  styleUrl: 'fsw-palette-symbol.css',
  scoped: true
})

export class FswPaletteSymbol {

  @Element() el: HTMLElement; //this.el
  protected draggie;

  /** FSW key for symbol */
  @Prop({mutable: true, reflect: true}) symbol: string;

  @State() sgnw: boolean = window.sgnw;

  /** click event for the symbol palette */
  @Event() paletteSymbolClick: EventEmitter<string>;
  paletteSymbolClickHandler() {
    this.paletteSymbolClick.emit(this.symbol);
  }

  /** drop event for the signbox and sequence  */
  @Event() paletteSymbolDrop: EventEmitter<{encoding:string,symbol:string,x:number,y:number}>;
  paletteSymbolDropHandler({}, pointer) {  // {} rather than event parameter
    this.paletteSymbolDrop.emit({encoding:"fsw",symbol:this.symbol,x:pointer.pageX,y:pointer.pageY});
    this.el.style.top="0";
    this.el.style.left="0";
  }

  connectedCallback(){
    if (!this.sgnw){
      let self = this;
      function handleSgnw(){
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);  
      }
      window.addEventListener('sgnw', handleSgnw, false);
    }
  }

  componentDidLoad(){
    this.draggie = new draggabilly(this.el);
    this.draggie.on( 'staticClick', this.paletteSymbolClickHandler.bind(this) );
    this.draggie.on( 'dragEnd', this.paletteSymbolDropHandler.bind(this) );
  }

  render() {
    return (
      <Host symbol={this.symbol} innerHTML={this.sgnw?symbolSvg(this.symbol):''}></Host>
    )
  }
}
