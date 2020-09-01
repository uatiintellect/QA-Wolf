"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLinesIncluding = exports.indent = exports.getIndentation = exports.getLineIncludes = void 0;
const lodash_1 = require("lodash");
exports.getLineIncludes = (stringValue, searchValue) => {
    return stringValue.split('\n').find(line => line.includes(searchValue));
};
exports.getIndentation = (stringValue, searchValue) => {
    const codeLine = exports.getLineIncludes(stringValue, searchValue);
    if (!codeLine)
        return 0;
    return codeLine.indexOf(searchValue);
};
exports.indent = (code, numSpaces, startLineIndex = 0) => {
    const indent = lodash_1.repeat(' ', numSpaces);
    return code
        .split('\n')
        .map((line, index) => {
        if (index >= startLineIndex)
            return `${indent}${line}`;
        return line;
    })
        .join('\n');
};
exports.removeLinesIncluding = (stringValue, searchValue) => {
    return stringValue
        .split('\n')
        .filter(line => !line.includes(searchValue))
        .join('\n');
};
//# sourceMappingURL=format.js.map