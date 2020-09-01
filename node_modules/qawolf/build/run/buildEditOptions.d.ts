/// <reference types="node" />
import { JestOptions } from './buildJestArguments';
import { TestOptions } from './runTests';
export declare type EditOptions = JestOptions & {
    env?: NodeJS.ProcessEnv;
    testPath: string;
};
export declare const buildEditOptions: (options: EditOptions) => TestOptions;
