export declare class SgnwSymbol {
    el: HTMLElement;
    /** ISWA 2010 ID  */
    iid: number;
    iidUpdate(newValue: string, oldValue: string): void;
    /** Formal SignWriting in ASCII (FSW) for symbol with optional style string */
    fsw: string;
    fswUpdate(newValue: string, oldValue: string): void;
    /** SignWriting in Unicode (SWU) for symbol with optional style string */
    swu: string;
    swuUpdate(newValue: string, oldValue: string): void;
    /** Style String for symbol */
    styling: string;
    sgnw: boolean;
    connectedCallback(): void;
    render(): any;
}
