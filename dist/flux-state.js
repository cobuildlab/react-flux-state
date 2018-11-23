!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("flux")):"function"==typeof define&&define.amd?define(["flux"],r):"object"==typeof exports?exports["flux-state"]=r(require("flux")):t["flux-state"]=r(t.flux)}(window,function(t){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=9)}([function(t,r,e){"use strict";(function(t){var e="undefined"!=typeof window&&window,n="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,o=e||void 0!==t&&t||n;r.root=o,function(){if(!o)throw new Error("RxJS could not find any global context (window, self, global)")}()}).call(this,e(11))},function(t,r,e){"use strict";var n=e(13),o=e(14),i=e(4),s=e(15),c=e(5),u=e(16),a=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,r=!1;if(!this.closed){var e=this._parent,a=this._parents,h=this._unsubscribe,b=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var l=-1,p=a?a.length:0;e;)e.remove(this),e=++l<p&&a[l]||null;if(i.isFunction(h))s.tryCatch(h).call(this)===c.errorObject&&(r=!0,t=t||(c.errorObject.e instanceof u.UnsubscriptionError?f(c.errorObject.e.errors):[c.errorObject.e]));if(n.isArray(b))for(l=-1,p=b.length;++l<p;){var y=b[l];if(o.isObject(y))if(s.tryCatch(y.unsubscribe).call(y)===c.errorObject){r=!0,t=t||[];var v=c.errorObject.e;v instanceof u.UnsubscriptionError?t=t.concat(f(v.errors)):t.push(v)}}if(r)throw new u.UnsubscriptionError(t)}},t.prototype.add=function(r){if(!r||r===t.EMPTY)return t.EMPTY;if(r===this)return this;var e=r;switch(typeof r){case"function":e=new t(r);case"object":if(e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if("function"!=typeof e._addParent){var n=e;(e=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(e),e._addParent(this),e},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},t.prototype._addParent=function(t){var r=this._parent,e=this._parents;r&&r!==t?e?-1===e.indexOf(t)&&e.push(t):this._parents=[t]:this._parent=t},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function f(t){return t.reduce(function(t,r){return t.concat(r instanceof u.UnsubscriptionError?r.errors:r)},[])}r.Subscription=a},function(t,r,e){"use strict";var n=e(0).root.Symbol;r.rxSubscriber="function"==typeof n&&"function"==typeof n.for?n.for("rxSubscriber"):"@@rxSubscriber",r.$$rxSubscriber=r.rxSubscriber},function(t,r,e){"use strict";var n=this&&this.__extends||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},o=e(4),i=e(1),s=e(6),c=e(2),u=function(t){function r(r,e,n){switch(t.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=s.empty;break;case 1:if(!r){this.destination=s.empty;break}if("object"==typeof r){if(f(r)){var o=r[c.rxSubscriber]();this.syncErrorThrowable=o.syncErrorThrowable,this.destination=o,o.add(this)}else this.syncErrorThrowable=!0,this.destination=new a(this,r);break}default:this.syncErrorThrowable=!0,this.destination=new a(this,r,e,n)}}return n(r,t),r.prototype[c.rxSubscriber]=function(){return this},r.create=function(t,e,n){var o=new r(t,e,n);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parent,r=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=r,this},r}(i.Subscription);r.Subscriber=u;var a=function(t){function r(r,e,n,i){var c;t.call(this),this._parentSubscriber=r;var u=this;o.isFunction(e)?c=e:e&&(c=e.next,n=e.error,i=e.complete,e!==s.empty&&(u=Object.create(e),o.isFunction(u.unsubscribe)&&this.add(u.unsubscribe.bind(u)),u.unsubscribe=this.unsubscribe.bind(this))),this._context=u,this._next=c,this._error=n,this._complete=i}return n(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber;if(this._error)r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else{if(!r.syncErrorThrowable)throw this.unsubscribe(),t;r.syncErrorValue=t,r.syncErrorThrown=!0,this.unsubscribe()}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};r.syncErrorThrowable?(this.__tryOrSetError(r,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){throw this.unsubscribe(),t}},r.prototype.__tryOrSetError=function(t,r,e){try{r.call(this._context,e)}catch(r){return t.syncErrorValue=r,t.syncErrorThrown=!0,!0}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(u);function f(t){return t instanceof u||"syncErrorThrowable"in t&&t[c.rxSubscriber]}},function(t,r,e){"use strict";r.isFunction=function(t){return"function"==typeof t}},function(t,r,e){"use strict";r.errorObject={e:{}}},function(t,r,e){"use strict";r.empty={closed:!0,next:function(t){},error:function(t){throw t},complete:function(){}}},function(t,r,e){"use strict";var n=this&&this.__extends||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},o=e(10),i=e(3),s=e(1),c=e(20),u=e(21),a=e(2),f=function(t){function r(r){t.call(this,r),this.destination=r}return n(r,t),r}(i.Subscriber);r.SubjectSubscriber=f;var h=function(t){function r(){t.call(this),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return n(r,t),r.prototype[a.rxSubscriber]=function(){return new f(this)},r.prototype.lift=function(t){var r=new b(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;if(!this.isStopped)for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new c.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,r=t.length,e=t.slice(),n=0;n<r;n++)e[n].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new c.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),s.Subscription.EMPTY):this.isStopped?(t.complete(),s.Subscription.EMPTY):(this.observers.push(t),new u.SubjectSubscription(this,t))},r.prototype.asObservable=function(){var t=new o.Observable;return t.source=this,t},r.create=function(t,r){return new b(t,r)},r}(o.Observable);r.Subject=h;var b=function(t){function r(r,e){t.call(this),this.destination=r,this.source=e}return n(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.Subscription.EMPTY},r}(h);r.AnonymousSubject=b},function(r,e){r.exports=t},function(t,r,e){t.exports=e(22)},function(t,r,e){"use strict";var n=e(0),o=e(12),i=e(17),s=e(18),c=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n=this.operator,i=o.toSubscriber(t,r,e);if(n?n.call(i,this.source):i.add(this.source||!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.syncErrorThrown=!0,t.syncErrorValue=r,t.error(r)}},t.prototype.forEach=function(t,r){var e=this;if(r||(n.root.Rx&&n.root.Rx.config&&n.root.Rx.config.Promise?r=n.root.Rx.config.Promise:n.root.Promise&&(r=n.root.Promise)),!r)throw new Error("no Promise impl found");return new r(function(r,n){var o;o=e.subscribe(function(r){if(o)try{t(r)}catch(t){n(t),o.unsubscribe()}else t(r)},n,r)})},t.prototype._subscribe=function(t){return this.source.subscribe(t)},t.prototype[i.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];return 0===t.length?this:s.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var r=this;if(t||(n.root.Rx&&n.root.Rx.config&&n.root.Rx.config.Promise?t=n.root.Rx.config.Promise:n.root.Promise&&(t=n.root.Promise)),!t)throw new Error("no Promise impl found");return new t(function(t,e){var n;r.subscribe(function(t){return n=t},function(t){return e(t)},function(){return t(n)})})},t.create=function(r){return new t(r)},t}();r.Observable=c},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";var n=e(3),o=e(2),i=e(6);r.toSubscriber=function(t,r,e){if(t){if(t instanceof n.Subscriber)return t;if(t[o.rxSubscriber])return t[o.rxSubscriber]()}return t||r||e?new n.Subscriber(t,r,e):new n.Subscriber(i.empty)}},function(t,r,e){"use strict";r.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,r,e){"use strict";r.isObject=function(t){return null!=t&&"object"==typeof t}},function(t,r,e){"use strict";var n,o=e(5);function i(){try{return n.apply(this,arguments)}catch(t){return o.errorObject.e=t,o.errorObject}}r.tryCatch=function(t){return n=t,i}},function(t,r,e){"use strict";var n=this&&this.__extends||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},o=function(t){function r(r){t.call(this),this.errors=r;var e=Error.call(this,r?r.length+" errors occurred during unsubscription:\n  "+r.map(function(t,r){return r+1+") "+t.toString()}).join("\n  "):"");this.name=e.name="UnsubscriptionError",this.stack=e.stack,this.message=e.message}return n(r,t),r}(Error);r.UnsubscriptionError=o},function(t,r,e){"use strict";var n=e(0);function o(t){var r,e=t.Symbol;return"function"==typeof e?e.observable?r=e.observable:(r=e("observable"),e.observable=r):r="@@observable",r}r.getSymbolObservable=o,r.observable=o(n.root),r.$$observable=r.observable},function(t,r,e){"use strict";var n=e(19);function o(t){return t?1===t.length?t[0]:function(r){return t.reduce(function(t,r){return r(t)},r)}:n.noop}r.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];return o(t)},r.pipeFromArray=o},function(t,r,e){"use strict";r.noop=function(){}},function(t,r,e){"use strict";var n=this&&this.__extends||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},o=function(t){function r(){var r=t.call(this,"object unsubscribed");this.name=r.name="ObjectUnsubscribedError",this.stack=r.stack,this.message=r.message}return n(r,t),r}(Error);r.ObjectUnsubscribedError=o},function(t,r,e){"use strict";var n=this&&this.__extends||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},o=function(t){function r(r,e){t.call(this),this.subject=r,this.subscriber=e,this.closed=!1}return n(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var e=r.indexOf(this.subscriber);-1!==e&&r.splice(e,1)}}},r}(e(1).Subscription);r.SubjectSubscription=o},function(t,r,e){"use strict";e.r(r);var n={validateText:function(t){if(void 0===t)throw new Error("text can't be undefined");if(null===t)throw new Error("text can't be null");if(""===t)throw new Error("text can't be an empty string");return t},log:function(t,r){window.DEBUG&&(r?console.log(t,r):console.log(t))}},o=e(7);function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(r,e){if(function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),n.log("v2/Event:constructor"),this.name=n.validateText(r),this.transformers=new Array,this.value=null,this.subject=new o.Subject,void 0!==e){if(!Array.isArray(e))throw new Error("Transformers must be an Array");if(0==e.length)throw new Error("Transformers Array shouldn't be empty");e.forEach(function(t){if("function"!=typeof t)throw new Error("All the transformers must be functions")}),this.transformers=e}}return function(t,r,e){r&&i(t.prototype,r),e&&i(t,e)}(t,[{key:"subscribe",value:function(t){if(n.log("v2/Event:subscribe"),"function"!=typeof t)throw new Error("subscriber must be a function");return this.subject.subscribe(t)}},{key:"notify",value:function(t){n.log("v2/Event:notify"),0==this.subject.observers.length&&console.warn("No subscriber for ".concat(this.name,", no side effects generated"));var r=t;this.transformers.forEach(function(t){r=t(r)}),this.value=r,this.subject.next(this.value)}}]),t}(),c=new(e(8).Dispatcher);c.register(function(t){var r=t.eventName,e=t.eventData;n.log("v2/index:handleDispatch");var o=!1;if(u.forEach(function(t){t.name===r&&(t.notify(e),o=!0)}),!o)throw new Error("No event: ".concat(r," exists in the System"))});var u=new Array;function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),n.log("v2/Store:constructor"),this.events=[]}return function(t,r,e){r&&a(t.prototype,r),e&&a(t,e)}(t,[{key:"addEvent",value:function(t){n.log("v2/Store:addEvent");var r,e=n.validateText(t);this.events.forEach(function(t){if(t.name===e)throw new Error("STORE: An event named: ".concat(e," already exists on the Store"))});for(var o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];r=i.length>0?new s(t,i):new s(t),this.events.push(r),u.push(r)}},{key:"subscribe",value:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n.log("v2/Store:subscribe");var o=n.validateText(t);if("function"!=typeof r)throw new Error("subscriber must be a function");for(var i=0;i<this.events.length;i++){var s=this.events[i];if(s.name===o){var c=s.subscribe(r);return e&&r(s.value),c}}throw new Error("Non existent eventName: ".concat(o," on Store"))}},{key:"getState",value:function(t){if(n.log("v2/Store:getState"),void 0!==t&&null!==t)return this.__getEventState(t);var r={};return this.events.forEach(function(t){var e=t.value,n=t.name;r=Object.assign(r,function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}({},n,e))}),r}},{key:"__getEventState",value:function(t){n.log("v2/Store:__getEventState");for(var r=0;r<this.events.length;r++)if(this.events[r].name===t)return this.events[r].value;throw new Error("Non existent eventName: ".concat(t," on Store"))}},{key:"clearState",value:function(){n.log("v2/Store:clearState"),this.events.forEach(function(t){return t.value=null})}}]),t}();r.default={DashStore:f,DashEvent:s,dispatchEvent:function(t,r){n.log("v2/index:dispatchEvent"),n.validateText(t),c.dispatch({eventName:t,eventData:r})}}}])});
//# sourceMappingURL=flux-state.js.map