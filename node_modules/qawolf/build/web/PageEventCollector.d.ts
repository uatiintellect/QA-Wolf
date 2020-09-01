declare type ConstructorOptions = {
    attribute?: string;
};
export declare class PageEventCollector {
    private _attributes;
    private _onDispose;
    constructor(options: ConstructorOptions);
    dispose(): void;
    private listen;
    private sendEvent;
    private collectEvents;
    private collectScrollEvent;
}
export {};
