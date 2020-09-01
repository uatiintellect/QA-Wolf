import program, { Command } from 'commander';
export declare type CreateOptions = {
    args?: string[];
    device?: string;
    name: string;
    statePath?: string;
    url: string;
};
export declare const runCreate: (options: CreateOptions) => Promise<void>;
export declare const buildCreateCommand: () => program.Command;
