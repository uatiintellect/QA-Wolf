"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualCode = void 0;
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('qawolf:VirtualCode');
class VirtualCode {
    constructor(lines) {
        this._lines = [];
        this._lines = lines;
    }
    buildPatch(compareTo) {
        /**
         * Check if the last line changed.
         */
        const lastIndex = this._lines.length - 1;
        if (lastIndex < 0) {
            debug('no lines to update');
            return null;
        }
        const lastLine = this._lines[lastIndex];
        const compareToLines = compareTo.lines();
        if (lastIndex >= compareToLines.length) {
            // if the last line no longer exists
            // we will update it when a new line arrives
            debug('last line no longer exists, wait to update');
            return null;
        }
        const compareToLastLine = compareToLines[lastIndex];
        if (lastLine === compareToLastLine) {
            debug('last line did not change: "%j" === "%j"', lastLine, compareToLastLine);
            return null;
        }
        debug('last line changed from "%j" to "%j"', lastLine, compareToLastLine);
        return { original: lastLine, updated: compareToLastLine };
    }
    // for tests
    code() {
        return this._lines.map(line => `${line}\n`).join('');
    }
    lines() {
        return this._lines;
    }
    newLines(compareTo) {
        const newLines = compareTo.lines().slice(this._lines.length);
        return newLines;
    }
}
exports.VirtualCode = VirtualCode;
//# sourceMappingURL=VirtualCode.js.map