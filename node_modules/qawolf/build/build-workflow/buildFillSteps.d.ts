import { ElementEvent, Step } from '../types';
/**
 * @summary Given a list of captured browser page events, returns a list of input fill
 *   steps that should be included when playing back the flow for testing purposes.
 */
export declare const buildFillSteps: (events: ElementEvent[]) => Step[];
