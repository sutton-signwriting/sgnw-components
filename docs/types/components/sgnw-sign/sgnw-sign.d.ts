export declare class SgnwSign {
    el: HTMLElement;
    /** Formal SignWriting in ASCII (FSW) for sign with optional style string */
    fsw: string;
    fswUpdate(newValue: string, oldValue: string): void;
    /** SignWriting in Unicode (SWU) for sign with optional style string */
    swu: string;
    swuUpdate(newValue: string, oldValue: string): void;
    /** Style String for sign */
    styling: string;
    sgnw: boolean;
    connectedCallback(): void;
    render(): any;
}
