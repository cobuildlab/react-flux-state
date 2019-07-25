import React, {useState, useEffect} from 'react';

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
 * React Hook to use Flux State Library
 * @param store
 * @param eventName
 * @param initialValue
 * @param receiveLastValue
 */
const useFluxStore = (store, eventName, initialValue = null, receiveLastValue = false) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handleStateChange = (state) => setValue(state);
    const subscription = store.subscribe(eventName, handleStateChange, receiveLastValue);
    return () => {
      subscription.unsubscribe();
    };
  });

  return value;
};


export default View;
export {useFluxStore};
