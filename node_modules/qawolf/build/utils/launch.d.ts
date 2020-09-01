import playwrightCore, { Browser, BrowserType, LaunchOptions as PlaywrightLaunchOptions } from 'playwright';
declare type BrowserName = 'chromium' | 'firefox' | 'webkit';
export declare type LaunchOptions = PlaywrightLaunchOptions & {
    browserName?: BrowserName;
};
export declare const parseBrowserName: (name?: string) => BrowserName;
export declare const getBrowserType: (browserName: BrowserName) => BrowserType<Browser>;
export declare const getLaunchOptions: (options?: LaunchOptions) => playwrightCore.LaunchOptions & {
    browserName?: BrowserName;
} & {
    browserName: BrowserName;
};
export declare const launch: (options?: LaunchOptions) => Promise<Browser>;
export {};
