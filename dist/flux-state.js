!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["flux-state"]=e(require("react")):t["flux-state"]=e(t.react)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e),n.d(e,"useFluxStore",(function(){return p})),n.d(e,"useSubscription",(function(){return d})),n.d(e,"useEvent",(function(){return y})),n.d(e,"View",(function(){return b}));var r=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,r,o=s(u);function u(t){var e;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=o.call(this,t),(this instanceof u?this.constructor:void 0)===u)throw new TypeError("Cannot construct View instances directly");return e.subscriptions=[],e.toBeSubscribed=[],e.hasBeenUnmounted=!1,e}return e=u,(n=[{key:"subscribe",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t.subscribe(e,n,r);return this.toBeSubscribed.push({store:t,eventName:e,subscriber:n,receiveLastValue:r}),this.subscriptions.push(o),o}},{key:"componentDidMount",value:function(){if(this.hasBeenUnmounted){var t=this;this.toBeSubscribed.forEach((function(e){var n=e.store.subscribe(e.eventName,e.subscriber,e.receiveLastValue);t.subscriptions.push(n)}))}}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(t){t.unsubscribe()})),this.subscriptions=[],this.hasBeenUnmounted=!0}}])&&c(e.prototype,n),r&&c(e,r),u}(n.n(r).a.Component),p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=Object(r.useState)(n),c=o(i,2),f=c[0],s=c[1];return Object(r.useEffect)((function(){var n=t.subscribe(e,(function(t){u&&u(t),s(t)}));return function(){n.unsubscribe()}}),[]),f},y=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=Object(r.useState)(n),c=o(i,2),f=c[0],s=c[1];return Object(r.useEffect)((function(){var n=t.subscribe(e,(function(t){u&&(t=u(t)),s(t)}));return function(){n.unsubscribe()}}),[]),f},d=function(t,e,n){if(null==n||"function"!=typeof n)throw new Error("'callback parameter must be a function");var o=Object(r.useRef)(n);o.current=n,Object(r.useEffect)((function(){var n=t.subscribe(e,(function(){o.current()}));return function(){n.unsubscribe()}}),[e,t])};e.default=b}])}));
//# sourceMappingURL=flux-state.js.map