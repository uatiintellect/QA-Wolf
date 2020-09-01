import { CodeUpdater } from './CodeUpdater';
export declare class CodeFileUpdater extends CodeUpdater {
    private _path;
    protected _initialCode: string;
    static create(path: string): Promise<CodeFileUpdater>;
    protected constructor(path: string);
    protected _loadCode(): Promise<string>;
    protected _updateCode(code: string): Promise<void>;
    discard(): Promise<void>;
    path(): string;
}
