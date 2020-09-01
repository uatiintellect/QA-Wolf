import { BrowserContext } from 'playwright';
export declare const saveConsoleLogs: (context: BrowserContext, saveDir: string) => Promise<void>;
export declare const saveArtifacts: (context: BrowserContext, saveDir: string) => Promise<void>;
export declare const stopVideos: () => Promise<void>;
