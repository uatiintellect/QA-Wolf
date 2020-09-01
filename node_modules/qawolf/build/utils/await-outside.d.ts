/// <reference types="node" />
declare module 'await-outside' {
    import { REPLServer } from 'repl';
    function addAwaitOutsideToReplServer(repl: REPLServer): void;
}
