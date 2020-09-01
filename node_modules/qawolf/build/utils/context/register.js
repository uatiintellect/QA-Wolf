"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.getArtifactPath = exports.isRegistered = exports.addInitScript = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const config_1 = require("../../config");
const indexPages_1 = require("./indexPages");
const Registry_1 = require("../Registry");
const saveArtifacts_1 = require("./saveArtifacts");
const scriptPath = require.resolve('../../../build/qawolf.web.js');
const webScript = fs_1.readFileSync(scriptPath, 'utf8');
exports.addInitScript = async (context) => {
    const attribute = JSON.stringify(config_1.loadConfig().attribute);
    const script = '(() => {\n' +
        webScript +
        `new qawolf.PageEventCollector({ attribute: ${attribute} });\n` +
        'qawolf.interceptConsoleLogs();\n' +
        '})();';
    await context.addInitScript(script);
};
exports.isRegistered = (context) => {
    return !!context._qawRegistered;
};
exports.getArtifactPath = () => {
    let artifactPath = process.env.QAW_ARTIFACT_PATH;
    if (!artifactPath)
        return null;
    if (require.main) {
        // store artifacts under the name of the main module, if there is one
        // ex. /artifacts/search.test.js
        artifactPath = path_1.join(artifactPath, path_1.basename(require.main.filename));
    }
    // store artifacts under the name of the browser being tested
    const browserName = process.env.QAW_BROWSER;
    if (browserName && artifactPath) {
        artifactPath = path_1.join(artifactPath, browserName);
    }
    return artifactPath;
};
exports.register = async (context) => {
    Registry_1.Registry.instance().setContext(context);
    if (exports.isRegistered(context))
        return;
    context._qawRegistered = true;
    const promises = [];
    promises.push(exports.addInitScript(context));
    promises.push(indexPages_1.indexPages(context));
    const artifactPath = exports.getArtifactPath();
    if (artifactPath) {
        promises.push(saveArtifacts_1.saveArtifacts(context, artifactPath));
    }
    await Promise.all(promises);
};
//# sourceMappingURL=register.js.map