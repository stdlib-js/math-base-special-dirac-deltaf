// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"";t=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,i,a,y;if(null==t)return o.call(t);e=t[f],y=f,n=null!=(a=t)&&r.call(a,y);try{t[f]=void 0}catch(n){return o.call(t)}return i=o.call(t),n?t[f]=e:delete t[f],i}:function(t){return o.call(t)};var i=t,a="function"==typeof Float32Array,y=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null,u="function"==typeof Float32Array?Float32Array:void 0,c=function(){var t,n,o;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,5e40]),o=n,t=(a&&o instanceof Float32Array||"[object Float32Array]"===i(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===y}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")},p="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){var t,n,o;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(p&&o instanceof Uint32Array||"[object Uint32Array]"===i(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")},A=new c(1);new m(A.buffer)[0]=2139095040;var s=A[0];return function(t){return function(t){return t!=t}(t)?NaN:0===t?s:0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).diracDeltaf=n();
//# sourceMappingURL=index.js.map
