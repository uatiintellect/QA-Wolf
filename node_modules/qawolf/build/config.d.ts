import { TemplateFunction } from './build-code/buildTemplate';
export declare type Config = {
    attribute?: string;
    createTemplate?: TemplateFunction;
    config?: string;
    rootDir: string;
    testTimeout: number;
    useTypeScript: boolean;
};
export declare const getConfigPath: () => string;
export declare const loadConfig: (path?: string) => Config;
