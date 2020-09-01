"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildJestArguments = void 0;
exports.buildJestArguments = ({ config, ...options }) => {
    const builtArgs = [];
    const providedArgs = options.args || [];
    if (config.config) {
        // for powershell: must be wrapped in quotes
        builtArgs.push(`--config="${config.config}"`);
    }
    builtArgs.push(`--rootDir=${config.rootDir}`);
    const hasTimeoutArg = !!providedArgs.find((arg) => arg.toLowerCase().includes('testtimeout'));
    if (!hasTimeoutArg) {
        builtArgs.push(`--testTimeout=${config.testTimeout}`);
    }
    if (providedArgs.length) {
        builtArgs.push(...providedArgs);
    }
    if (options.testPath) {
        // for powershell: must be forward slashes and wrapped in quotes
        const testPath = options.testPath.replace(/\\/g, '/');
        builtArgs.push(`"${testPath}"`);
    }
    return builtArgs;
};
//# sourceMappingURL=buildJestArguments.js.map