!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((n="undefined"!=typeof globalThis?globalThis:n||self).R={})}(this,function(n){"use strict";function a(n){return Array.prototype.slice.call(n)}function q(r,n){var t,e=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,t)),e}function C(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach(function(n){u(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function B(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function u(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function i(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,u,i=[],o=!0,f=!1;try{for(t=t.call(n);!(o=(e=t.next()).done)&&(i.push(e.value),!r||i.length!==r);o=!0);}catch(n){f=!0,u=n}finally{try{o||null==t.return||t.return()}finally{if(f)throw u}}return i}}(n,r)||D(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||D(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Map"===(t="Object"===t&&n.constructor?n.constructor.name:t)||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}function e(n,r){for(var t=0,e=Array(r=null!=r&&r<=n.length?r:n.length);t<r;t++)e[t]=n[t];return e}function o(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(){for(var n,r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return(n=[].concat(h(i),t)).length<u.length?o(u,n):u.apply(void 0,h(n))}}var L=o(function(n,r,t){var e=n<0?t.length+n:n;return t.length<=n||e<0?t:((n=a(t))[e]=r(n[e]),n)});function U(r){return function(n){return r}}var s=Array.isArray;function f(n){var r,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;for(r in n)!1!=n.hasOwnProperty(r)&&"constructor"!==r&&("object"===l(n[r])&&(t=Math.max(t,f(n[r]))),"function"==typeof n[r]&&(t=Math.max(t,n[r].length)));return t}function p(){for(var n=[],r=0,t=arguments.length;r<t&&void 0!==arguments[r];)n[r]=arguments[r],r++;return n}var c=o(function(n,r,t){return Object.assign({},t,u({},n,r))});function g(n){return n<<0===n}var z=Number.isInteger||g;var M=o(function n(r,t,e){r="string"==typeof r?r.split(".").map(function(n){return g(+(""+n))?+(""+n):n}):r;if(0===r.length)return t;var u,i=r[0];return 1<r.length&&(u="object"===l(e)&&null!==e&&e.hasOwnProperty(i)?e[i]:g(r[1])?[]:{},t=n(Array.prototype.slice.call(r,1),t,u)),g(i)&&s(e)?((r=a(e))[i]=t,r):c(i,t,e)});function J(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};default:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)}}}function t(r,n){if(1===arguments.length)return function(n){return t(r,n)};if(10<r)throw Error("First argument to _arity must be a non-negative integer no greater than ten");return J(r,function i(o,f,c){return function(){for(var n=0,r=0,t=f.length,e=arguments.length,u=Array(t+e);n<t;)u[n]=f[n],n++;for(;r<e;)u[t+r]=arguments[r],r++;return u.length<o?J(o-u.length,i(o,u,c)):c.apply(this,u)}}(r,[],n))}var H=o(function(n,r,t){if(r<n)throw Error("min must not be greater than max in clamp(min, max, value)");return t<n||r<t?r<t?r:t<n?n:void 0:t});var $=Object.keys;function r(n,r,t){if(!s(t))throw new TypeError("reduce: list must be array or iterable");for(var e=0,u=t.length;e<u;)r=n(r,t[e],e,t),e++;return r}var y=o(r);function G(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};case 10:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}function K(n,r){return function(){return r.call(this,n.apply(this,arguments))}}function Q(){if(0===arguments.length)throw Error("pipe requires at least one argument");return G(arguments[0].length,r(K,arguments[0],Array.prototype.slice.call(arguments,1,1/0)))}function v(r,n){return 1===arguments.length?function(n){return v(r,n)}:"string"==typeof r?"".concat(r).concat(n):[].concat(h(r),h(n))}function d(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=Array(r.length);e<r.length;)u[e]=t?n(r[e],e):n(r[e]),e++;return u}function m(n,r){for(var t=0,e=$(r),u=e.length,i={};t<u;){var o=e[t];i[o]=n(r[o],o,r),t++}return i}var V=m;function b(r,n){if(1===arguments.length)return function(n){return b(r,n)};if(n)return(s(n)?d:m)(r,n);throw Error("Incorrect iterable input")}function w(r,n){return 1===arguments.length?function(n){return w(r,n)}:r<n?n:r}function O(r,n){return 1===arguments.length?function(n){return O(r,n)}:null==(t=n)||!0===Number.isNaN(t)?r:n;var t}function j(n){if(null===n)return"Null";if(void 0===n)return"Undefined";if(Number.isNaN(n))return"NaN";n=Object.prototype.toString.call(n).slice(8,-1);return"AsyncFunction"===n?"Promise":n}function E(n,r){if(!s(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=j(n);if(!["Object","Array","NaN","RegExp"].includes(t))return r.lastIndexOf(n);for(var e=r.length,u=-1;-1<--e&&-1===u;)N(r[e],n)&&(u=e);return u}function A(n,r){if(!s(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=j(n);if(!["Object","Array","NaN","RegExp"].includes(t))return r.indexOf(n);for(var e=-1,u=-1,i=r.length;++e<i&&-1===u;)N(r[e],n)&&(u=e);return u}function X(n){for(var r,t=[];!(r=n.next()).done;)t.push(r.value);return t}function Y(n){var r=""+n.__proto__;return["Error","TypeError"].includes(r)?[r,n.message]:[]}function Z(n){return n.toDateString?[!0,n.getTime()]:[!1]}function nn(n){return n.constructor!==RegExp?[!1]:[!0,""+n]}function N(t,e){if(1===arguments.length)return function(n){return N(t,n)};var n=j(t);if(n!==j(e))return!1;if("Function"===n)return void 0!==t.name&&t.name===e.name;if(["NaN","Undefined","Null"].includes(n))return!0;if("Number"===n)return Object.is(-0,t)===Object.is(-0,e)&&""+t==""+e;if(["String","Boolean"].includes(n))return""+t==""+e;if("Array"===n){var r=Array.from(t),u=Array.from(e);if(""+r!=""+u)return!1;var i=!0;return r.forEach(function(n,r){!i||n===u[r]||N(n,u[r])||(i=!1)}),i}var r=nn(t),o=nn(e);if(r[0])return!!o[0]&&r[1]===o[1];if(o[0])return!1;r=Z(t),o=Z(e);if(r[0])return!!o[0]&&r[1]===o[1];if(o[0])return!1;r=Y(t),o=Y(e);if(r[0])return!!o[0]&&(r[0]===o[0]&&r[1]===o[1]);if("Set"===n){r=t,o=e;if(r.size!==o.size)return!1;var r=X(r.values()),f=X(o.values());return 0===r.filter(function(n){return-1===A(n,f)}).length}if("Object"!==n)return!1;o=Object.keys(t);if(o.length!==Object.keys(e).length)return!1;var c=!0;return o.forEach(function(n){var r;c&&(r=t[n])!==(n=e[n])&&!N(r,n)&&(c=!1)}),c}function x(r,n){if(1===arguments.length)return function(n){return x(r,n)};if("string"==typeof n)return n.includes(r);if(n)return!!s(n)&&-1<A(r,n);throw new TypeError("Cannot read property 'indexOf' of ".concat(n))}var rn=function(){function n(){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");this.set=new Set,this.items={}}var r,t,e;return r=n,(t=[{key:"checkUniqueness",value:function(n){var r=j(n);return["Null","Undefined","NaN"].includes(r)?!(r in this.items)&&(this.items[r]=!0):["Object","Array"].includes(r)?r in this.items?-1===A(n,this.items[r])&&(this.items[r].push(n),!0):(this.items[r]=[n],!0):(r=this.set.size,this.set.add(n),this.set.size!==r)}}])&&B(r.prototype,t),e&&B(r,e),Object.defineProperty(r,"prototype",{writable:!1}),n}();function tn(n){var r=new rn,t=[];return n.forEach(function(n){r.checkUniqueness(n)&&t.push(n)}),t}function P(r,n){return 1===arguments.length?function(n){return P(r,n)}:n.slice(0<r?r:0)}function S(r,n){return 1===arguments.length?function(n){return S(r,n)}:n?n[r]:void 0}var en=o(function(n,r,t){return N(S(n,r),S(n,t))});function un(t,n){return d(function(n,r){return"Function"===j(t[r])?t[r](n):n},n,!0)}function on(e,n){return m(function(n,r){var t;return"Object"===j(n)?"Function"===(t=j(e[r]))?e[r](n):"Object"===t?fn(e[r],n):n:"Function"===j(e[r])?e[r](n):n},n)}function fn(r,n){if(1===arguments.length)return function(n){return fn(r,n)};var t=j(r),e=j(n);if(e!==t)throw Error("iterableType !== rulesType");if(["Object","Array"].includes(t))return("Object"===e?on:un)(r,n);throw Error("'iterable' and 'rules' are from wrong type ".concat(t))}function cn(n,r){var t,e={};for(t in r)n(r[t],t,r)&&(e[t]=r[t]);return e}function an(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=r.length,i=[];e<u;)(t?n(r[e],e):n(r[e]))&&i.push(r[e]),e++;return i}function k(r,n){if(1===arguments.length)return function(n){return k(r,n)};if(n)return s(n)?an(r,n,!1):cn(r,n);throw Error("Incorrect iterable input")}function T(n,r){return"string"==typeof n?n.split(1<arguments.length&&void 0!==r?r:"."):n}function I(r,n){if(1===arguments.length)return function(n){return I(r,n)};if(null!=n){for(var t=n,e=0,u=T(r);e<u.length;){if(null==t)return;if(null===t[u[e]])return;t=t[u[e]],e++}return t}}var ln=Object.is||function(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r};var hn=o(function(n,r,t){return function(){return(!0===("boolean"==typeof n?n:n.apply(void 0,arguments))?r:t).apply(void 0,arguments)}});function sn(n,r,t){for(var e=-1,u=n.length,i=((t=u<t?u:t)<0&&(t+=u),u=t<r?0:t-r>>>0,r>>>=0,Array(u));++e<u;)i[e]=n[e+r];return i}function pn(r,n){return 1===arguments.length?function(n){return pn(r,n)}:null!=n&&n.constructor===r||n instanceof r}function F(t,e){return function(n){return function(r){return n(t(r)).map(function(n){return e(n,r)})}}}function gn(r,n){if(1===arguments.length)return function(n){return gn(r,n)};var t=r<0?n.length+r:r;return"[object String]"===Object.prototype.toString.call(n)?n[0|t]||"":n[t]}var yn=o(function(n,r,t){return t=a(t),-1===n?t.fill(r,n):t.fill(r,n,n+1)});function vn(n,r,t){return n(t)>n(r)?t:r}var dn=o(vn);function mn(n){return n.reduce(function(n,r){return n+r},0)}function bn(n){return mn(n)/n.length}function W(r,n){return 1===arguments.length?function(n){return W(r,n)}:Object.assign({},r||{},n||{})}function _(r,t){if(1===arguments.length)return function(n){return _(r,n)};var e=JSON.parse(JSON.stringify(r));return Object.keys(t).forEach(function(n){"Object"===j(t[n])&&"Object"===j(r[n])?e[n]=_(r[n],t[n]):e[n]=t[n]}),e}var wn=o(function(r,t,e){var u={};return Object.keys(t).forEach(function(n){u[n]=void 0===e[n]?t[n]:r(t[n],e[n])}),Object.keys(e).forEach(function(n){void 0===u[n]&&(u[n]=void 0===t[n]?e[n]:r(t[n],e[n]))}),u});function On(n,r,t){return n(t)<n(r)?t:r}var jn=o(On);var En=o(function(n,r,t){if(n<0||r<0)throw Error("Rambda.move does not support negative indexes");if(t.length-1<n||t.length-1<r)return t;var e=a(t);return e[n]=t[r],e[r]=t[n],e});function An(r,n){return 1===arguments.length?function(n){return An(r,n)}:r*n}function Nn(n,r){var t;return function(){return n&&(t=n.apply(r||this,arguments),n=null),t}}function xn(r){return{x:r,map:function(n){return xn(n(r))}}}var Pn=o(function(n,r,t){return n(function(n){return xn(r(n))})(t).x});function Sn(e){for(var n=arguments.length,u=Array(1<n?n-1:0),r=1;r<n;r++)u[r-1]=arguments[r];var i=e.length;return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u.length+r.length<i?Sn.apply(void 0,[e].concat([].concat(u,r))):e.apply(void 0,u.concat(r))}}function kn(t,n){var e={},u={};return Object.entries(n).forEach(function(n){var n=i(n,2),r=n[0],n=n[1];t(n,r)?e[r]=n:u[r]=n}),[e,u]}function Tn(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=[],u=[],i=-1;i++<r.length-1;)((t?n(r[i],i):n(r[i]))?e:u).push(r[i]);return[e,u]}var In=o(function(n,r,t){return N(I(n,t),r)});var Fn=o(function(n,r,t){return O(n,I(r,t))});var Wn=y(An,1);var _n=o(function(n,r,t){return!!t&&t[n]===r});var Rn=o(function(n,r,t){return pn(n,t[r])});var qn=o(function(n,r,t){return t?O(n,t[r]):n});var Cn=o(function(n,r,t){return n(S(r,t))});function Bn(r,n){if(1===arguments.length)return function(n){return Bn(r,n)};if(Number.isNaN(+(""+r))||Number.isNaN(+(""+n)))throw new TypeError("Both arguments to range must be numbers");if(n<r)return[];for(var t=n-r,e=Array(t),u=0;u<t;u++)e[u]=r+u;return e}var Dn=o(function(n,r,t){return t.replace(n,r)});var Ln=o(function(n,r,t){return Pn(n,U(r),t)});var Un=o(function(n,r,t){return t.slice(n,r)});function R(r,n){return 1===arguments.length?function(n){return R(r,n)}:r<0?n.slice():"string"==typeof n?n.slice(0,r):sn(n,0,r)}function zn(n){return["Promise","Function"].includes(j(n))}function Mn(r){return{x:r,map:function(n){return Mn(r)}}}var Jn=o(function(n,r,t){return n(t)?r(t):t});var Hn=o(function(t,n,e){return R((e.length<n.length?e:n).length,n).map(function(n,r){return t(n,e[r])})});n.F=function(){return!1},n.T=function(){return!0},n.__findHighestArity=f,n._arity=G,n._indexOf=A,n._lastIndexOf=E,n._pipe=K,n.add=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:+(""+t)+ +(""+n)},n.adjust=L,n.all=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(!t(n[e]))return!1;return!0},n.allPass=function(r){return function(){for(var n=0;n<r.length;){if(!r[n].apply(r,arguments))return!1;n++}return!0}},n.always=U,n.and=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t&&n},n.any=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;){if(t(n[e],e))return!0;e++}return!1},n.anyPass=function(r){return function(){for(var n=0;n<r.length;){if(r[n].apply(r,arguments))return!0;n++}return!1}},n.append=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof n)return n.split("").concat(t);n=a(n);return n.push(t),n},n.apply=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t.apply(this,n)},n.applySpec=function(n){var r=f(n);if(0===r)return function(){return{}};for(var t=arguments.length,e=Array(1<t?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return function u(i,o,f){var n=o-f.length;if(1==n)return function(n){return u(i,o,p.apply(void 0,h(f).concat([n])))};if(2==n)return function(n,r){return u(i,o,p.apply(void 0,h(f).concat([n,r])))};if(3==n)return function(n,r,t){return u(i,o,p.apply(void 0,h(f).concat([n,r,t])))};if(4==n)return function(n,r,t,e){return u(i,o,p.apply(void 0,h(f).concat([n,r,t,e])))};if(4<n)return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(i,o,p.apply(void 0,h(f).concat(r)))};if(s(i)){for(var r=[],t=0,e=i.length;t<e;t++)"object"!==l(i[t])&&!s(i[t])||(r[t]=u(i[t],o,f)),"function"==typeof i[t]&&(r[t]=i[t].apply(i,h(f)));return r}var c,a={};for(c in i)0!=i.hasOwnProperty(c)&&"constructor"!==c&&("object"===l(i[c])?a[c]=u(i[c],o,f):"function"==typeof i[c]&&(a[c]=i[c].apply(i,h(f))));return a}(n,r,e)},n.assoc=c,n.assocPath=M,n.bind=function r(e,u){return 1===arguments.length?function(n){return r(e,n)}:t(e.length,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.apply(u,r)})},n.both=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return t.apply(void 0,arguments)&&n.apply(void 0,arguments)}},n.chain=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[]).concat.apply(e,h(n.map(t)))},n.clamp=H,n.clone=function n(r){var t,e=s(r)?Array(r.length):{};if(r&&r.getTime)return new Date(r.getTime());for(t in r){var u=r[t];e[t]="object"===l(u)&&null!==u?u.getTime?new Date(u.getTime()):n(u):u}return e},n.complement=function(n){return function(){return!n.apply(void 0,arguments)}},n.compose=function(){if(0===arguments.length)throw Error("compose requires at least one argument");return Q.apply(this,Array.prototype.slice.call(arguments,0).reverse())},n.concat=v,n.cond=function(n){return function(t){var e,u=!1;return n.forEach(function(n){var n=i(n,2),r=n[0],n=n[1];!u&&r(t)&&(u=!0,e=n(t))}),e}},n.converge=function r(e,n){return 1===arguments.length?function(n){return r(e,n)}:t(y(function(n,r){return w(n,r.length)},0,n),function(){var r=arguments,t=this;return e.apply(this,b(function(n){return n.apply(t,r)},n))})},n.count=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:s(n)?n.filter(function(n){return t(n)}).length:0},n.countBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e={};return n.forEach(function(n){n=t(n),e[n]?e[n]++:e[n]=1}),e},n.curry=o,n.curryN=t,n.dec=function(n){return n-1},n.defaultTo=O,n.difference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:tn(t).filter(function(n){return!x(n,e)})},n.dissoc=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null==n)return{};var e,u={};for(e in n)u[e]=n[e];return delete u[t],u},n.divide=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t/n},n.drop=P,n.dropLast=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:0<t?n.slice(0,-t):n.slice()},n.dropLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;var e=s(n);if("function"!=typeof t)throw Error("'predicate' is from wrong type ".concat(l(t)));if(!e&&"string"!=typeof n)throw Error("'iterable' is from wrong type ".concat(l(n)));for(var u=!1,i=[],o=n.length;0<o;)o--,u||!1!==t(n[o])?u&&i.push(n[o]):(u=!0,i.push(n[o]));return e?i.reverse():i.reverse().join("")},n.dropRepeats=function(n){if(!s(n))throw Error("".concat(n," is not a list"));var t=[];return n.reduce(function(n,r){return N(n,r)||t.push(r),r},void 0),t},n.dropRepeatsWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!s(n))throw Error("".concat(n," is not a list"));var e=[];return n.reduce(function(n,r){return void 0!==n&&t(n,r)||e.push(r),r},void 0),e},n.dropWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=!1,i=[],o=-1;o++<n.length-1;)u?i.push(n[o]):t(n[o])||(u=u||!0,i.push(n[o]));return e?i:i.join("")},n.either=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return!(!t.apply(void 0,arguments)&&!n.apply(void 0,arguments))}},n.endsWith=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof e)return e.endsWith(t);if(!s(t))return!1;var u=e.length-t.length,i=!0;return t.filter(function(n,r){return!!i&&((n=N(n,e[r+u]))||(i=!1),n)}).length===t.length},n.eqProps=en,n.equals=N,n.evolve=fn,n.evolveArray=un,n.evolveObject=on,n.filter=k,n.filterArray=an,n.filterObject=cn,n.find=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0,u=n.length;e<u;){var i=n[e];if(t(i))return i;e++}},n.findIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length,u=-1;++u<e;)if(t(n[u]))return u;return-1},n.findLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return n[e]},n.findLastIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return e;return-1},n.flatten=function n(r,t){for(var e=void 0===t?[]:t,u=0;u<r.length;u++)s(r[u])?n(r[u],e):e.push(r[u]);return e},n.flip=function(n){return e=n,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];if(1===r.length)return function(n){return e(n,r[0])};if(2===r.length)return e(r[1],r[0]);if(3===r.length)return e(r[1],r[0],r[2]);if(4===r.length)return e(r[1],r[0],r[2],r[3]);throw Error("R.flip doesn't work with arity > 4")};var e},n.forEach=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(void 0!==n){if(s(n))for(var e=0,u=n.length;e<u;)t(n[e]),e++;else for(var i=0,o=$(n),f=o.length;i<f;){var c=o[i];t(n[c],c,n),i++}return n}},n.fromPairs=function(n){var r={};return n.forEach(function(n){n=i(n,2);return r[n[0]]=n[1]}),r},n.groupBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e={},u=0;u<n.length;u++){var i=n[u],o=t(i);e[o]||(e[o]=[]),e[o].push(i)}return e},n.groupWith=function(i,o){if(!s(o))throw new TypeError("list.reduce is not a function");var n=a(o);if(1===o.length)return[n];var f=[],c=[];return n.reduce(function(n,r,t){if(0===t)return r;var e=i(n,r),u=0===c.length,t=t===o.length-1;return e?(u&&c.push(n),c.push(r),t&&f.push(c)):u?(f.push([n]),t&&f.push([r])):(f.push(c),t&&f.push([r]),c=[]),r},void 0),f},n.has=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!n&&n.hasOwnProperty(t)},n.hasPath=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==I(t,n)},n.head=function(n){return"string"==typeof n?n[0]||"":n[0]},n.identical=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:ln(t,n)},n.identity=function(n){return n},n.ifElse=hn,n.inc=function(n){return n+1},n.includes=x,n.indexBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t){for(var e=t,u=n,i={},o=0;o<u.length;o++){var f=u[o];i[I(e,f)]=f}return i}for(var c={},a=0;a<n.length;a++){var l=n[a];c[t(l)]=l}return c},n.indexOf=function(r,n){return 1===arguments.length?function(n){return A(r,n)}:A(r,n)},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?sn(n,0,-1):[]},n.intersection=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:k(function(n){return x(n,t)},n)},n.intersperse=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=n.length,i=[];++e<u;)e===u-1?i.push(n[e]):i.push(n[e],t);return i},n.is=pn,n.isEmpty=function(n){var r=j(n);return!["Undefined","NaN","Number","Null"].includes(r)&&(!n||("Object"===r?0===Object.keys(n).length:"Array"===r&&0===n.length))},n.isNil=function(n){return null==n},n.join=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.join(t)},n.juxt=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.map(function(n){return n.apply(void 0,r)})}},n.keys=function(n){return Object.keys(n)},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},n.lastIndexOf=function(r,n){return 1===arguments.length?function(n){return E(r,n)}:E(r,n)},n.length=function(n){return s(n)||"string"==typeof n?n.length:NaN},n.lens=F,n.lensIndex=function(n){return F(gn(n),yn(n))},n.lensPath=function(n){return F(I(n),M(n))},n.lensProp=function(n){return F(S(n),c(n))},n.map=b,n.mapArray=d,n.mapObjIndexed=V,n.mapObject=m,n.match=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};n=n.match(t);return null===n?[]:n},n.mathMod=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:z(t)&&z(n)&&1<=n?(t%n+n)%n:NaN},n.max=w,n.maxBy=dn,n.maxByFn=vn,n.mean=bn,n.median=function(n){if(0===(t=n.length))return NaN;var r=2-t%2,t=(t-r)/2;return bn(Array.prototype.slice.call(n,0).sort(function(n,r){return n===r?0:n<r?-1:1}).slice(t,t+r))},n.merge=W,n.mergeAll=function(n){var r={};return b(function(n){r=W(r,n)},n),r},n.mergeDeepRight=_,n.mergeLeft=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:W(n,t)},n.mergeRight=W,n.mergeWith=wn,n.min=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<t?n:t},n.minBy=jn,n.minByFn=On,n.modulo=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t%n},n.move=En,n.multiply=An,n.negate=function(n){return-n},n.none=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(t(n[e]))return!1;return!0},n.not=function(n){return!n},n.nth=gn,n.objOf=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:u({},t,n)},n.of=function(n){return[n]},n.omit=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){var e,u=T(t,","),i={};for(e in n)u.includes(e)||(i[e]=n[e]);return i}},n.on=function t(e,u,r,n){return 3===arguments.length?function(n){return t(e,u,r,n)}:2===arguments.length?function(n,r){return t(e,u,n,r)}:e(u(r),u(n))},n.once=function(n,r){return 1===arguments.length?o(Nn(n,r)):Nn(n,r)},n.or=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t||n},n.over=Pn,n.partial=Sn,n.partialObject=function(e,u){return function(t){return"Async"===j(e)?new Promise(function(n,r){e(_(t,u)).then(n).catch(r)}):e(_(t,u))}},n.partition=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(s(n)?Tn:kn)(t,n)},n.partitionArray=Tn,n.partitionObject=kn,n.path=I,n.pathEq=In,n.pathOr=Fn,n.paths=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:t.map(function(n){return I(n,e)})},n.pick=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=T(t,","),u={},i=0;i<e.length;)e[i]in n&&(u[e[i]]=n[e[i]]),i++;return u}},n.pickAll=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=T(t,","),u={},i=0;i<e.length;)e[i]in n?u[e[i]]=n[e[i]]:u[e[i]]=void 0,i++;return u}},n.pipe=Q,n.pluck=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=[];return b(function(n){void 0!==n[t]&&e.push(n[t])},n),e},n.prepend=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:[t].concat("string"==typeof n?n.split(""):n)},n.product=Wn,n.prop=S,n.propEq=_n,n.propIs=Rn,n.propOr=qn,n.propSatisfies=Cn,n.props=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if(s(t))return d(function(n){return e[n]},t);throw Error("propsToPick is not a list")},n.range=Bn,n.reduce=y,n.reduceFn=r,n.reject=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:k(function(n){return!t(n)},n)},n.repeat=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:Array(n).fill(t)},n.replace=Dn,n.reverse=function(n){return"string"==typeof n?n.split("").reverse().join(""):n.slice().reverse()},n.set=Ln,n.slice=Un,n.sort=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:a(n).sort(t)},n.sortBy=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:a(n).sort(function(n,r){return n=t(n),r=t(r),n===r?0:n<r?-1:1})},n.split=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.split(t)},n.splitAt=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'slice' of ".concat(n));if(!s(n)&&"string"!=typeof n)return[[],[]];e=n.length+t<0?0:n.length+t,e=(i=(u=t)<0)&&"Function"===j(e)?e():e,u=i||"Function"!==j(u)?u:u();var e,u,i=i?e:u;return[R(i,n),P(i,n)]},n.splitEvery=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(t<1)throw Error("First argument to splitEvery must be a positive integer");for(var e=[],u=0;u<n.length;)e.push(n.slice(u,u+=t));return e},n.splitWhen=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'length' of ".concat(n));for(var e=[],u=[],i=!1,o=-1;o++<n.length-1;)i?u.push(n[o]):t(n[o])?(u.push(n[o]),i=!0):e.push(n[o]);return[e,u]},n.startsWith=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof e)return e.startsWith(t);if(!s(t))return!1;var u=!0;return t.filter(function(n,r){return!!u&&((n=N(n,e[r]))||(u=!1),n)}).length===t.length},n.subtract=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t-n},n.sum=mn,n.symmetricDifference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:v(k(function(n){return!x(n,e)},t),k(function(n){return!x(n,t)},e))},n.tail=function(n){return P(1,n)},n.take=R,n.takeLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=n.length;if(t<0)return n.slice();var u=e<t?e:t;return"string"==typeof n?n.slice(e-u):sn(n,u=e-u,e)},n.takeLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;for(var e=!1,u=[],i=n.length;!e||0===i;)!1===t(n[--i])?e=!0:e||u.push(n[i]);return s(n)?u.reverse():u.reverse().join("")},n.takeWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=!0,i=[],o=-1;o++<n.length-1;)t(n[o])?u&&i.push(n[o]):u=u&&!1;return e?i:i.join("")},n.tap=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(t(n),n)},n.test=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t)throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received "'.concat(t,'"'));return-1!=n.search(t)},n.times=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!Number.isInteger(n)||n<0)throw new RangeError("n must be an integer");return b(t,Bn(0,n))},n.toLower=function(n){return n.toLowerCase()},n.toPairs=function(n){return Object.entries(n)},n.toString=function(n){return""+n},n.toUpper=function(n){return n.toUpperCase()},n.transpose=function(n){return n.reduce(function(t,n){return n.forEach(function(n,r){return s(t[r])?t[r].push(n):t.push([n])}),t},[])},n.trim=function(n){return n.trim()},n.tryCatch=function(e,u){if(!zn(e))throw Error("R.tryCatch | fn '".concat(e,"'"));var i=zn(u);return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];try{return e.apply(void 0,r)}catch(n){return i?u.apply(void 0,[n].concat(r)):u}}},n.type=j,n.unapply=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.call(this,r)}},n.union=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=a(t);return n.forEach(function(n){x(n,t)||e.push(n)}),e},n.uniq=tn,n.uniqWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=[];++e<n.length;){var i=n[e];!function(n,r,t){for(var e=!1,u=-1;++u<t.length&&!e;)n(r,t[u])&&(e=!0);return e}(t,i,u)&&u.push(i)}return u},n.unless=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:function(n){return t(n)?n:e(n)}},n.unwind=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:s(e[t])?d(function(n){return C(C({},e),{},u({},t,n))},e[t]):[e]},n.update=yn,n.values=function(n){return"Object"!==j(n)?[]:Object.values(n)},n.view=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t(Mn)(n).x},n.when=Jn,n.where=function r(t,n){if(void 0===n)return function(n){return r(t,n)};var e,u=!0;for(e in t){var i=t[e](n[e]);u&&!1===i&&(u=!1)}return u},n.whereAny=function r(t,n){if(void 0===n)return function(n){return r(t,n)};for(var e in t)if(t[e](n[e]))return!0;return!1},n.whereEq=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};var n=k(function(n,r){return N(n,e[r])},t);return Object.keys(n).length===Object.keys(t).length},n.without=function r(t,n){return void 0===n?function(n){return r(t,n)}:y(function(n,r){return-1<A(r,t)?n:n.concat(r)},[],n)},n.xor=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!t&&!n||!!n&&!t},n.zip=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=[],u=Math.min(t.length,n.length),i=0;i<u;i++)e[i]=[t[i],n[i]];return e},n.zipObj=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:R(e.length,t).reduce(function(n,r,t){return n[r]=e[t],n},{})},n.zipWith=Hn,Object.defineProperty(n,"__esModule",{value:!0})});
