import { Component, Element, Prop, Host, h, Watch } from '@stencil/core';

// @ts-ignore
import { kind, category, group, re as reFSW, parse as parseFSW } from '@sutton-signwriting/core/fsw';

// @ts-ignore
import { re as reSWU, parse as parseSWU } from '@sutton-signwriting/core/swu';

// @ts-ignore
import { key2swu, key2id, swu2key, swu2id, id2key, id2swu } from '@sutton-signwriting/core/convert';

// @ts-ignore
import { font } from '@sutton-signwriting/font-ttf';

// @ts-ignore
import { re as reUni, parse as parseUni, compose as composeUni } from '@sutton-signwriting/unicode8/symbol';

// @ts-ignore
import { code2uni, uni2hex, uni2fsw, fsw2uni } from '@sutton-signwriting/unicode8/convert';

@Component({
  tag: 'sgnw-symbol-picker',
  styleUrl: 'sgnw-symbol-picker.css',
  shadow: true,
})

export class SgnwSymbolPicker {
  @Element() private element: HTMLElement;

  kind: number = 0;
  category: number = 0;
  group: number = 0;
  base: number = 0;

  /** Formal SignWriting in ASCII (FSW) for symbol */
  @Prop({reflect: true}) fsw: string;

  /** SignWriting in Unicode (SWU) for symbol */
  @Prop({reflect: true}) swu: string;

  /** ISWA 2010 ID for symbol */
  @Prop({reflect: true}) iid: number;

  /** SignWriting in Unicode 8 (uni8) for symbol */
  @Prop({reflect: true}) uni: string;

  focus:string = "";
  private focusChanged = (name: string) => {
    this.focus = name;
  }
  
  componentWillLoad() {
    if (this.fsw){
      this.setSymbol('fsw',this.fsw);
      return;
    }
    if (this.swu){
      this.setSymbol('swu',this.swu);
      return;
    }
    if (this.iid){
      this.setSymbol('iid',this.iid.toString());
      return;
    }
    if (this.uni){
      this.setSymbol('uni',this.uni);
      return;
    }
  }

  private symbolMod = (part: string, mod: number) => {
    this.focusChanged('')
    let fsw = parseFSW.symbol(this.fsw);
    let sym:object={'base':undefined,'fill': undefined, 'rotation':undefined};
    if (fsw.symbol){
      sym = {
        'base': parseInt(fsw.symbol.substring(1,4),16),
        'fill': parseInt(fsw.symbol.substring(4,5),16),
        'rotation': parseInt(fsw.symbol.substring(5,6),16),
      }
      switch(part){
        case 'base':{
          if (sym['base']==0x100 && mod==-1){ mod=0;sym['base']=0x38b; }
          if (sym['base']==0x38b && mod==1){ mod=0;sym['base']=0x100; }
          break;
        }
        case 'fill':{
          if (sym['fill']==0x0 && mod==-1){ mod=0;sym['fill']=0x5; }
          if (sym['fill']==0x5 && mod==1){ mod=0;sym['fill']=0x0; }
          break;
        }
        case 'rotation':{
          if (sym['rotation']==0x0 && mod==-1){ mod=0;sym['rotation']=0xf; }
          if (sym['rotation']==0xf && mod==1){ mod=0;sym['rotation']=0x0; }
          break;
        }
      }
      sym[part] = sym[part] + mod;
      fsw = "S" + sym['base'].toString(16) + sym['fill'].toString(16) + sym['rotation'].toString(16);
      this.setSymbol('fsw',fsw);
    }
  }

