import '../await-outside';
import { REPLServer } from 'repl';
export declare type Callback<S = void, T = void> = (data?: S) => T;
export declare const repl: (context?: Record<string, unknown>, callback?: Callback<REPLServer>) => Promise<void>;
