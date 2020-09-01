"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTestCommand = void 0;
const commander_1 = require("commander");
const config_1 = require("../config");
const omitArgs_1 = require("./omitArgs");
const runTests_1 = require("../run/runTests");
exports.buildTestCommand = () => {
    const command = new commander_1.Command('test')
        .storeOptionsAsProperties(false)
        .option('--all-browsers', 'run tests on chromium, firefox, and webkit')
        .option('--chromium', 'run tests on chromium')
        .option('--firefox', 'run tests on firefox')
        .option('--headless', 'run tests headless')
        .option('--webkit', 'run tests on webkit')
        .description('✅ run tests')
        .allowUnknownOption(true)
        .action(async () => {
        const opts = command.opts();
        const browsers = [];
        if (opts.allBrowsers || opts.chromium)
            browsers.push('chromium');
        if (opts.allBrowsers || opts.firefox)
            browsers.push('firefox');
        if (opts.allBrowsers || opts.webkit)
            browsers.push('webkit');
        if (!browsers.length)
            browsers.push('chromium');
        // omit qawolf arguments
        const jestArgs = omitArgs_1.omitArgs(process.argv.slice(3), [
            '--all-browsers',
            '--chromium',
            '--firefox',
            '--headless',
            '--rootDir',
            '--webkit',
        ]);
        const config = config_1.loadConfig();
        try {
            runTests_1.runTests({
                args: jestArgs,
                browsers,
                config: config,
                headless: opts.headless,
            });
        }
        catch (e) {
            process.exit(1);
        }
    });
    return command;
};
//# sourceMappingURL=testCommand.js.map