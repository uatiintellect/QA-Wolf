"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEditOptions = void 0;
exports.buildEditOptions = (options) => {
    let args = [];
    // prevent Jest from force exiting a test
    // so we can close the browser
    args.push('--detectOpenHandles');
    // need to use our basic reporter that does not interfere with the repl
    args.push('--reporters="@qawolf/jest-reporter"');
    // timeout after an hour
    args.push('--testTimeout=3600000');
    if (options.args) {
        args = [...args, ...options.args];
    }
    return {
        ...options,
        args,
        browsers: ['chromium'],
        env: {
            ...options.env,
            // simplify the UI
            CI: 'true',
        },
        headless: false,
    };
};
//# sourceMappingURL=buildEditOptions.js.map