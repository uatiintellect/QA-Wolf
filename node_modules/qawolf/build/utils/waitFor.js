"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFor = void 0;
exports.waitFor = async (predicate, options = {}) => {
    const value = await predicate();
    if (value)
        return value;
    const timeout = isNaN(options.timeout) ? 30000 : options.timeout;
    const interval = isNaN(options.interval) ? 100 : options.interval;
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-const
        let intervalId, timeoutId;
        let isDone = false;
        const done = (value) => {
            if (isDone)
                return;
            isDone = true;
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            if (value)
                resolve(value);
            else
                reject(`waitFor timed out after ${timeout}ms`);
        };
        intervalId = setInterval(async () => {
            const value = await predicate();
            if (value)
                done(value);
        }, interval);
        timeoutId = setTimeout(() => done(), timeout);
    });
};
//# sourceMappingURL=waitFor.js.map