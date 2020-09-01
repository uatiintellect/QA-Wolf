"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEditCommand = void 0;
const commander_1 = require("commander");
const config_1 = require("../config");
const buildEditOptions_1 = require("../run/buildEditOptions");
const findTestPath_1 = require("../run/findTestPath");
const runTests_1 = require("../run/runTests");
exports.buildEditCommand = () => {
    const command = new commander_1.Command('edit')
        .storeOptionsAsProperties(false)
        .arguments('[name]')
        .option('--watch', 'watch mode')
        .description('📝 edit a test')
        .action(async () => {
        const opts = command.opts();
        const [name] = command.args;
        let args;
        if (opts.watch)
            args = ['--watchAll'];
        const config = config_1.loadConfig();
        const testPath = await findTestPath_1.findTestPath({ rootDir: config.rootDir, name });
        runTests_1.runTests(buildEditOptions_1.buildEditOptions({
            args,
            config,
            testPath,
        }));
    });
    return command;
};
//# sourceMappingURL=editCommand.js.map