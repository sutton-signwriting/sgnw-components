export declare class SgnwSymbolPicker {
  private element;
  kind: number;
  category: number;
  group: number;
  base: number;
  /** Formal SignWriting in ASCII (FSW) for symbol */
  fsw: string;
  /** SignWriting in Unicode (SWU) for symbol */
  swu: string;
  /** ISWA 2010 ID for symbol */
  iid: number;
  /** SignWriting in Unicode 8 (uni8) for symbol */
  uni: string;
  focus: string;
  private focusChanged;
  componentWillLoad(): void;
  private symbolMod;
  private setSymbol;
  validateFSW(newValue: string): void;
  private rangeChanged;
  private codepoints;
  render(): any;
}
