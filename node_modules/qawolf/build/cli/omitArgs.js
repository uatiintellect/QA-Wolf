"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitArgs = void 0;
exports.omitArgs = (args, argsToOmit) => {
    return args.filter(arg => !argsToOmit.some(skip => arg.startsWith(skip)));
};
//# sourceMappingURL=omitArgs.js.map