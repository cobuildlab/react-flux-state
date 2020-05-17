import { Store } from "./types";
import { Event } from "./event";
/**
 * React Hook to subscribe to an specific event
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param callback a function to be called when the subscription gets triggered
 */
declare const useSubscription: (store: Store, eventName: string, callback: Function) => void;
export { useSubscription };
export declare type EventHookParams = {
    initialValue?: any;
    reducer?: Function;
    receiveLastValue: false;
};
/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
declare const useEvent: (event: Event, params: EventHookParams) => any;
export { useEvent };
/**
 * React Hook to use an Event of the Store of the Flux State Library.
 * @deprecated use useEvent instead
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param initialValue An Initial Value for the state
 * @param callback a function to be called when the subscription gets triggered
 */
declare const useFluxStore: (store: Store, eventName: string, initialValue?: any, callback?: null | Function) => any;
export { useFluxStore };
