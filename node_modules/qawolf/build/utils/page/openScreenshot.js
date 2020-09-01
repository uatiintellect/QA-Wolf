"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openScreenshot = void 0;
const debug_1 = __importDefault(require("debug"));
const open_1 = __importDefault(require("open"));
const tempy_1 = require("tempy");
const debug = debug_1.default('qawolf:openScreenshot');
exports.openScreenshot = async (page) => {
    const path = tempy_1.file({ extension: 'png' });
    await page.screenshot({ path });
    debug('saved screenshot to %s', path);
    const process = await open_1.default(path);
    debug('opened screenshot');
    return process;
};
//# sourceMappingURL=openScreenshot.js.map