declare type LinePatch = {
    original: string;
    updated: string;
};
export declare class VirtualCode {
    private _lines;
    constructor(lines: string[]);
    buildPatch(compareTo: VirtualCode): LinePatch | null;
    code(): string;
    lines(): string[];
    newLines(compareTo: VirtualCode): string[];
}
export {};
