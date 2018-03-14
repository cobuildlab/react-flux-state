!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("flux"),require("react")):"function"==typeof define&&define.amd?define(["flux","react"],t):"object"==typeof exports?exports["react-flux-dash"]=t(require("flux"),require("react")):e["react-flux-dash"]=t(e.flux,e.react)}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,a,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(o(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),s=(u=n.slice()).length,c=0;c<s;c++)u[c].apply(this,a);return!0},n.prototype.addListener=function(e,t){var s;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(2)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=new(n(0).Dispatcher),l=function(e){function t(){a(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},h.register(e.handleActions.bind(e)),e}return u(t,o.default),r(t,[{key:"setStoreState",value:function(e){var t=this;this.state=Object.assign(this.state,e);var n=!1;return this.emit("change"),setTimeout(function(){if(!1===n)throw new Error("Warning! You need to emit the store after updating the "+t.constructor.name)},1e3),{emit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"change";n=!0,t.emit(e)}}}},{key:"handleActions",value:function(e){var t=e.actionSlug.split("."),n=t[0],r=t[1];if("ALL"===n||n===this.constructor.name||"_"+n===this.constructor.name){if("function"==typeof this[r])throw new Error(n+"."+r+' must be prepended by _ (underscore) because is a "private" method');if(void 0===this["_"+r])throw new Error(n+" must have a method _"+r);if("function"!=typeof this["_"+r])throw new Error(n+"._"+r+" is not a function");this["_"+r](e.actionData)}}}]),t}(),f=function(e){function t(e){a(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._stores=[],n._callbacks={},n}return u(t,i.default.Component),r(t,[{key:"bindStore",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(void 0===e)throw new Error("Undefined StoreClass when calling bindStore on "+this.constructor.name);if("ALL"===e.constructor.name)throw new Error("StoreClass cannot be called 'ALL', it is a reserved word");var i="change";if("string"==typeof n){if(i=n,null===r){if(void 0===this.handleStoreChanges)throw new Error(this.constructor.name+" must implement a 'handleStoreChanges' method or provide a function for handling the "+i);r=this.handleStoreChanges}}else"function"==typeof n&&(r=n);if(null===r&&void 0===this.handleStoreChanges)throw new Error(this.constructor.name+" needs to have a handleStoreChanges method or callback because is binded to a Store");if(null===r&&"function"==typeof this.handleStoreChanges&&(r=this.handleStoreChanges),e instanceof l)e=[e];else if(!Array.isArray(e))throw new Error("You are binding "+this.constructor.name+" to "+e.constructor.name+" and it needs to be binded to Flux.Store classes");e.forEach(function(e){if(!(e instanceof l))throw new Error(e+" must instance of Store in "+t.constructor.name);void 0===t._callbacks[e.constructor.name]&&(t._callbacks[e.constructor.name]=[]),t._callbacks[e.constructor.name].push({callbackEvent:i,callbackFunction:r}),e.on(i,r.bind(t))}),this._stores=this._stores.concat(e)}},{key:"componentWillUnmount",value:function(){var e=this;this._stores.forEach(function(t){Array.isArray(e._callbacks[t.constructor.name])&&e._callbacks[t.constructor.name].forEach(function(e){t.removeListener(e.callbackEvent,e.callbackFunction)})})}}]),t}(),v=function(){function e(){a(this,e)}return r(e,[{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(2!==e.split(".").length)throw new Error("Action type "+e+" is invalid, you need to specify Store.method");h.dispatch({actionSlug:e,actionData:t})}}]),e}();t.default={Store:l,Action:v,View:f,Component:f}},function(e,t,n){e.exports=n(3)}])});