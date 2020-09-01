import { ElementEvent, Step } from '../types';
/**
 * @summary Given a list of captured browser page events, returns a list of key press
 *   steps that should be included when playing back the flow for testing purposes.
 */
export declare const buildPressSteps: (events: ElementEvent[]) => Step[];