  private setSymbol = (type:string, setting:string) => {
    switch (type){
      case "fsw": {
        let parsed = parseFSW.symbol(setting);
        if (!parsed['symbol']) {return;}
        this.fsw = parsed['symbol'];

        this.swu = key2swu(this.fsw);
        this.iid = key2id(this.fsw);
        this.uni = fsw2uni(this.fsw);
  
        break;
      }
      case "swu": {
        let parsed = parseSWU.symbol(setting);
        if (!parsed['symbol']) {return;}
        this.swu = parsed['symbol'];

        this.fsw = swu2key(this.swu);
        this.iid = swu2id(this.swu);
        this.uni = fsw2uni(this.fsw);
  
        break;
      }
      case "swuhex": {
        const match = setting.match(/^0x4([0-9a-f]{4})/);
        if (!match || !match[1]){
          return;
        }
        setting = '' + parseInt(match[1],16);
      }
      case "iid": {
        let iid = parseInt(setting);
        if (iid<1 || iid>62592) {return;}

        this.iid = iid;

        this.fsw = id2key(this.iid);
        this.swu = id2swu(this.iid);
        this.uni = fsw2uni(this.fsw);
  
        break;
      }
      case "unihex": {
        let matches = setting.match(/U\+1D[0-9A-F]{3}/g);
        if (!matches){
          return;
        }
        setting = matches.map( m => code2uni(parseInt(m.substring(2),16)) ).join('')
      }
      case "uni": {
        let parsed = parseUni(setting);
        if (!parsed['base']) {return;}
        this.uni = composeUni(parsed);

        this.fsw = uni2fsw(this.uni);
        this.swu = key2swu(this.fsw);
        this.iid = key2id(this.fsw);
  
        break;
      }
      default: {
        return;
      }
    }

    let look:number;
    let value:number;

    value = parseInt(this.fsw.substring(1,4),16);
    look = value;
    while(kind.indexOf(look)==-1) {
      look = look -1;
    }
    this.kind = kind.indexOf(look)

    look = value;
    while(category.indexOf(look)==-1) {
      look = look -1;
    }
    this.category = category.indexOf(look)

    look = value;
    while(group.indexOf(look)==-1) {
      look = look -1;
    }
    this.group = group.indexOf(look)

    this.base = value - 0x100;

  }

