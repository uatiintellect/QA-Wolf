"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repl = void 0;
require("../await-outside");
const await_outside_1 = require("await-outside");
const debug_1 = __importDefault(require("debug"));
const kleur_1 = require("kleur");
const repl_1 = require("repl");
const addScreenshotCommand_1 = require("./addScreenshotCommand");
const setReplContext_1 = require("./setReplContext");
const debug = debug_1.default('qawolf:repl');
exports.repl = (context, callback) => {
    /**
     * Create a REPL and resolve when it is closed.
     */
    console.log(kleur_1.bold().yellow('Type .exit to close the repl and continue running your code'));
    const replServer = repl_1.start({
        terminal: true,
        useGlobal: true,
    });
    await_outside_1.addAwaitOutsideToReplServer(replServer);
    addScreenshotCommand_1.addScreenshotCommand(replServer);
    setReplContext_1.setReplContext(replServer.context, context);
    if (callback)
        callback(replServer);
    return new Promise((resolve) => {
        replServer.on('exit', () => {
            debug('exit');
            resolve();
        });
    });
};
//# sourceMappingURL=repl.js.map