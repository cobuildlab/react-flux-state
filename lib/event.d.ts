import { Subscription } from 'rxjs';
declare type EventDescriptor = {
    initialValue: null | any;
    reducer: Function;
};
/**
 * New Event Classes
 */
export declare class Event {
    #private;
    constructor(eventDescriptor: EventDescriptor);
    subscribe(subscriber: (value?: any) => void, receiveLastValue?: boolean): Subscription;
    dispatch(value: any): void;
    get(): any;
}
export declare const createEvent: (eventDescriptor: EventDescriptor) => Event;
export {};
