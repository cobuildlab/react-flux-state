"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _value, _reducer, _subject;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = exports.Event = void 0;
const rxjs_1 = require("rxjs");
const clone = require("ramda/src/clone");
/**
 * New Event Classes
 */
class Event {
    constructor(eventDescriptor) {
        _value.set(this, null);
        _reducer.set(this, null);
        _subject.set(this, new rxjs_1.Subject());
        __classPrivateFieldSet(this, _value, eventDescriptor.initialValue);
        __classPrivateFieldSet(this, _reducer, eventDescriptor.reducer);
    }
    subscribe(subscriber, receiveLastValue = false) {
        const observer = {
            next: subscriber
        };
        if (receiveLastValue)
            subscriber(this.get());
        return __classPrivateFieldGet(this, _subject).subscribe(observer);
    }
    dispatch(value) {
        __classPrivateFieldSet(this, _value, value);
        __classPrivateFieldGet(this, _subject).next(value);
    }
    get() {
        return clone(__classPrivateFieldGet(this, _value));
    }
}
exports.Event = Event;
_value = new WeakMap(), _reducer = new WeakMap(), _subject = new WeakMap();
exports.createEvent = (eventDescriptor) => {
    return new Event(eventDescriptor);
};
