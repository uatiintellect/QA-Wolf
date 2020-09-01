"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveState = void 0;
const fs_extra_1 = require("fs-extra");
const getState = async (page) => {
    const context = page.context();
    const cookies = await context.cookies();
    const { localStorage, sessionStorage } = await page.evaluate(() => {
        return {
            localStorage: { ...localStorage },
            sessionStorage: { ...sessionStorage },
        };
    });
    return { cookies, localStorage, sessionStorage };
};
exports.saveState = async (page, savePath) => {
    const state = await getState(page);
    await fs_extra_1.ensureFile(savePath);
    return fs_extra_1.writeJSON(savePath, state);
};
//# sourceMappingURL=saveState.js.map