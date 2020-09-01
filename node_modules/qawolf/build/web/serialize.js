"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToDoc = exports.getXpath = void 0;
const buildXpath = (node) => {
    // only build xpaths for elements
    if (!node || node.nodeType !== 1)
        return '';
    const element = node;
    if (element.id) {
        // xpath has no way to escape quotes so use the opposite
        // https://stackoverflow.com/a/14822893
        const quote = element.id.includes(`'`) ? `"` : `'`;
        return `//*[@id=${quote}${element.id}${quote}]`;
    }
    const children = element.parentNode ? element.parentNode.children : [];
    const sames = [].filter.call(children, (x) => {
        return x.tagName === element.tagName;
    });
    const result = buildXpath(element.parentNode) +
        '/' +
        element.tagName.toLowerCase() +
        (sames.length > 1
            ? '[' + ([].indexOf.call(sames, element) + 1) + ']'
            : '');
    return result;
};
exports.getXpath = (node) => {
    const result = buildXpath(node);
    return result
        .replace('svg', "*[name()='svg']")
        .replace('path', "*[name()='path']");
};
exports.nodeToDoc = (node) => {
    const name = (node.tagName || '').toLowerCase();
    const attrs = {};
    const attributes = node.attributes || [];
    for (let i = attributes.length - 1; i >= 0; i--) {
        attrs[attributes[i].name] = attributes[i].value;
    }
    return {
        attrs,
        name,
    };
};
//# sourceMappingURL=serialize.js.map