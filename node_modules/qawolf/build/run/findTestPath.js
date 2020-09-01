"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTestPath = void 0;
const fs_extra_1 = require("fs-extra");
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const isFile = async (path) => {
    const stat = await fs_extra_1.lstat(path);
    return stat.isFile();
};
exports.findTestPath = async ({ name, rootDir, }) => {
    if (path_1.default.isAbsolute(name) && (await isFile(name)))
        return name;
    let ext = '';
    // include the expected extension in the glob
    if (!path_1.default.extname(name))
        ext = '{ts,js}';
    const files = await new Promise((resolve, reject) => {
        glob_1.default(`**/*${name}*${ext}`, { absolute: true, cwd: rootDir }, (error, files) => {
            if (error)
                reject(error);
            else
                resolve(files);
        });
    });
    if (files.length < 1) {
        throw new Error(`No files match "${name}"`);
    }
    if (files.length > 1) {
        throw new Error(`Multiple files match "${name}"`);
    }
    const testPath = files[0];
    if (!(await isFile(testPath))) {
        throw new Error(`No tests match "${name}"`);
    }
    return testPath;
};
//# sourceMappingURL=findTestPath.js.map