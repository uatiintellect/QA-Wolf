declare type Options = {
    name: string;
    rootDir: string;
};
export declare const findTestPath: ({ name, rootDir, }: Options) => Promise<string>;
export {};
