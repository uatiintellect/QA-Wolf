import { BrowserContext } from 'playwright';
export declare type RegisteredBrowserContext = BrowserContext & {
    _qawRegistered: boolean;
};
export declare const addInitScript: (context: BrowserContext) => Promise<void>;
export declare const isRegistered: (context: BrowserContext) => boolean;
export declare const getArtifactPath: () => string | null;
export declare const register: (context: BrowserContext) => Promise<void>;
