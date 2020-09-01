/// <reference types="node" />
import { EventEmitter } from 'events';
import { Step } from '../types';
export declare type CodeFileOptions = {
    path: string;
};
declare type UpdateOptions = {
    steps: Step[];
};
export declare abstract class CodeUpdater extends EventEmitter {
    protected _locked: boolean;
    private _reconciler;
    protected constructor();
    protected abstract _loadCode(): Promise<string>;
    protected abstract _updateCode(code: string): Promise<void>;
    private _update;
    protected _prepare(): Promise<void>;
    finalize(): Promise<void>;
    update(options: UpdateOptions): Promise<void>;
}
export {};
