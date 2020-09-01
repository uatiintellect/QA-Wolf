declare type WaitForOptions = {
    interval?: number;
    timeout?: number;
};
export declare const waitFor: <T>(predicate: () => T | Promise<T>, options?: WaitForOptions) => Promise<T>;
export {};
