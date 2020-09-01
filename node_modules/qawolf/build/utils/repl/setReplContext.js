"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setReplContext = void 0;
const Registry_1 = require("../Registry");
const setPage = (context) => {
    const { context: browserContext } = Registry_1.Registry.instance().data();
    if (!browserContext)
        return;
    const pages = browserContext.pages();
    if (pages.length > 0)
        context.page = pages[0];
};
const setValues = (object, source) => {
    Object.keys(source).forEach((key) => {
        object[key] = source[key];
    });
};
const setContext = (context, provided) => {
    setValues(context, Registry_1.Registry.instance().data());
    // override with the provided values
    if (provided)
        setValues(context, provided);
    setPage(context);
};
exports.setReplContext = (context, provided) => {
    Registry_1.Registry.instance().on('change', () => setContext(context, provided));
    setContext(context, provided);
};
//# sourceMappingURL=setReplContext.js.map