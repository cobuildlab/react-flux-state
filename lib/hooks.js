"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFluxStore = exports.useEvent = exports.useSubscription = void 0;
const react_1 = require("react");
/**
 * React Hook to subscribe to an specific event
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param callback a function to be called when the subscription gets triggered
 */
const useSubscription = (store, eventName, callback) => {
    if (callback === null || callback === undefined || typeof callback !== 'function')
        throw new Error(`'callback parameter must be a function`);
    react_1.useEffect(() => {
        const subscription = store.subscribe(eventName, callback);
        return () => {
            subscription.unsubscribe();
        };
    });
};
exports.useSubscription = useSubscription;
/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
const useEvent = (event, params) => {
    const [value, setValue] = react_1.useState(params.initialValue);
    react_1.useEffect(() => {
        const handleStateChange = (state) => {
            if (params.reducer)
                state = params.reducer(state);
            setValue(state);
        };
        const subscription = event.subscribe(handleStateChange);
        return () => {
            subscription.unsubscribe();
        };
    });
    if (params.receiveLastValue)
        return event.get();
    return value;
};
exports.useEvent = useEvent;
/**
 * React Hook to use an Event of the Store of the Flux State Library.
 * @deprecated use useEvent instead
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param initialValue An Initial Value for the state
 * @param callback a function to be called when the subscription gets triggered
 */
const useFluxStore = (store, eventName, initialValue = null, callback = null) => {
    const [value, setValue] = react_1.useState(initialValue);
    react_1.useEffect(() => {
        const handleStateChange = (state) => {
            if (callback)
                callback(state);
            setValue(state);
        };
        const subscription = store.subscribe(eventName, handleStateChange);
        return () => {
            subscription.unsubscribe();
        };
    });
    return value;
};
exports.useFluxStore = useFluxStore;