  @Watch('fsw')
  validateFSW(newValue: string) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    const has6chars = typeof newValue === 'string' && newValue.length == 6;
    if (isBlank) { throw new Error('name: required') };
    if (!has6chars) { throw new Error('name: has6chars') };
  }

  private rangeChanged = (event: Event) => {
    const el = event.target as HTMLInputElement;
    const name = el.name;
    if (name != this.focus) {
      return;
    }
    const index:number = parseInt(el.value);
    let i:number;
    let value:number;
    switch (name){
      case "kind": {
        value = kind[index];

        this.category = category.indexOf(value);

        this.group = group.indexOf(value);

        this.base = value - 0x100;

        break;
      }
      case "category": {
        value = category[index];

        i = index;
        while(kind.indexOf(category[i])==-1) {
          i = i -1;
        }
        this.kind = kind.indexOf(category[i])

        this.group = group.indexOf(value);

        this.base = value - 0x100;

        break;
      }
      case "group": {
        value = group[index];

        i = index;
        while(kind.indexOf(group[i])==-1) {
          i = i -1;
        }
        this.kind = kind.indexOf(group[i])

        i = index;
        while(category.indexOf(group[i])==-1) {
          i = i -1;
        }
        this.category = category.indexOf(group[i])

        this.base = value - 0x100;

        break;
      }
      case "base": {
        value = index + 0x100;

        i = index;
        while(kind.indexOf(i + 0x100)==-1) {
          i = i -1;
        }
        this.kind = kind.indexOf(i + 0x100)

        i = index;
        while(category.indexOf(i + 0x100)==-1) {
          i = i -1;
        }
        this.category = category.indexOf(i + 0x100)

        i = index;
        while(group.indexOf(i + 0x100)==-1) {
          i = i -1;
        }
        this.group = group.indexOf(i + 0x100)

        break;
      }
      default: {
        return;
      }
    }
    let key = "S" + value.toString(16) + "00";
    this.fsw = key;
    this.iid = key2id(key);
    this.swu = key2swu(key);
    this.uni = fsw2uni(key);

  }  
  private codepoints = () => {
    let parsed = parseUni(this.uni);
    let codes = [];
    if (!parsed.base){
      return;
    }
    codes.push("U+" + uni2hex(parsed.base));
    if (parsed.fill){
      codes.push("U+" + uni2hex(parsed.fill));
    }
    if (parsed.rotation){
      codes.push("U+" + uni2hex(parsed.rotation));
    }
    return codes.join(' ');
  }

  render() {
    return (
      <Host>
        <ion-card>
          <ion-item>
            <ion-range name="kind" value={this.kind} onIonFocus={()=>this.focusChanged('kind')} onIonChange={this.rangeChanged} min={0} max={2} snaps>
              <ion-label slot={"start"}>Kind</ion-label>
            </ion-range>
          </ion-item>
          <ion-item>
            <ion-range name="category" value={this.category} onIonFocus={()=>this.focusChanged('category')} onIonChange={this.rangeChanged} min={0} max={6} snaps>
              <ion-label slot={"start"}>Category</ion-label>
            </ion-range>
          </ion-item>
          <ion-item>
            <ion-range name="group" value={this.group} onIonFocus={()=>this.focusChanged('group')} onIonChange={this.rangeChanged} min={0} max={29} snaps>
              <ion-label slot={"start"}>Group</ion-label>
            </ion-range>
          </ion-item>
          <ion-item>
            <ion-range name="base" value={this.base} onIonFocus={()=>this.focusChanged('base')} onIonChange={this.rangeChanged} min={0} max={651} snaps>
              <ion-label slot={"start"}>Base</ion-label>
            </ion-range>
          </ion-item>
        <ion-grid>
          <ion-row>
            <ion-col size="4"></ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('base',1)}>
                <ion-icon name="caret-up-outline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('fill',1)}>
                <ion-icon name="caret-up-outline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('rotation',1)}>
                <ion-icon name="caret-up-outline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"></ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('base',-1)}>
                <ion-icon name="caret-down-outline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('fill',-1)}>
                <ion-icon name="caret-down-outline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="2">
              <ion-button expand="block" onClick={()=>this.symbolMod('rotation',-1)}>
                <ion-icon name="caret-down-outline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>Symbol</ion-title></ion-col>
            <ion-col size="6">
              { font.symbolSize(this.iid)
                ? <sgnw-symbol fsw={this.fsw} styling="-CZ2"/>
                : <ion-title>invalid symbol</ion-title>
              }
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>FSW</ion-title></ion-col>
            <ion-col size="6">
              <ion-input id="fsw-input" name="fsw-input" type="text" pattern={reFSW.symbol} onIonFocus={()=>this.focusChanged('fsw-input')} value={this.fsw}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("fsw",(this.element.shadowRoot.querySelector('ion-input#fsw-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>SWU</ion-title></ion-col>
            <ion-col size="6">
              <ion-input class="swu" id="swu-input" name="swu-input" type="text" pattern={reSWU.symbol} onIonFocus={()=>this.focusChanged('swu-input')} value={this.swu}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("swu",(this.element.shadowRoot.querySelector('ion-input#swu-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>SWU Hex</ion-title></ion-col>
            <ion-col size="6">
              <ion-input id="swuhex-input" name="swuhex-input" type="text" pattern="0x4[0-9a-f]{4}" onIonFocus={()=>this.focusChanged('swuhex-input')} value={"0x" + (0x40000 + this.iid).toString(16)}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("swuhex",(this.element.shadowRoot.querySelector('ion-input#swuhex-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>ISWA ID</ion-title></ion-col>
            <ion-col size="6">
              <ion-input id="iid-input" name="iid-input" type="number" onIonFocus={()=>this.focusChanged('iid-input')} value={this.iid}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("iid",(this.element.shadowRoot.querySelector('ion-input#iid-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>Unicode 8</ion-title></ion-col>
            <ion-col size="6">
              <ion-input class="uni8" id="uni-input" name="uni-input" type="text" pattern={reUni.symbol} onIonFocus={()=>this.focusChanged('uni-input')} value={this.uni}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("uni",(this.element.shadowRoot.querySelector('ion-input#uni-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4"><ion-title>Code(s)</ion-title></ion-col>
            <ion-col size="6">
              <ion-input id="unihex-input" name="unihex-input" type="text" onIonFocus={()=>this.focusChanged('unihex-input')} value={this.codepoints()}></ion-input>
            </ion-col>
            <ion-col size="2"><ion-button onClick={()=> {this.setSymbol("unihex",(this.element.shadowRoot.querySelector('ion-input#unihex-input') as HTMLInputElement).value)} }>Set</ion-button></ion-col>
          </ion-row>
        </ion-grid>
        </ion-card>
      </Host>
    );
  }

}
