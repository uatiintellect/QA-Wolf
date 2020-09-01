"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexPages = void 0;
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('qawolf:indexPages');
exports.indexPages = async (context) => {
    /**
     * Set page.createdIndex on pages.
     */
    if (context._qawIndexed)
        return;
    context._qawIndexed = true;
    let index = 0;
    const pages = context.pages();
    if (pages.length > 1) {
        throw new Error(`Cannot index pages when more than 1 exist (${pages.length})`);
    }
    if (pages[0]) {
        debug(`index existing page ${index}`);
        pages[0].createdIndex = index++;
    }
    context.on('page', (page) => {
        debug(`index created page ${index}`);
        page.createdIndex = index++;
    });
};
//# sourceMappingURL=indexPages.js.map