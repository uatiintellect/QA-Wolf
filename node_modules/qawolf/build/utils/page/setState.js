"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = void 0;
const fs_extra_1 = require("fs-extra");
const setStorage = async ({ items, page, storageType, }) => {
    if (!Object.keys(items).length)
        return;
    await page.evaluate(({ items, storageType }) => {
        window[storageType].clear();
        Object.keys(items).forEach((key) => {
            window[storageType].setItem(key, items[key]);
        });
    }, {
        items,
        storageType,
    });
};
exports.setState = async (page, savePath) => {
    const state = await fs_extra_1.readJSON(savePath);
    if (state.cookies && state.cookies.length) {
        const context = page.context();
        await context.addCookies(state.cookies);
    }
    if (state.localStorage) {
        await setStorage({
            items: state.localStorage,
            page,
            storageType: 'localStorage',
        });
    }
    if (state.sessionStorage) {
        await setStorage({
            items: state.sessionStorage,
            page,
            storageType: 'sessionStorage',
        });
    }
};
//# sourceMappingURL=setState.js.map