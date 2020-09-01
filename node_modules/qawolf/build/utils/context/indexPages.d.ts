import { BrowserContext, Page } from 'playwright';
export declare type IndexedPage = Page & {
    createdIndex: number;
};
export declare const indexPages: (context: BrowserContext) => Promise<void>;
