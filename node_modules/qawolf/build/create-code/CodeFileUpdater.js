"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeFileUpdater = void 0;
const debug_1 = __importDefault(require("debug"));
const fs_extra_1 = require("fs-extra");
const CodeUpdater_1 = require("./CodeUpdater");
const debug = debug_1.default('qawolf:CodeFileUpdater');
const loadCodeFile = async (path) => {
    const codeExists = await fs_extra_1.pathExists(path);
    if (!codeExists)
        throw new Error(`No code found at ${path}`);
    return fs_extra_1.readFile(path, 'utf8');
};
class CodeFileUpdater extends CodeUpdater_1.CodeUpdater {
    constructor(path) {
        super();
        this._path = path;
    }
    static async create(path) {
        debug(`load code from ${path}`);
        const initialCode = await loadCodeFile(path);
        const updater = new CodeFileUpdater(path);
        await updater._prepare();
        updater._initialCode = initialCode;
        return updater;
    }
    async _loadCode() {
        return loadCodeFile(this._path);
    }
    async _updateCode(code) {
        await fs_extra_1.outputFile(this._path, code, 'utf8');
    }
    async discard() {
        this._locked = true;
        if (process.env.QAW_CREATE === 'true') {
            debug('discard code');
            await fs_extra_1.remove(this._path);
        }
        else {
            debug('revert to initial code');
            await this._updateCode(this._initialCode);
        }
    }
    path() {
        return this._path;
    }
}
exports.CodeFileUpdater = CodeFileUpdater;
//# sourceMappingURL=CodeFileUpdater.js.map