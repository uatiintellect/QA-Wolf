"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTemplate = exports.buildPath = void 0;
const create_qawolf_1 = require("create-qawolf");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const buildTemplate_1 = require("../build-code/buildTemplate");
exports.buildPath = ({ name, rootDir, useTypeScript, }) => {
    const extension = useTypeScript ? 'ts' : 'js';
    const filename = `${name}.test.${extension}`;
    return path_1.join(rootDir, filename);
};
exports.saveTemplate = async (options) => {
    const path = exports.buildPath(options);
    if (!(await create_qawolf_1.promptOverwrite(path)))
        return null;
    const templateFn = options.templateFn || buildTemplate_1.buildTemplate;
    const code = await templateFn(options);
    await fs_extra_1.ensureFile(path);
    await fs_extra_1.writeFile(path, code);
    return path;
};
//# sourceMappingURL=saveTemplate.js.map