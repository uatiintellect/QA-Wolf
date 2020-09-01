/// <reference types="node" />
import { EventEmitter } from 'events';
import { Browser, BrowserContext } from 'playwright';
import * as qawolf from '../qawolf';
declare type RegistryData = {
    browser?: Browser;
    context?: BrowserContext;
    qawolf?: typeof qawolf;
    [key: string]: any;
};
export declare class Registry extends EventEmitter {
    private static _instance;
    static instance(): Registry;
    private _data;
    data(): RegistryData;
    _setValue(key: string, value: any): void;
    setBrowser(browser: Browser): void;
    setContext(context: BrowserContext): void;
    setQawolf(value: typeof qawolf): void;
}
export {};
