import { Cookie, Page } from 'playwright';
export interface State {
    cookies: Cookie[];
    localStorage: {
        [name: string]: any;
    };
    sessionStorage: {
        [name: string]: any;
    };
}
export declare const saveState: (page: Page, savePath: string) => Promise<void>;
