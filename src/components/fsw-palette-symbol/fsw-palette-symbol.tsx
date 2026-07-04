import { Component, Element, Prop, State, Event, EventEmitter, Host, h } from '@stencil/core';

import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

import draggabilly from 'draggabilly';

import { addSvgClassStyle, addSvgStyle } from '../../global/svg';

const PALETTE_SYMBOL_SVG_STYLE = 'position:absolute;display:block;top:2.5%;bottom:2.5%;left:2.5%;right:2.5%;margin:auto;max-width:95%;max-height:95%;cursor:default';
const PALETTE_SYMBOL_DRAGGING_SVG_STYLE = 'position:absolute;display:block;top:0;bottom:initial;left:0;right:initial;margin:0;max-width:initial;max-height:initial;cursor:default';
const SYMBOL_LINE_STYLE = 'fill:var(--font-color) !important';
const SYMBOL_FILL_STYLE = 'fill:var(--bg-color) !important';

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
  @State() dragging: boolean = false;

  /** click event for the symbol palette */
  @Event() paletteSymbolClick: EventEmitter<string>;
  paletteSymbolClickHandler() {
    this.paletteSymbolClick.emit(this.symbol);
  }

  /** drop event for the signbox and sequence  */
  @Event() paletteSymbolDrop: EventEmitter<{encoding:string,symbol:string,x:number,y:number}>;
  paletteSymbolDropHandler({}, pointer) {  // {} rather than event parameter
    this.dragging = false;
    this.paletteSymbolDrop.emit({encoding:"fsw",symbol:this.symbol,x:pointer.pageX,y:pointer.pageY});
    this.el.style.top="0";
    this.el.style.left="0";
  }

  paletteSymbolDragStartHandler() {
    this.dragging = true;
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
    this.draggie.on( 'dragStart', this.paletteSymbolDragStartHandler.bind(this) );
    this.draggie.on( 'dragEnd', this.paletteSymbolDropHandler.bind(this) );
  }

  render() {
    let svg = this.sgnw?symbolSvg(this.symbol):'';
    svg = addSvgStyle(svg, this.dragging?PALETTE_SYMBOL_DRAGGING_SVG_STYLE:PALETTE_SYMBOL_SVG_STYLE);
    svg = addSvgClassStyle(svg, 'sym-line', SYMBOL_LINE_STYLE);
    svg = addSvgClassStyle(svg, 'sym-fill', SYMBOL_FILL_STYLE);

    return (
      <Host symbol={this.symbol} innerHTML={svg}></Host>
    )
  }
}
