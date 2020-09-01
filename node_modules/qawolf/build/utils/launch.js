"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = exports.getLaunchOptions = exports.getBrowserType = exports.parseBrowserName = void 0;
const debug_1 = __importDefault(require("debug"));
const os_1 = require("os");
const util_1 = require("util");
const Registry_1 = require("./Registry");
const debug = debug_1.default('qawolf:launch');
const parseBool = (value) => {
    const lowerCaseValue = (value || '').toLowerCase();
    return ['1', 't', 'true'].includes(lowerCaseValue);
};
exports.parseBrowserName = (name) => {
    if (name === 'firefox' || name === 'webkit')
        return name;
    return 'chromium';
};
exports.getBrowserType = (browserName) => {
    // We must use the browser type from the installed `playwright` or `playwright-browser` package,
    // and not `playwright-core` since they store different browser binaries.
    // See https://github.com/microsoft/playwright/issues/1191 for more details.
    let playwright;
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        playwright = require('playwright');
    }
    catch (error) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            playwright = require(`playwright-${browserName}`);
        }
        catch (error) {
            throw new Error('qawolf requires playwright to be installed');
        }
    }
    return playwright[browserName];
};
exports.getLaunchOptions = (options = {}) => {
    const launchOptions = { ...options };
    const headlessEnv = process.env.QAW_HEADLESS;
    if (util_1.isNullOrUndefined(options.headless) && !util_1.isNullOrUndefined(headlessEnv)) {
        launchOptions.headless = parseBool(headlessEnv);
    }
    const browserName = exports.parseBrowserName(options.browserName || process.env.QAW_BROWSER);
    const defaultArgs = [];
    if (browserName === 'chromium' && os_1.platform() === 'linux') {
        // We use --no-sandbox because we cannot change the USER for certain CIs (like GitHub).
        // "Ensure your Dockerfile does not set the USER instruction, otherwise you will not be able to access GITHUB_WORKSPACE"
        defaultArgs.push('--no-sandbox');
    }
    return {
        args: defaultArgs,
        // override args if they are provided
        ...launchOptions,
        browserName,
    };
};
exports.launch = async (options = {}) => {
    const launchOptions = exports.getLaunchOptions(options);
    debug('launch %j', launchOptions);
    const browser = await exports.getBrowserType(launchOptions.browserName).launch(launchOptions);
    Registry_1.Registry.instance().setBrowser(browser);
    return browser;
};
//# sourceMappingURL=launch.js.map