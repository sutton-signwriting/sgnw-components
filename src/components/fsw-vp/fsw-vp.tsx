//
import { Component, Element, State, Prop, Host, h, Watch } from '@stencil/core';

// @ts-ignore
import { info, re as reFSW, parse as parseFSW, compose as composeFSW } from '@sutton-signwriting/core/fsw/fsw';

// @ts-ignore
import { re as reStyle, parse as parseStyle, compose as composeStyle } from '@sutton-signwriting/core/style/style';

// @ts-ignore
import { symbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw';

@Component({
  tag: 'fsw-vp',
  styleUrl: 'fsw-vp.css',
  shadow: true
})

export class FswVp {

  @Element() el: HTMLElement; //this.el

  /** FSW text */
  @Prop({mutable: true, reflect: true}) vp: string;

  @State() sgnw: boolean = window.sgnw;
  @State() items: object[] = [];

  @Watch('vp')
  parseText(newValue: string) {
    //parse it here.
    const sign =  `${reFSW.sign}(${reStyle.full})?`;
    const signRE =  new RegExp(sign);
    const spatial =  `${reFSW.spatial}(${reStyle.full})?`;
    const spatialRE =  new RegExp(spatial);
    const img =  '<img.*?>';
    const imgRE =  new RegExp(img);
    const regex = `(${sign}|${spatial}|${img}|.)`;
    let result = newValue.match(new RegExp(regex, 'g'));
    let output = [];
    let other = "";
    let type = "";
    for (let val of result){
      if (signRE.test(val)){
        type = "sign";
      } else if (spatialRE.test(val)) {
        type = "spatial";
      } else if (imgRE.test(val)){
        type = "img";
      } else {
        type = "other";
        other += val;
      }
      if (type != "other"){
        if (other && other != " "){
          output.push({other:other});
        }
        other = "";
        if (type == "sign" || type == "spatial"){
          output.push({[type]:val, info: info(val)});
        } else {
          output.push({[type]:val});
        }
      }
    };
    if (other && other != " "){
      output.push({other:other});
    }
    this.items = output;
  }

  connectedCallback(){
    this.vp = this.el.innerHTML;

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
    return (
      <Host vp={this.vp}>
        <span>
          {this.items.map( (item) => {
            if (item['sign']){
              item['info']['right'] = (500 - parseInt(item['info']['width'])/2) - parseInt(item['info']["minX"])
              return <fsw-sign style={{"width": item['info']['width'] + "px", "height": item['info']['height'] + "px", right: item['info']['right'] + "px"}}>{item['sign']}</fsw-sign>
            } else if (item['spatial']){
              item['info']['right'] = (500-parseInt(item['info']["minX"]))
              return <fsw-symbol style={{"width": item['info']['width'] + "px", "height": item['info']['height'] + "px"}}>{item['spatial']}</fsw-symbol>
            } else if (item['img']){
              return <div innerHTML={item['img']}></div>
            } else {
              return <div>{item['other']}</div>
            }
          })}
        </span>
      </Host>
    )
  }
}
