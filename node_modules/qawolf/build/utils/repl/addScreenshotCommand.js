"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addScreenshotCommand = void 0;
const waitForPage_1 = require("../context/waitForPage");
const openScreenshot_1 = require("../page/openScreenshot");
exports.addScreenshotCommand = (replServer) => {
    replServer.defineCommand('screenshot', {
        help: 'Take a screenshot and open it',
        action: async (pageVariable) => {
            let pageIndex = Number(pageVariable);
            if (isNaN(pageIndex))
                pageIndex = 0;
            // register(context) will set the context.context
            const context = replServer.context.context;
            if (!context || !context.pages) {
                throw new Error(`No browser context found. Provide it to the repl "await repl({ context })"`);
            }
            const page = await waitForPage_1.waitForPage(context, pageIndex, { waitUntil: null });
            await openScreenshot_1.openScreenshot(page);
        },
    });
};
//# sourceMappingURL=addScreenshotCommand.js.map