"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const events_1 = require("events");
class Registry extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this._data = {};
    }
    static instance() {
        return this._instance;
    }
    data() {
        return this._data;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    _setValue(key, value) {
        this._data[key] = value;
        this.emit('change');
    }
    setBrowser(browser) {
        this._setValue('browser', browser);
    }
    setContext(context) {
        this._setValue('context', context);
    }
    setQawolf(value) {
        this._setValue('qawolf', value);
    }
}
exports.Registry = Registry;
Registry._instance = new Registry();
//# sourceMappingURL=Registry.js.map