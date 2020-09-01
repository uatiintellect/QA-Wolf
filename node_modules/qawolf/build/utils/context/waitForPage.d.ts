import { BrowserContext } from 'playwright';
import { IndexedPage } from './indexPages';
export interface WaitForPageOptions {
    timeout?: number;
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
}
export declare const waitForPage: (context: BrowserContext, index: number, options?: WaitForPageOptions) => Promise<IndexedPage>;
