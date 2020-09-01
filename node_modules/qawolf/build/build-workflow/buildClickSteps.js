"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClickSteps = void 0;
const target_1 = require("./target");
const CLICK_EVENTS = ['click', 'mousedown'];
const shouldIncludeClickEvent = (event, previousEvent) => {
    // ignore system initiated clicks
    if (!event.isTrusted)
        return false;
    // ignore non-click events
    if (!CLICK_EVENTS.includes(event.name))
        return false;
    // ignore clicks on selects
    if (event.target.name === 'select')
        return false;
    // skip system-initiated clicks triggered by a key press
    // ex. "Enter" triggers a click on a submit input
    if (previousEvent &&
        ['change', 'keydown', 'keyup'].includes(previousEvent.name) &&
        event.time - previousEvent.time < 50) {
        return false;
    }
    return true;
};
const groupClickEvents = (events) => {
    const clickGroups = [];
    let group = [];
    events.forEach((event, i) => {
        const previousEvent = events[i - 1];
        if (!shouldIncludeClickEvent(event, previousEvent))
            return;
        // always group clicks with the previous mousedown/click events
        // a click will follow a mousedown if the mouse was released within the same element
        // a click will follow a click if it propagated to a higher element (a click on a label propagates to the input)
        if (!group.length || event.name === 'click') {
            group.push(event);
            return;
        }
        // start a new group
        clickGroups.push(group);
        group = [event];
    });
    if (group.length) {
        // append last group
        clickGroups.push(group);
    }
    return clickGroups;
};
exports.buildClickSteps = (events) => {
    const groupedClickEvents = groupClickEvents(events);
    const steps = [];
    groupedClickEvents.forEach((events) => {
        let event = events[0];
        const inputEvent = events.find((event) => target_1.isInputTarget(event.target));
        if (inputEvent) {
            // if an event in the group is on an input, assume the click propagated
            // to an element like a checkbox or radio, which is most accurate target
            event = inputEvent;
        }
        steps.push({
            action: 'click',
            event,
            index: steps.length,
        });
    });
    return steps;
};
//# sourceMappingURL=buildClickSteps.js.map