"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSelectOptionSteps = void 0;
exports.buildSelectOptionSteps = (events) => {
    const steps = [];
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        // ignore system initiated actions & other non-input actions
        if (!event.isTrusted || event.name !== 'input')
            continue;
        // ignore input events not on selects
        if (event.target.name !== 'select')
            continue;
        steps.push({
            action: 'selectOption',
            event,
            index: steps.length,
            value: event.value,
        });
    }
    return steps;
};
//# sourceMappingURL=buildSelectOptionSteps.js.map