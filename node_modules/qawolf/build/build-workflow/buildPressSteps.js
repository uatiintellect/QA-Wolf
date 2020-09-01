"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPressSteps = void 0;
const debug_1 = __importDefault(require("debug"));
const target_1 = require("./target");
const debug = debug_1.default('qawolf:buildPressSteps');
/**
 * The full list:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */
const KEYS_TO_TRACK_FOR_CONTENTEDITABLE = new Set([
    // Enter types a line break, shouldn't be a press.
    'Escape',
    // NOTE: Sometimes tab types a tab character, but this seems to be
    // only with libraries like Quill that must intercept the keydown.
    // It seems difficult to detect when this is happening, so for now
    // an extra Tab press may be built and would need to be manually
    // deleted from the generated test.
    'Tab'
]);
const KEYS_TO_TRACK_FOR_INPUT = new Set([
    'Enter',
    'Escape',
    'Tab'
]);
const KEYS_TO_TRACK_FOR_TEXTAREA = new Set([
    // Enter types a line break, shouldn't be a press.
    'Escape',
    'Tab'
]);
/**
 * These are key presses that we want to include when playing back as long as they
 * aren't being pressed as part of editing some input text.
 */
const KEYS_TO_TRACK_FOR_NON_INPUT = new Set([
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'Backspace',
    'Delete',
    'End',
    'Enter',
    'Escape',
    'Home',
    'PageDown',
    'PageUp',
    'Tab'
]);
/**
 * @summary Determines whether a key press event should be included as part of the
 *   test code being built. Some keys are always included and some are included only
 *   when we're not editing text, i.e. the target isn't an input of some sort.
 * @param {String} key The name of the key that was pressed.
 * @param {Object} target Some details about the event target.
 * @return {Boolean} True if we should include this key as part of the playback script.
 */
const shouldTrackKeyPress = (key, target) => {
    if (target_1.isInputTarget(target))
        return KEYS_TO_TRACK_FOR_INPUT.has(key);
    if (target_1.isTextareaTarget(target))
        return KEYS_TO_TRACK_FOR_TEXTAREA.has(key);
    if (target_1.isContentEditableTarget(target))
        return KEYS_TO_TRACK_FOR_CONTENTEDITABLE.has(key);
    return KEYS_TO_TRACK_FOR_NON_INPUT.has(key);
};
/**
 * @summary Given a list of captured browser page events, returns a list of key press
 *   steps that should be included when playing back the flow for testing purposes.
 */
exports.buildPressSteps = (events) => {
    debug('building press steps');
    return events.reduce((pressSteps, event) => {
        if (event.name === 'keydown') {
            const { value } = event;
            if (shouldTrackKeyPress(value, event.target)) {
                debug(`build press step for keydown ${value}`);
                pressSteps.push({
                    action: 'press',
                    event,
                    index: pressSteps.length,
                    value,
                });
            }
            else {
                debug(`not building press step for keydown ${value}`);
            }
        }
        return pressSteps;
    }, []);
};
//# sourceMappingURL=buildPressSteps.js.map