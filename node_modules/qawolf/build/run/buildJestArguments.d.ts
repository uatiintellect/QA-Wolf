import { Config } from '../config';
export declare type JestOptions = {
    args?: string[];
    config: Config;
    testPath?: string;
};
export declare const buildJestArguments: ({ config, ...options }: JestOptions) => string[];
