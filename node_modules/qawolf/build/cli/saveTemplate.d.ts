import { BuildTemplateOptions, TemplateFunction } from '../build-code/buildTemplate';
declare type BuildPathOptions = {
    name: string;
    rootDir: string;
    useTypeScript?: boolean;
};
declare type SaveTemplateOptions = BuildTemplateOptions & {
    rootDir: string;
    templateFn?: TemplateFunction;
};
export declare const buildPath: ({ name, rootDir, useTypeScript, }: BuildPathOptions) => string;
export declare const saveTemplate: (options: SaveTemplateOptions) => Promise<string | null>;
export {};
