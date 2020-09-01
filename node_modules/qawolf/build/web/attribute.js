"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAttribute = exports.getAttribute = exports.getRegexAttribute = exports.deserializeRegex = exports.DEFAULT_ATTRIBUTE_LIST = void 0;
exports.DEFAULT_ATTRIBUTE_LIST = 'data-cy,data-e2e,data-qa,/^data-test.*/,/^qa-.*/';
exports.deserializeRegex = (regexString) => {
    try {
        const parts = regexString.match(/\/(.*)\/(.*)?/);
        return new RegExp(parts[1], parts[2] || '');
    }
    catch (e) {
        console.error(`qawolf: invalid regex attribute ${regexString}, skipping this attribute`);
        return null;
    }
};
exports.getRegexAttribute = ({ element, regexString, }) => {
    const regex = exports.deserializeRegex(regexString);
    if (!regex)
        return null;
    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
        const { name, value } = attributes[i];
        if (name.match(regex)) {
            return { name, value };
        }
    }
    return null;
};
exports.getAttribute = ({ attribute, element, }) => {
    const isRegex = attribute[0] === '/';
    if (isRegex) {
        return exports.getRegexAttribute({
            element,
            regexString: attribute,
        });
    }
    const value = element.getAttribute(attribute);
    if (!value)
        return null;
    return { name: attribute, value };
};
exports.hasAttribute = (element, attributes) => {
    return !!attributes.find((attribute) => exports.getAttribute({ attribute, element }));
};
//# sourceMappingURL=attribute.js.map