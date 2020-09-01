"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrompt = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = require("path");
const utils_1 = require("../utils");
exports.createPrompt = async (codePath) => {
    const { choice } = await inquirer_1.default.prompt([
        {
            choices: [
                '💾  Save and exit',
                '🖥️  Open REPL to run code',
                '🗑️  Discard and exit',
            ],
            message: `Edit your code at: ${path_1.relative(process.cwd(), codePath)}`,
            name: 'choice',
            type: 'list',
        },
    ]);
    if (choice.includes('REPL')) {
        await utils_1.repl();
        return exports.createPrompt(codePath);
    }
    const shouldSave = choice.includes('Save');
    return shouldSave;
};
//# sourceMappingURL=createPrompt.js.map