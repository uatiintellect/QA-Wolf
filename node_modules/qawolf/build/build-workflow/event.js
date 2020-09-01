"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPasteEvent = exports.isKeyEvent = exports.isInputEvent = exports.isChangeEvent = void 0;
exports.isChangeEvent = (event) => event && event.isTrusted && event.name === 'change';
exports.isInputEvent = (event) => event && event.isTrusted && event.name === 'input';
exports.isKeyEvent = (event) => event &&
    event.isTrusted &&
    (event.name === 'keydown' || event.name === 'keyup');
exports.isPasteEvent = (event) => event && event.isTrusted && event.name === 'paste';
//# sourceMappingURL=event.js.map