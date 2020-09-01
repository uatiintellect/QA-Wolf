"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildScrollSteps = void 0;
exports.buildScrollSteps = (events) => {
    const steps = [];
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        // ignore other actions
        if (event.name !== 'scroll')
            continue;
        // ignore system initiated scrolls
        if (!event.isTrusted)
            continue;
        // skip to the last scroll on this target
        const nextEvent = i + 1 < events.length ? events[i + 1] : null;
        if (nextEvent && nextEvent.name === 'scroll')
            continue;
        steps.push({
            action: 'scroll',
            event,
            index: steps.length,
            value: event.value,
        });
    }
    return steps;
};
//# sourceMappingURL=buildScrollSteps.js.map