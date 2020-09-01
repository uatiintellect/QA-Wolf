"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = exports.getConfigPath = void 0;
const debug_1 = __importDefault(require("debug"));
const path_1 = require("path");
const process_1 = require("process");
const debug = debug_1.default('qawolf:config');
exports.getConfigPath = () => path_1.join(process_1.cwd(), 'qawolf.config.js');
exports.loadConfig = (path) => {
    let userConfig;
    try {
        const configPath = path || exports.getConfigPath();
        debug('load config from %s', configPath);
        userConfig = require(configPath);
    }
    catch (error) {
        debug(`error loading config from ${error.message}`);
        // use defaults
        return {
            config: 'node_modules/qawolf/js-jest.config.json',
            rootDir: '.qawolf',
            testTimeout: 60000,
            useTypeScript: false,
        };
    }
    const config = {
        attribute: userConfig.attribute,
        createTemplate: userConfig.createTemplate,
        // do not override config when this is found in user config
        config: userConfig.config,
        rootDir: userConfig.rootDir || '.qawolf',
        testTimeout: userConfig.testTimeout || 60000,
        useTypeScript: userConfig.useTypeScript || false,
    };
    return config;
};
//# sourceMappingURL=config.js.map