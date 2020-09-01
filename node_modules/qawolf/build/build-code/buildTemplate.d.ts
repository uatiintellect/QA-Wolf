export interface BuildTemplateOptions {
    device?: string;
    name: string;
    statePath?: string;
    url: string;
    useTypeScript?: boolean;
}
export declare type TemplateFunction = (options: BuildTemplateOptions) => string | Promise<string>;
interface BuildImportsOptions {
    device?: string;
    useTypeScript?: boolean;
}
export declare const buildValidVariableName: (name: string) => string;
export declare const buildImports: ({ device, useTypeScript, }: BuildImportsOptions) => string;
export declare const buildNewContext: (device?: string) => string;
export declare const buildTemplate: TemplateFunction;
export {};
