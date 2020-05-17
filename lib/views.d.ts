import { Component } from "react";
import { Store } from "./types";
import { Event } from "./event";
export declare abstract class View extends Component {
    #private;
    /**
     * Subscribe to an Event in a Store
     * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component
     * @param store The Store object where we want to subscribe to, must be a subclass of v2/Store
     * @param eventName The Event Name to which you want to subscribe
     * @param callback The callback function that's gonna be executed when it happens
     * @param receiveLastValue Whether the callback
     * @return subscription The subscription for this event in the Store
     * @throws an Error if the event does not exists in the Store
     * @throws an Error if the callback is not a function
     */
    subscribe(store: Store, eventName: string, callback: (value?: any) => void, receiveLastValue?: boolean): any;
    /**
     * Subscribe to an Event
     * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component
     * @param {Event} event - The Event object to which you want to subscribe
     * @param {Function }callback - The callback function that's gonna be executed when it happens
     * @param {boolean}receiveLastValue - Whether the callback should receive the last value immediately
     * @return {Subscription} subscription The subscription for this event in the Store
     */
    subscribeTo(event: Event, callback: (value?: any) => void, receiveLastValue?: boolean): import("rxjs").Subscription;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
