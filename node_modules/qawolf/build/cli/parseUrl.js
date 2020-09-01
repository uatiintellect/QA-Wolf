"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
const url_1 = require("url");
exports.parseUrl = (urlString) => {
    let url = url_1.parse(urlString);
    // prefix w/ https if a protocol is not provided
    if (!url.protocol) {
        url = url_1.parse(`https://${urlString}`);
    }
    if (!url.hostname) {
        throw new Error(`Invalid url ${urlString}`);
    }
    return url;
};
//# sourceMappingURL=parseUrl.js.map