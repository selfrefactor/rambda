!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((n="undefined"!=typeof globalThis?globalThis:n||self).R={})}(this,function(n){"use strict";function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function i(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,u,i=[],o=!0,f=!1;try{for(t=t.call(n);!(o=(e=t.next()).done)&&(i.push(e.value),!r||i.length!==r);o=!0);}catch(n){f=!0,u=n}finally{try{o||null==t.return||t.return()}finally{if(f)throw u}}return i}}(n,r)||t(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,r){if(n){if("string"==typeof n)return o(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Map"===(t="Object"===t&&n.constructor?n.constructor.name:t)||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,r):void 0}}function o(n,r){for(var t=0,e=Array(r=null==r||r>n.length?n.length:r);t<r;t++)e[t]=n[t];return e}function f(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(){for(var n,r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return(n=[].concat(h(i),t)).length<u.length?f(u,n):u.apply(void 0,h(n))}}function c(n){return Array.prototype.slice.call(n)}var r=f(function(n,r,t){var e=n<0?t.length+n:n;return t.length<=n||e<0||((t=c(t))[e]=r(t[e])),t});function a(n){return function(){return n}}var s=Array.isArray;function p(){for(var n=[],r=0,t=arguments.length;r<t&&void 0!==arguments[r];)n[r]=arguments[r],r++;return n}var g=f(function(n,r,t){return Object.assign({},t,e({},n,r))});function v(n){return n<<0===n}var y=Number.isInteger||v;var d=f(function n(r,t,e){var u="string"==typeof r?r.split(".").map(function(n){return v(+(""+n))?+(""+n):n}):r;if(0===u.length)return t;r=u[0];if(1<u.length&&(i="object"===l(e)&&null!==e&&e.hasOwnProperty(r)?e[r]:v(u[1])?[]:{},t=n(Array.prototype.slice.call(u,1),t,i)),v(r)&&s(e)){var i=c(e);return i[r]=t,i}return g(r,t,e)});function m(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};default:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)}}}function b(r,n){if(1===arguments.length)return function(n){return b(r,n)};if(10<r)throw Error("First argument to _arity must be a non-negative integer no greater than ten");return m(r,function i(o,f,c){return function(){for(var n=0,r=0,t=f.length,e=arguments.length,u=Array(t+e);n<t;)u[n]=f[n],n++;for(;r<e;)u[t+r]=arguments[r],r++;return u.length<o?m(o-u.length,i(o,u,c)):c.apply(this,u)}}(r,[],n))}var w=f(function(n,r,t){if(r<n)throw Error("min must not be greater than max in clamp(min, max, value)");return t<n||r<t?r<t?r:t<n?n:void 0:t});function j(r,n){return 1===arguments.length?function(n){return j(r,n)}:"string"==typeof r?"".concat(r).concat(n):[].concat(h(r),h(n))}var O=Object.keys;function E(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=Array(r.length);e<r.length;)u[e]=t?n(r[e],e):n(r[e]),e++;return u}function A(n,r){for(var t=0,e=O(r),u=e.length,i={};t<u;){var o=e[t];i[o]=n(r[o],o,r),t++}return i}var N=A;function x(r,n){return 1===arguments.length?function(n){return x(r,n)}:void 0===n?[]:(s(n)?E:A)(r,n)}function S(r,n){return 1===arguments.length?function(n){return S(r,n)}:r<n?n:r}var T=f(function(n,r,t){if(!s(t))throw new TypeError("reduce: list must be array or iterable");for(var e=0,u=t.length;e<u;)r=n(r,t[e],e,t),e++;return r});function k(r,n){return 1===arguments.length?function(n){return k(r,n)}:null==(t=n)||!0===Number.isNaN(t)?r:n;var t}function P(n){var r=l(n);if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===r)return"Boolean";if("number"===r)return Number.isNaN(n)?"NaN":"Number";if("string"===r)return"String";if(s(n))return"Array";if("symbol"===r)return"Symbol";if(n instanceof RegExp)return"RegExp";var t=n&&n.toString?""+n:"";return["true","false"].includes(t)?"Boolean":Number.isNaN(+(""+t))?t.startsWith("async")?"Async":"[object Promise]"===t?"Promise":"function"===r?"Function":n instanceof String?"String":n instanceof Set?"Set":"Object":"Number"}function R(n,r){if(!s(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=P(n);if(!["Object","Array","NaN","RegExp"].includes(t))return r.indexOf(n);for(var e=-1,u=-1,i=r.length;++e<i&&-1===u;)B(r[e],n)&&(u=e);return u}function W(n){for(var r,t=[];!(r=n.next()).done;)t.push(r.value);return t}function q(n){var r=""+n.__proto__;return["Error","TypeError"].includes(r)?[r,n.message]:[]}function F(n){return n.toDateString?[!0,n.getTime()]:[!1]}function I(n){return n.constructor!==RegExp?[!1]:[!0,""+n]}function B(t,e){if(1===arguments.length)return function(n){return B(t,n)};var n=P(t);if(n!==P(e))return!1;if("Function"===n)return void 0!==t.name&&t.name===e.name;if(["NaN","Undefined","Null"].includes(n))return!0;if("Number"===n)return Object.is(-0,t)===Object.is(-0,e)&&""+t==""+e;if(["String","Boolean"].includes(n))return""+t==""+e;if("Array"===n){var r=Array.from(t),u=Array.from(e);if(""+r!=""+u)return!1;var i=!0;return r.forEach(function(n,r){i&&(n===u[r]||B(n,u[r])||(i=!1))}),i}var o=I(t),r=I(e);if(o[0])return!!r[0]&&o[1]===r[1];if(r[0])return!1;o=F(t),r=F(e);if(o[0])return!!r[0]&&o[1]===r[1];if(r[0])return!1;o=q(t),r=q(e);if(o[0])return!!r[0]&&(o[0]===r[0]&&o[1]===r[1]);if("Set"===n)return function(n,r){if(n.size!==r.size)return!1;var n=W(n.values()),t=W(r.values());return 0===n.filter(function(n){return-1===R(n,t)}).length}(t,e);if("Object"!==n)return!1;n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;var f=!0;return n.forEach(function(n){var r;f&&((r=t[n])===(n=e[n])||B(r,n)||(f=!1))}),f}function C(r,n){if(1===arguments.length)return function(n){return C(r,n)};if("string"==typeof n)return n.includes(r);if(!n)throw new TypeError("Cannot read property 'indexOf' of ".concat(n));return!!s(n)&&-1<R(r,n)}var L=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.set=new Set,this.items={}}var r,t,e;return r=n,(t=[{key:"checkUniqueness",value:function(n){var r=P(n);if(["Null","Undefined","NaN"].includes(r))return!(r in this.items)&&(this.items[r]=!0);if(["Object","Array"].includes(r))return r in this.items?-1===R(n,this.items[r])&&(this.items[r].push(n),!0):(this.items[r]=[n],!0);r=this.set.size;return this.set.add(n),this.set.size!==r}}])&&u(r.prototype,t),e&&u(r,e),n}();function U(n){var r=new L,t=[];return n.forEach(function(n){r.checkUniqueness(n)&&t.push(n)}),t}function _(r,n){return 1===arguments.length?function(n){return _(r,n)}:n.slice(0<r?r:0)}var z=f(function(n,r,t){if(!r||!t)throw Error("wrong object inputs are passed to R.eqProps");return B(r[n],t[n])});function M(t,n){return E(function(n,r){return"Function"===P(t[r])?t[r](n):n},n,!0)}function D(e,n){return A(function(n,r){if("Object"!==P(n))return"Function"===P(e[r])?e[r](n):n;var t=P(e[r]);return"Function"===t?e[r](n):"Object"===t?J(e[r],n):n},n)}function J(r,n){if(1===arguments.length)return function(n){return J(r,n)};var t=P(r),e=P(n);if(e!==t)throw Error("iterableType !== rulesType");if(!["Object","Array"].includes(t))throw Error("'iterable' and 'rules' are from wrong type ".concat(t));return("Object"===e?D:M)(r,n)}function $(n,r){var t,e={};for(t in r)n(r[t],t,r)&&(e[t]=r[t]);return e}function G(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=r.length,i=[];e<u;)(t?n(r[e],e):n(r[e]))&&i.push(r[e]),e++;return i}function H(r,n){return 1===arguments.length?function(n){return H(r,n)}:n?(s(n)?G:$)(r,n):[]}function K(r,n){if(1===arguments.length)return function(n){return K(r,n)};if(null!=n){for(var t=n,e=0,u="string"==typeof r?r.split("."):r;e<u.length;){if(null==t)return;if(null===t[u[e]])return;t=t[u[e]],e++}return t}}var Q=Object.is||function(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r};var V=f(function(n,r,t){return function(){return(!0===("boolean"==typeof n?n:n.apply(void 0,arguments))?r:t).apply(void 0,arguments)}});function X(n,r,t){var e=-1,u=n.length;(t=u<t?u:t)<0&&(t+=u),u=t<r?0:t-r>>>0,r>>>=0;for(var i=Array(u);++e<u;)i[e]=n[e+r];return i}function Y(r,n){return 1===arguments.length?function(n){return Y(r,n)}:null!=n&&n.constructor===r||n instanceof r}function Z(t,e){return function(n){return function(r){return n(t(r)).map(function(n){return e(n,r)})}}}function nn(r,n){if(1===arguments.length)return function(n){return nn(r,n)};var t=r<0?n.length+r:r;return"[object String]"===Object.prototype.toString.call(n)?n[0|t]||"":n[t]}var rn=f(function(n,r,t){return t=t.slice(),-1===n?t.fill(r,n):t.fill(r,n,n+1)});function tn(r,n){return 1===arguments.length?function(n){return tn(r,n)}:n?n[r]:void 0}function en(n,r,t){return n(t)>n(r)?t:r}var un=f(en);function on(n){return n.reduce(function(n,r){return n+r},0)}function fn(n){return on(n)/n.length}function cn(r,n){return 1===arguments.length?function(n){return cn(r,n)}:Object.assign({},r||{},n||{})}function an(n,r,t){return n(t)<n(r)?t:r}var ln=f(an);var hn=f(function(n,r,t){if(n<0||r<0)throw Error("Rambda.move does not support negative indexes");if(t.length-1<n||t.length-1<r)return t;var e=t.slice();return e[n]=t[r],e[r]=t[n],e});function sn(r,n){return 1===arguments.length?function(n){return sn(r,n)}:r*n}function pn(n,r){var t;return function(){return n&&(t=n.apply(r||this,arguments),n=null),t}}function gn(r){return{x:r,map:function(n){return gn(n(r))}}}var vn=f(function(n,r,t){return n(function(n){return gn(r(n))})(t).x});function yn(e){for(var n=arguments.length,u=Array(1<n?n-1:0),r=1;r<n;r++)u[r-1]=arguments[r];var i=e.length;return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u.length+r.length<i?yn.apply(void 0,[e].concat([].concat(u,r))):e.apply(void 0,u.concat(r))}}function dn(t,n){var e={},u={};return Object.entries(n).forEach(function(n){var r=i(n,2),n=r[0],r=r[1];t(r,n)?e[n]=r:u[n]=r}),[e,u]}function mn(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=[],u=[],i=-1;i++<r.length-1;)((t?n(r[i],i):n(r[i]))?e:u).push(r[i]);return[e,u]}var bn=f(function(n,r,t){return B(K(n,t),r)});var wn=f(function(n,r,t){return k(n,K(r,t))});var jn=T(sn,1);var On=f(function(n,r,t){return!!t&&t[n]===r});var En=f(function(n,r,t){return Y(n,t[r])});var An=f(function(n,r,t){return t?k(n,t[r]):n});function Nn(r,n){if(1===arguments.length)return function(n){return Nn(r,n)};if(Number.isNaN(+(""+r))||Number.isNaN(+(""+n)))throw new TypeError("Both arguments to range must be numbers");if(n<r)return[];for(var t=n-r,e=Array(t),u=0;u<t;u++)e[u]=r+u;return e}var xn=f(function(n,r,t){return t.replace(n,r)});var Sn=f(function(n,r,t){return vn(n,a(r),t)});var Tn=f(function(n,r,t){return t.slice(n,r)});function kn(r,n){return 1===arguments.length?function(n){return kn(r,n)}:r<0?n.slice():"string"==typeof n?n.slice(0,r):X(n,0,r)}function Pn(n){return["Async","Function"].includes(P(n))}function Rn(r){return{x:r,map:function(n){return Rn(r)}}}var Wn=f(function(n,r,t){return n(t)?r(t):t});var qn=f(function(t,n,e){return kn((e.length<n.length?e:n).length,n).map(function(n,r){return t(n,e[r])})});n.F=function(){return!1},n.T=function(){return!0},n._indexOf=R,n.add=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:+(""+t)+ +(""+n)},n.adjust=r,n.all=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(!t(n[e]))return!1;return!0},n.allPass=function(r){return function(){for(var n=0;n<r.length;){if(!r[n].apply(r,arguments))return!1;n++}return!0}},n.always=a,n.and=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t&&n},n.any=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;){if(t(n[e],e))return!0;e++}return!1},n.anyPass=function(r){return function(){for(var n=0;n<r.length;){if(r[n].apply(r,arguments))return!0;n++}return!1}},n.append=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof n)return n.split("").concat(t);n=c(n);return n.push(t),n},n.apply=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t.apply(this,n)},n.applySpec=function(n){var r=function n(r,t){var e,u=1<arguments.length&&void 0!==t?t:0;for(e in r)0!=r.hasOwnProperty(e)&&"constructor"!==e&&("object"===l(r[e])&&(u=Math.max(u,n(r[e]))),"function"==typeof r[e]&&(u=Math.max(u,r[e].length)));return u}(n);if(0===r)return function(){return{}};for(var t=arguments.length,e=Array(1<t?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return function u(i,o,f){var n=o-f.length;if(1==n)return function(n){return u(i,o,p.apply(void 0,h(f).concat([n])))};if(2==n)return function(n,r){return u(i,o,p.apply(void 0,h(f).concat([n,r])))};if(3==n)return function(n,r,t){return u(i,o,p.apply(void 0,h(f).concat([n,r,t])))};if(4==n)return function(n,r,t,e){return u(i,o,p.apply(void 0,h(f).concat([n,r,t,e])))};if(4<n)return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(i,o,p.apply(void 0,h(f).concat(r)))};if(s(i)){for(var r=[],t=0,e=i.length;t<e;t++)"object"!==l(i[t])&&!s(i[t])||(r[t]=u(i[t],o,f)),"function"==typeof i[t]&&(r[t]=i[t].apply(i,h(f)));return r}var c,a={};for(c in i)0!=i.hasOwnProperty(c)&&"constructor"!==c&&("object"!==l(i[c])?"function"==typeof i[c]&&(a[c]=i[c].apply(i,h(f))):a[c]=u(i[c],o,f));return a}(n,r,e)},n.assoc=g,n.assocPath=d,n.bind=function r(e,u){return 1===arguments.length?function(n){return r(e,n)}:b(e.length,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.apply(u,r)})},n.both=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return t.apply(void 0,arguments)&&n.apply(void 0,arguments)}},n.chain=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[]).concat.apply(e,h(n.map(t)))},n.clamp=w,n.clone=function n(r){var t,e=s(r)?Array(r.length):{};if(r&&r.getTime)return new Date(r.getTime());for(t in r){var u=r[t];e[t]="object"===l(u)&&null!==u?u.getTime?new Date(u.getTime()):n(u):u}return e},n.complement=function(n){return function(){return!n.apply(void 0,arguments)}},n.compose=function(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];if(0===o.length)throw Error("compose requires at least one argument");return function(){var n=o.slice();if(0<n.length){for(var r=n.pop(),t=arguments.length,e=Array(t),u=0;u<t;u++)e[u]=arguments[u];for(var i=r.apply(this,e);0<n.length;)i=n.pop()(i);return i}}},n.concat=j,n.cond=function(n){return function(t){var e,u=!1;return n.forEach(function(n){var r=i(n,2),n=r[0],r=r[1];!u&&n(t)&&(u=!0,e=r(t))}),e}},n.converge=function r(e,n){return 1===arguments.length?function(n){return r(e,n)}:b(T(function(n,r){return S(n,r.length)},0,n),function(){var r=arguments,t=this;return e.apply(this,x(function(n){return n.apply(t,r)},n))})},n.curry=f,n.curryN=b,n.dec=function(n){return n-1},n.defaultTo=k,n.difference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:U(t).filter(function(n){return!C(n,e)})},n.dissoc=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null==n)return{};var e,u={};for(e in n)u[e]=n[e];return delete u[t],u},n.divide=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t/n},n.drop=_,n.dropLast=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:0<t?n.slice(0,-t):n.slice()},n.dropLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;var e=s(n);if("function"!=typeof t)throw Error("'predicate' is from wrong type ".concat(l(t)));if(!e&&"string"!=typeof n)throw Error("'iterable' is from wrong type ".concat(l(n)));for(var u=!1,i=[],o=n.length;0<o;)o--,u||!1!==t(n[o])?u&&i.push(n[o]):(u=!0,i.push(n[o]));return e?i.reverse():i.reverse().join("")},n.dropRepeats=function(n){if(!s(n))throw Error("".concat(n," is not a list"));var t=[];return n.reduce(function(n,r){return B(n,r)||t.push(r),r},void 0),t},n.dropRepeatsWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!s(n))throw Error("".concat(n," is not a list"));var e=[];return n.reduce(function(n,r){return void 0!==n&&t(n,r)||e.push(r),r},void 0),e},n.dropWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=!1,i=[],o=-1;o++<n.length-1;)u?i.push(n[o]):t(n[o])||(u=u||!0,i.push(n[o]));return e?i:i.join("")},n.either=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return!(!t.apply(void 0,arguments)&&!n.apply(void 0,arguments))}},n.endsWith=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.endsWith(t)},n.eqProps=z,n.equals=B,n.evolve=J,n.evolveArray=M,n.evolveObject=D,n.filter=H,n.filterArray=G,n.filterObject=$,n.find=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0,u=n.length;e<u;){var i=n[e];if(t(i))return i;e++}},n.findIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length,u=-1;++u<e;)if(t(n[u]))return u;return-1},n.findLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return n[e]},n.findLastIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return e;return-1},n.flatten=function n(r,t){for(var e=void 0===t?[]:t,u=0;u<r.length;u++)s(r[u])?n(r[u],e):e.push(r[u]);return e},n.flip=function(n){return e=n,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];if(1===r.length)return function(n){return e(n,r[0])};if(2===r.length)return e(r[1],r[0]);if(3===r.length)return e(r[1],r[0],r[2]);if(4===r.length)return e(r[1],r[0],r[2],r[3]);throw Error("R.flip doesn't work with arity > 4")};var e},n.forEach=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(void 0!==n){if(s(n))for(var e=0,u=n.length;e<u;)t(n[e]),e++;else for(var i=0,o=O(n),f=o.length;i<f;){var c=o[i];t(n[c],c,n),i++}return n}},n.fromPairs=function(n){var r={};return n.forEach(function(n){n=i(n,2);return r[n[0]]=n[1]}),r},n.groupBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e={},u=0;u<n.length;u++){var i=n[u],o=t(i);e[o]||(e[o]=[]),e[o].push(i)}return e},n.groupWith=function(i,o){if(!s(o))throw new TypeError("list.reduce is not a function");var n=o.slice();if(1===o.length)return[n];var f=[],c=[];return n.reduce(function(n,r,t){if(0===t)return r;var e=i(n,r),u=0===c.length,t=t===o.length-1;return e?(u&&c.push(n),c.push(r),t&&f.push(c)):u?(f.push([n]),t&&f.push([r])):(f.push(c),t&&f.push([r]),c=[]),r},void 0),f},n.has=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!n&&n.hasOwnProperty(t)},n.hasPath=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==K(t,n)},n.head=function(n){return"string"==typeof n?n[0]||"":n[0]},n.identical=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:Q(t,n)},n.identity=function(n){return n},n.ifElse=V,n.inc=function(n){return n+1},n.includes=C,n.indexBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t)return function(n,r){for(var t={},e=0;e<r.length;e++){var u=r[e];t[K(n,u)]=u}return t}(t,n);for(var e={},u=0;u<n.length;u++){var i=n[u];e[t(i)]=i}return e},n.indexOf=function(r,n){return 1===arguments.length?function(n){return R(r,n)}:R(r,n)},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?X(n,0,-1):[]},n.intersection=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:H(function(n){return C(n,t)},n)},n.intersperse=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=n.length,i=[];++e<u;)e===u-1?i.push(n[e]):i.push(n[e],t);return i},n.is=Y,n.isEmpty=function(n){var r=P(n);return!["Undefined","NaN","Number","Null"].includes(r)&&(!n||("Object"===r?0===Object.keys(n).length:"Array"===r&&0===n.length))},n.isNil=function(n){return null==n},n.join=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.join(t)},n.keys=function(n){return Object.keys(n)},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},n.lastIndexOf=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<--e;)if(B(n[e],t))return e;return-1},n.length=function(n){return s(n)||"string"==typeof n?n.length:NaN},n.lens=Z,n.lensIndex=function(n){return Z(nn(n),rn(n))},n.lensPath=function(n){return Z(K(n),d(n))},n.lensProp=function(n){return Z(tn(n),g(n))},n.map=x,n.mapArray=E,n.mapObjIndexed=N,n.mapObject=A,n.match=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};n=n.match(t);return null===n?[]:n},n.mathMod=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:y(t)&&y(n)&&1<=n?(t%n+n)%n:NaN},n.max=S,n.maxBy=un,n.maxByFn=en,n.mean=fn,n.median=function(n){if(0===(t=n.length))return NaN;var r=2-t%2,t=(t-r)/2;return fn(Array.prototype.slice.call(n,0).sort(function(n,r){return n===r?0:n<r?-1:1}).slice(t,t+r))},n.merge=cn,n.mergeAll=function(n){var r={};return x(function(n){r=cn(r,n)},n),r},n.mergeDeepRight=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};var u=JSON.parse(JSON.stringify(t));return Object.keys(e).forEach(function(n){"Object"===P(e[n])&&"Object"===P(t[n])?u[n]=r(t[n],e[n]):u[n]=e[n]}),u},n.mergeLeft=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:cn(n,t)},n.min=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<t?n:t},n.minBy=ln,n.minByFn=an,n.modulo=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t%n},n.move=hn,n.multiply=sn,n.negate=function(n){return-n},n.none=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(!t(n[e]))return!0;return!1},n.not=function(n){return!n},n.nth=nn,n.objOf=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:e({},t,n)},n.of=function(n){return[n]},n.omit=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){var e,u="string"==typeof t?t.split(","):t,i={};for(e in n)u.includes(e)||(i[e]=n[e]);return i}},n.once=function(n,r){return 1!==arguments.length?pn(n,r):f(pn(n,r))},n.or=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t||n},n.over=vn,n.partial=yn,n.partition=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(s(n)?mn:dn)(t,n)},n.partitionArray=mn,n.partitionObject=dn,n.path=K,n.pathEq=bn,n.pathOr=wn,n.paths=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:t.map(function(n){return K(n,e)})},n.pick=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e="string"==typeof t?t.split(","):t,u={},i=0;i<e.length;)e[i]in n&&(u[e[i]]=n[e[i]]),i++;return u}},n.pickAll=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e="string"==typeof t?t.split(","):t,u={},i=0;i<e.length;)e[i]in n?u[e[i]]=n[e[i]]:u[e[i]]=void 0,i++;return u}},n.pipe=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];if(0===t.length)throw Error("pipe requires at least one argument");return function(){var n=t.slice();if(0<n.length){for(var r=n.shift().apply(void 0,arguments);0<n.length;)r=n.shift()(r);return r}}},n.pluck=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=[];return x(function(n){void 0!==n[t]&&e.push(n[t])},n),e},n.prepend=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:[t].concat("string"==typeof n?n.split(""):n)},n.product=jn,n.prop=tn,n.propEq=On,n.propIs=En,n.propOr=An,n.props=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if(!s(t))throw Error("propsToPick is not a list");return E(function(n){return e[n]},t)},n.range=Nn,n.reduce=T,n.reject=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:H(function(n){return!t(n)},n)},n.repeat=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:Array(n).fill(t)},n.replace=xn,n.reverse=function(n){return"string"==typeof n?n.split("").reverse().join(""):n.slice().reverse()},n.set=Sn,n.slice=Tn,n.sort=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:c(n).sort(t)},n.sortBy=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.slice().sort(function(n,r){return n=t(n),r=t(r),n===r?0:n<r?-1:1})},n.split=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.split(t)},n.splitAt=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'slice' of ".concat(n));if(!s(n)&&"string"!=typeof n)return[[],[]];var e,u,i=(u=n.length+t<0?0:n.length+t,u=(e=(i=t)<0)&&"Function"===P(u)?u():u,i=e||"Function"!==P(i)?i:i(),e?u:i);return[kn(i,n),_(i,n)]},n.splitEvery=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(t<1)throw Error("First argument to splitEvery must be a positive integer");for(var e=[],u=0;u<n.length;)e.push(n.slice(u,u+=t));return e},n.splitWhen=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'length' of ".concat(n));for(var e=[],u=[],i=!1,o=-1;o++<n.length-1;)i?u.push(n[o]):t(n[o])?(u.push(n[o]),i=!0):e.push(n[o]);return[e,u]},n.startsWith=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.startsWith(t)},n.subtract=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t-n},n.sum=on,n.symmetricDifference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:j(H(function(n){return!C(n,e)},t),H(function(n){return!C(n,t)},e))},n.tail=function(n){return _(1,n)},n.take=kn,n.takeLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=n.length;if(t<0)return n.slice();var u=e<t?e:t;return"string"==typeof n?n.slice(e-u):X(n,u=e-u,e)},n.takeLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;for(var e=!1,u=[],i=n.length;!e||0===i;)!1===t(n[--i])?e=!0:e||u.push(n[i]);return s(n)?u.reverse():u.reverse().join("")},n.takeWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=!0,i=[],o=-1;o++<n.length-1;)t(n[o])?u&&i.push(n[o]):u=u&&!1;return e?i:i.join("")},n.tap=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(t(n),n)},n.test=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t)throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received "'.concat(t,'"'));return-1!=n.search(t)},n.times=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!Number.isInteger(n)||n<0)throw new RangeError("n must be an integer");return x(t,Nn(0,n))},n.toLower=function(n){return n.toLowerCase()},n.toPairs=function(n){return Object.entries(n)},n.toString=function(n){return""+n},n.toUpper=function(n){return n.toUpperCase()},n.transpose=function(n){return n.reduce(function(t,n){return n.forEach(function(n,r){return s(t[r])?t[r].push(n):t.push([n])}),t},[])},n.trim=function(n){return n.trim()},n.tryCatch=function(e,u){if(!Pn(e))throw Error("R.tryCatch | fn '".concat(e,"'"));var i=Pn(u);return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];try{return e.apply(void 0,r)}catch(n){return i?u.apply(void 0,[n].concat(r)):u}}},n.type=P,n.unapply=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.call(this,r)}},n.union=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=t.slice();return n.forEach(function(n){C(n,t)||e.push(n)}),e},n.uniq=U,n.uniqWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=[];++e<n.length;){var i=n[e];!function(n,r,t){for(var e=!1,u=-1;++u<t.length&&!e;)n(r,t[u])&&(e=!0);return e}(t,i,u)&&u.push(i)}return u},n.unless=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:function(n){return t(n)?n:e(n)}},n.update=rn,n.values=function(n){return"Object"!==P(n)?[]:Object.values(n)},n.view=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t(Rn)(n).x},n.when=Wn,n.where=function r(t,n){if(void 0===n)return function(n){return r(t,n)};var e,u=!0;for(e in t){var i=t[e](n[e]);u&&!1===i&&(u=!1)}return u},n.whereEq=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};var n=H(function(n,r){return B(n,e[r])},t);return Object.keys(n).length===Object.keys(t).length},n.without=function r(t,n){return void 0===n?function(n){return r(t,n)}:T(function(n,r){return-1<R(r,t)?n:n.concat(r)},[],n)},n.xor=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!t&&!n||!!n&&!t},n.zip=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=[],u=Math.min(t.length,n.length),i=0;i<u;i++)e[i]=[t[i],n[i]];return e},n.zipObj=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:kn(e.length,t).reduce(function(n,r,t){return n[r]=e[t],n},{})},n.zipWith=qn,Object.defineProperty(n,"__esModule",{value:!0})});
