import React, {useState, useEffect, useRef} from 'react';

class View extends React.Component {

  constructor(props) {
    super(props);
    if (new.target === View) {
      throw new TypeError("Cannot construct View instances directly");
    }
    this.subscriptions = [];
    this.toBeSubscribed = [];
    this.hasBeenUnmounted = false;
  }

  /**
   * Subscribe to an Event in a Store
   * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component
   * @param store The Store object where we want to subscribe to, must be a subclass of v2/Store
   * @param eventName The Event Name to which you want to subscribe
   * @param subscriber The subscriber function that's gonna be executed when it happens
   * @param receiveLastValue Whether the subscriber
   * @return subscription The subscription for this event in the Store
   * @throws an Error if the event does not exists in the Store
   * @throws an Error if the subscriber is not a function
   */
  subscribe(store, eventName, subscriber, receiveLastValue = false) {
    const subscription = store.subscribe(eventName, subscriber, receiveLastValue);
    this.toBeSubscribed.push({store, eventName, subscriber, receiveLastValue});
    this.subscriptions.push(subscription);
    return subscription;
  }

  componentDidMount() {
    if (!this.hasBeenUnmounted)
      return;
    const that = this;
    this.toBeSubscribed.forEach(info => {
      const subscription = info.store.subscribe(info.eventName, info.subscriber, info.receiveLastValue);
      that.subscriptions.push(subscription);
    });

  }

  componentWillUnmount() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
    this.hasBeenUnmounted = true;
  }
}

/**
 * React Hook to use an Event of the Store of the Flux State Library.
 * @deprecated use useEvent instead
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param initialValue An Initial Value for the state
 * @param callback a function to be called when the subscription gets triggered
 */
const useFluxStore = (store, eventName, initialValue = null, callback = null) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handleStateChange = (state) => {
      if (callback)
        callback(state);
      setValue(state)
    };
    const subscription = store.subscribe(eventName, handleStateChange);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value;
};

/**
 * React Hook to subscribe to an Event of a Store of the Flux State Library.
 * @param {object} store - The Flux Store to which the events belongs.
 * @param {string} eventName - The event on the Flux Store.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
const useEvent = (store, eventName, initialValue = null, reducer = null) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handleStateChange = (state) => {
      if (reducer)
        state = reducer(state);
      setValue(state)
    };
    const subscription = store.subscribe(eventName, handleStateChange);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value;
};

/**
 * React Hook to subscribe to an specific event
 * @param store The Flux Store to which the events belongs
 * @param eventName The event on the Flux Store
 * @param callback a function to be called when the subscription gets triggered
 */
const useSubscription = (store, eventName, callback) => {
  if (callback === null || callback === undefined || typeof callback !== 'function')
    throw new Error(`'callback parameter must be a function`);


  // Store the callback in a ref and update it on every render
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    // Subscribe a function that gets the updated version of the callback 
    const subscriptionCallback = (eventData)=> {
      callbackRef.current(eventData)
    }

    const subscription = store.subscribe(eventName, subscriptionCallback);

    return () => {
      subscription.unsubscribe();
    };
  }, [eventName, store]);
};


export default View;
export {useFluxStore, useSubscription, useEvent, View};
