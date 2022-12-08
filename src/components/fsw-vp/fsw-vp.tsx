import { Component, Element, State, Prop, Host, h, Watch } from '@stencil/core';

import { info, parse as parseFSW } from '@sutton-signwriting/core/fsw/fsw';

import { compose as composeStyle } from '@sutton-signwriting/core/style/style';

import { cssValues } from '../../global/global';

@Component({
  tag: 'fsw-vp',
  styleUrl: 'fsw-vp.css',
  shadow: true
})

export class FswVp {

  @Element() el: HTMLElement; //this.el

  /** FSW text */
  @Prop({mutable: true, reflect: true}) vp: string;
  /** Colorize flag */
  @Prop({mutable: true, reflect: true}) colorize: boolean;

  @State() sgnw: boolean = window.sgnw;
  @State() items: object[] = [];

  @Watch('vp')
  parseText(newValue: string) {
    this.items = parseFSW.text(newValue).map( val => {
      let i = info(val);
      i['text'] = val;
      return i;
    });
  }

  connectedCallback(){
    if (!this.vp){
      this.vp = this.el.innerHTML;
    } else {
      this.parseText(this.vp);
    }
    if (!this.sgnw){
      let self = this;
      function handleSgnw(){
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);  
      }
      window.addEventListener('sgnw', handleSgnw, false);
    }
  }

  render() {
    const values = cssValues(this.el);
    const styling = composeStyle({
      colorize: this.colorize,
      detail: values.detail
    })
    const offset = 150;
    return (
      <Host vp={this.vp}>
        <span class="outside"><span class="middle"><span class="inside">
          {this.items.map( (item) => {
            let zoom,pad,width,height,right,padding;
            if (item['segment'] == 'sign'){
              zoom = values.zoom * item['zoom'];
              pad = item['padding'] * zoom;
              width = item['width'] * zoom + pad * 2;
              height = item['height'] * zoom + pad * 2;
              right = (1000 - (item["minX"]*2) - item['width']) * zoom - (offset * values.zoom * item['lane']);
              padding = Math.max(0,(20 * zoom) - pad);
              return <fsw-sign styling={styling} style={{"font-size": (values.zoom * 30) + "px", "width": width + "px", "height": height + "px", "margin-right": ((right>0)?right:0) + "px", "border-left": ((right<0)?(-right):0) +"px solid transparent", "padding": padding + "px"}}>{item['text']}</fsw-sign>
            } else if (item['segment'] == 'symbol'){
              zoom = values.zoom * item['zoom'];
              pad = item['padding'] * zoom;
              width = item['width'] * zoom + pad * 2;
              height = item['height'] * zoom + pad * 2;
              padding = Math.max(0,(20 * zoom) - pad);
              return <fsw-symbol styling={styling} style={{"font-size": (values.zoom * 30) + "px", "width": width + "px", "height": height + "px", "padding-bottom": padding + "px"}}>{item['text']}</fsw-symbol>
            } else {
              console.log("other")
              return <div>{item['text']}</div>
            }
          })}
        </span></span></span>
      </Host>
    )
  }
}
