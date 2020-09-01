/// <reference types="node" />
import { JestOptions } from './buildJestArguments';
import { BrowserName } from '../types';
export declare type TestOptions = JestOptions & {
    browsers: BrowserName[];
    env?: NodeJS.ProcessEnv;
    headless?: boolean;
};
export declare const runTests: (options: TestOptions) => void;
