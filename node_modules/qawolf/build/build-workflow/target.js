"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextareaTarget = exports.isInputTarget = exports.isContentEditableTarget = void 0;
exports.isContentEditableTarget = (target) => {
    const { contenteditable } = target.attrs || {};
    return contenteditable && contenteditable !== "false";
};
exports.isInputTarget = (target) => {
    const name = target.name || '';
    return name.toLowerCase() === 'input';
};
exports.isTextareaTarget = (target) => {
    const name = target.name || '';
    return name.toLowerCase() === 'textarea';
};
//# sourceMappingURL=target.js.map