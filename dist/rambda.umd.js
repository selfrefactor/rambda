!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((n="undefined"!=typeof globalThis?globalThis:n||self).R={})}(this,function(n){"use strict";function a(n){return Array.prototype.slice.call(n)}function _(r,n){var t,e=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,t)),e}function u(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach(function(n){i(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function B(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function C(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,L(e.key),e)}}function U(n,r,t){return r&&C(n.prototype,r),t&&C(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function i(n,r,t){return(r=L(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function o(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,u,i,o,f=[],c=!0,a=!1;try{if(i=(t=t.call(n)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(e=i.call(t)).done)&&(f.push(e.value),f.length!==r);c=!0);}catch(n){a=!0,u=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(a)throw u}}return f}}(n,r)||D(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||D(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,r){var t;if(n)return"string"==typeof n?e(n,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(n).slice(8,-1))&&n.constructor?n.constructor.name:t)||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}function e(n,r){for(var t=0,e=Array(r=null!=r&&r<=n.length?r:n.length);t<r;t++)e[t]=n[t];return e}function L(n){n=function(n,r){if("object"!=typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0===t)return("string"===r?String:Number)(n);if("object"!=typeof(t=t.call(n,r||"default")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(n,"string");return"symbol"==typeof n?n:""+n}function f(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(){for(var n,r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return(n=[].concat(h(i),t)).length<u.length?f(u,n):u.apply(void 0,h(n))}}var z=f(function(n,r,t){var e=n<0?t.length+n:n;return t.length<=n||e<0?t:((n=a(t))[e]=r(n[e]),n)});function M(r){return function(n){return r}}var s=Array.isArray;function c(n){var r,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;for(r in n)!1!=n.hasOwnProperty(r)&&"constructor"!==r&&("object"===l(n[r])&&(t=Math.max(t,c(n[r]))),"function"==typeof n[r])&&(t=Math.max(t,n[r].length));return t}function p(){for(var n=[],r=0,t=arguments.length;r<t&&void 0!==arguments[r];)n[r]=arguments[r],r++;return n}var g=f(function(n,r,t){return Object.assign({},t,i({},n,r))});var y=Number.isInteger||function(n){return n<<0===n};var H=f(function n(r,t,e){var u,i,r="string"==typeof r?r.split(".").map(function(n){return y(+(""+n))?+(""+n):n}):r;return 0===r.length?t:(u=r[0],1<r.length&&(i="object"===l(e)&&null!==e&&e.hasOwnProperty(u)?e[u]:y(r[1])?[]:{},t=n(Array.prototype.slice.call(r,1),t,i)),y(u)&&s(e)?((r=a(e))[u]=t,r):g(u,t,e))});function $(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};default:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)}}}function t(r,n){if(1===arguments.length)return function(n){return t(r,n)};if(10<r)throw Error("First argument to _arity must be a non-negative integer no greater than ten");return $(r,function i(o,f,c){return function(){for(var n=0,r=0,t=f.length,e=arguments.length,u=Array(t+e);n<t;)u[n]=f[n],n++;for(;r<e;)u[t+r]=arguments[r],r++;return u.length<o?$(o-u.length,i(o,u,c)):c.apply(this,u)}}(r,[],n))}var G=f(function(n,r,t){if(r<n)throw Error("min must not be greater than max in clamp(min, max, value)");return t<n||r<t?r<t?r:t<n?n:void 0:t});function v(n){var r,t=s(n)?Array(n.length):{};if(n&&n.getTime)return new Date(n.getTime());for(r in n){var e=n[r];t[r]="object"===l(e)&&null!==e?e.getTime?new Date(e.getTime()):v(e):e}return t}var J=U(function n(r){B(this,n),this.value=r});function r(n,r,t){if(!s(t))throw new TypeError("reduce: list must be array or iterable");for(var e=0,u=t.length;e<u;){if((r=n(r,t[e],e,t))instanceof J)return r.value;e++}return r}var d=f(r);function K(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};case 10:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}function Q(n,r){return function(){return r.call(this,n.apply(this,arguments))}}function V(){if(0===arguments.length)throw Error("pipe requires at least one argument");return K(arguments[0].length,r(Q,arguments[0],Array.prototype.slice.call(arguments,1,1/0)))}function m(r,n){return 1===arguments.length?function(n){return m(r,n)}:"string"==typeof r?"".concat(r).concat(n):[].concat(h(r),h(n))}var X="Incorrect iterable input",Y=Object.keys;function b(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=Array(r.length);e<r.length;)u[e]=t?n(r[e],e):n(r[e]),e++;return u}function w(r,n){if(1===arguments.length)return function(n){return w(r,n)};for(var t=0,e=Y(n),u=e.length,i={};t<u;){var o=e[t];i[o]=r(n[o],o,n),t++}return i}var Z=w;function j(r,n){if(1===arguments.length)return function(n){return j(r,n)};if(n)return(s(n)?b:w)(r,n);throw Error(X)}function nn(r,n){return 1===arguments.length?function(n){return nn(r,n)}:r<n?n:r}function O(r,n){return 1===arguments.length?function(n){return O(r,n)}:null==(t=n)||!0===Number.isNaN(t)?r:n;var t}function E(n){return null===n?"Null":void 0===n?"Undefined":Number.isNaN(n)?"NaN":"AsyncFunction"===(n=Object.prototype.toString.call(n).slice(8,-1))?"Promise":n}function rn(n,r){if(!s(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=E(n);if(!["Object","Array","NaN","RegExp"].includes(t))return r.lastIndexOf(n);for(var e=r.length,u=-1;-1<--e&&-1===u;)N(r[e],n)&&(u=e);return u}function A(n,r){if(!s(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=E(n);if(!["Object","Array","NaN","RegExp"].includes(t))return r.indexOf(n);for(var e=-1,u=-1,i=r.length;++e<i&&-1===u;)N(r[e],n)&&(u=e);return u}function tn(n){for(var r,t=[];!(r=n.next()).done;)t.push(r.value);return t}function en(n){var r=""+n.__proto__;return["Error","TypeError"].includes(r)?[r,n.message]:[]}function un(n){return n.toDateString?[!0,n.getTime()]:[!1]}function on(n){return n.constructor!==RegExp?[!1]:[!0,""+n]}function N(t,e){var n,u,i,r,o,f,c;return 1===arguments.length?function(n){return N(t,n)}:(n=E(t))===E(e)&&("Function"===n?void 0!==t.name&&t.name===e.name:!!["NaN","Undefined","Null"].includes(n)||("Number"===n?Object.is(-0,t)===Object.is(-0,e)&&""+t==""+e:["String","Boolean"].includes(n)?""+t==""+e:"Array"===n?""+(r=Array.from(t))==""+(u=Array.from(e))&&(i=!0,r.forEach(function(n,r){!i||n===u[r]||N(n,u[r])||(i=!1)}),i):(r=on(t),f=on(e),r[0]?!!f[0]&&r[1]===f[1]:!f[0]&&(r=un(t),f=un(e),r[0]?!!f[0]&&r[1]===f[1]:!f[0]&&(r=en(t),f=en(e),r[0]?!!f[0]&&r[0]===f[0]&&r[1]===f[1]:"Set"===n?(r=t).size===(f=e).size&&(r=tn(r.values()),o=tn(f.values()),0===r.filter(function(n){return-1===A(n,o)}).length):"Object"===n&&(f=Object.keys(t)).length===Object.keys(e).length&&(c=!0,f.forEach(function(n){var r;c&&(r=t[n])!==(n=e[n])&&!N(r,n)&&(c=!1)}),c))))))}function x(r,n){if(1===arguments.length)return function(n){return x(r,n)};if("string"==typeof n)return n.includes(r);if(n)return!!s(n)&&-1<A(r,n);throw new TypeError("Cannot read property 'indexOf' of ".concat(n))}var fn=function(){function n(){B(this,n),this.set=new Set,this.items={}}return U(n,[{key:"checkUniqueness",value:function(n){var r=E(n);return["Null","Undefined","NaN"].includes(r)?!(r in this.items)&&(this.items[r]=!0):["Object","Array"].includes(r)?r in this.items?-1===A(n,this.items[r])&&(this.items[r].push(n),!0):(this.items[r]=[n],!0):(r=this.set.size,this.set.add(n),this.set.size!==r)}}]),n}();function cn(n){var r=new fn,t=[];return n.forEach(function(n){r.checkUniqueness(n)&&t.push(n)}),t}function P(r,n){return 1===arguments.length?function(n){return P(r,n)}:n.slice(0<r?r:0)}function k(r,n){return 1===arguments.length?function(n){return k(r,n)}:n?n[r]:void 0}var an=f(function(n,r,t){return N(k(n,r),k(n,t))});function ln(t,n){return b(function(n,r){return"Function"===E(t[r])?t[r](n):n},n,!0)}function hn(e,n){return w(function(n,r){var t;return"Object"===E(n)?"Function"===(t=E(e[r]))?e[r](n):"Object"===t?sn(e[r],n):n:"Function"===E(e[r])?e[r](n):n},n)}function sn(r,n){if(1===arguments.length)return function(n){return sn(r,n)};var t=E(r),e=E(n);if(e!==t)throw Error("iterableType !== rulesType");if(["Object","Array"].includes(t))return("Object"===e?hn:ln)(r,n);throw Error("'iterable' and 'rules' are from wrong type ".concat(t))}function pn(n,r){var t,e={};for(t in r)n(r[t],t,r)&&(e[t]=r[t]);return e}function gn(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=r.length,i=[];e<u;)(t?n(r[e],e):n(r[e]))&&i.push(r[e]),e++;return i}function S(r,n){if(1===arguments.length)return function(n){return S(r,n)};if(n)return s(n)?gn(r,n,!1):pn(r,n);throw Error("Incorrect iterable input")}function T(n,r){return"string"==typeof n?n.split(1<arguments.length&&void 0!==r?r:"."):n}function yn(n,r){for(var t=r,e=0,u=T(n);e<u.length;){if(null==t)return;if(null===t[u[e]])return;t=t[u[e]],e++}return t}function F(r,n){return 1===arguments.length?function(n){return F(r,n)}:null!=n?yn(r,n):void 0}var vn=Object.is||function(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r};var dn=f(function(n,r,t){return function(){return(!0===("boolean"==typeof n?n:n.apply(void 0,arguments))?r:t).apply(void 0,arguments)}});function mn(n,r,t){for(var e=-1,u=n.length,i=((t=u<t?u:t)<0&&(t+=u),u=t<r?0:t-r>>>0,r>>>=0,Array(u));++e<u;)i[e]=n[e+r];return i}function bn(r,n){return 1===arguments.length?function(n){return bn(r,n)}:null!=n&&n.constructor===r||n instanceof r}function I(t,e){return function(n){return function(r){return n(t(r)).map(function(n){return e(n,r)})}}}function wn(r,n){var t;return 1===arguments.length?function(n){return wn(r,n)}:(t=r<0?n.length+r:r,"[object String]"===Object.prototype.toString.call(n)?n[0|t]||"":n[t])}function jn(n,r,t){t=a(t);return-1===n?t.fill(r,n):t.fill(r,n,n+1)}var On=f(jn);function En(n,r,t){return n(t)>n(r)?t:r}var An=f(En);function Nn(n){return n.reduce(function(n,r){return n+r},0)}function xn(n){return Nn(n)/n.length}function q(r,n){return 1===arguments.length?function(n){return q(r,n)}:Object.assign({},r||{},n||{})}function R(r,t){var e;return 1===arguments.length?function(n){return R(r,n)}:(e=v(r),Object.keys(t).forEach(function(n){"Object"===E(t[n])&&"Object"===E(r[n])?e[n]=R(r[n],t[n]):e[n]=t[n]}),e)}var Pn=f(function(r,t,e){var u={};return Object.keys(t).forEach(function(n){u[n]=void 0===e[n]?t[n]:r(t[n],e[n])}),Object.keys(e).forEach(function(n){void 0===u[n]&&(u[n]=void 0===t[n]?e[n]:r(t[n],e[n]))}),u});function kn(n,r,t){return n(t)<n(r)?t:r}var Sn=f(kn);var Tn=f(function(n,r,t){var e;return!Array.isArray(e=t)&&"Object"!==E(e)||void 0===t[n]?t:s(t)?jn(n,r(t[n]),t):u(u({},t),{},i({},n,r(t[n])))});function Fn(n,r,t){n=T(n);return 1===n.length?u(u({},t),{},i({},n[0],r(t[n[0]]))):void 0===F(n,t)||(r=In(Array.prototype.slice.call(n,1),r,t[n[0]]))===t[n[0]]?t:g(n[0],r,t)}var In=f(Fn);var qn=f(function(n,r,t){if(n<0||r<0)throw Error("Rambda.move does not support negative indexes");var e;return t.length-1<n||t.length-1<r?t:((e=a(t))[n]=t[r],e[r]=t[n],e)});function Rn(r,n){return 1===arguments.length?function(n){return Rn(r,n)}:r*n}function Wn(n,r){var t;return function(){return n&&(t=n.apply(r||this,arguments),n=null),t}}function _n(r){return{x:r,map:function(n){return _n(n(r))}}}var Bn=f(function(n,r,t){return n(function(n){return _n(r(n))})(t).x});function Cn(e){for(var n=arguments.length,u=Array(1<n?n-1:0),r=1;r<n;r++)u[r-1]=arguments[r];var i=e.length;return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u.length+r.length<i?Cn.apply(void 0,[e].concat([].concat(u,r))):e.apply(void 0,u.concat(r))}}function Un(t,n){var e={},u={};return Object.entries(n).forEach(function(n){var n=o(n,2),r=n[0],n=n[1];t(n,r)?e[r]=n:u[r]=n}),[e,u]}function Dn(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=[],u=[],i=-1;i++<r.length-1;)((t?n(r[i],i):n(r[i]))?e:u).push(r[i]);return[e,u]}var Ln=f(function(n,r,t){return N(F(n,t),r)});var zn=f(function(n,r,t){return O(n,F(r,t))});var Mn=d(Rn,1);var Hn=f(function(n,r,t){return!!t&&N(r,k(n,t))});var $n=f(function(n,r,t){return bn(n,t[r])});var Gn=f(function(n,r,t){return t?O(n,t[r]):n});var Jn=f(function(n,r,t){return n(k(r,t))});function Kn(r,n){if(1===arguments.length)return function(n){return Kn(r,n)};if(Number.isNaN(+(""+r))||Number.isNaN(+(""+n)))throw new TypeError("Both arguments to range must be numbers");if(n<r)return[];for(var t=n-r,e=Array(t),u=0;u<t;u++)e[u]=r+u;return e}var Qn=f(function(n,r,t){return t.replace(n,r)});var Vn=f(function(n,r,t){return Bn(n,M(r),t)});var Xn=f(function(n,r,t){return t.slice(n,r)});function W(r,n){return 1===arguments.length?function(n){return W(r,n)}:r<0?n.slice():"string"==typeof n?n.slice(0,r):mn(n,0,r)}function Yn(n){return["Promise","Function"].includes(E(n))}function Zn(r){return{x:r,map:function(n){return Zn(r)}}}var nr=f(function(n,r,t){return n(t)?r(t):t});var rr=f(function(t,n,e){return W((e.length<n.length?e:n).length,n).map(function(n,r){return t(n,e[r])})});n.F=function(){return!1},n.T=function(){return!0},n.__findHighestArity=c,n._arity=K,n._indexOf=A,n._lastIndexOf=rn,n._pipe=Q,n.add=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:+(""+t)+ +(""+n)},n.adjust=z,n.all=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(!t(n[e]))return!1;return!0},n.allPass=function(r){return function(){for(var n=0;n<r.length;){if(!r[n].apply(r,arguments))return!1;n++}return!0}},n.always=M,n.and=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t&&n},n.any=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;){if(t(n[e],e))return!0;e++}return!1},n.anyPass=function(r){return function(){for(var n=0;n<r.length;){if(r[n].apply(r,arguments))return!0;n++}return!1}},n.append=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof n?n.split("").concat(t):((n=a(n)).push(t),n)},n.apply=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t.apply(this,n)},n.applySpec=function(n){var r=c(n);if(0===r)return function(){return{}};for(var t=arguments.length,e=Array(1<t?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return function u(i,o,f){var n=o-f.length;if(1==n)return function(n){return u(i,o,p.apply(void 0,h(f).concat([n])))};if(2==n)return function(n,r){return u(i,o,p.apply(void 0,h(f).concat([n,r])))};if(3==n)return function(n,r,t){return u(i,o,p.apply(void 0,h(f).concat([n,r,t])))};if(4==n)return function(n,r,t,e){return u(i,o,p.apply(void 0,h(f).concat([n,r,t,e])))};if(4<n)return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(i,o,p.apply(void 0,h(f).concat(r)))};if(s(i)){for(var r=[],t=0,e=i.length;t<e;t++)"object"!==l(i[t])&&!s(i[t])||(r[t]=u(i[t],o,f)),"function"==typeof i[t]&&(r[t]=i[t].apply(i,h(f)));return r}var c,a={};for(c in i)0!=i.hasOwnProperty(c)&&"constructor"!==c&&("object"===l(i[c])?a[c]=u(i[c],o,f):"function"==typeof i[c]&&(a[c]=i[c].apply(i,h(f))));return a}(n,r,e)},n.assoc=g,n.assocPath=H,n.bind=function r(e,u){return 1===arguments.length?function(n){return r(e,n)}:t(e.length,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.apply(u,r)})},n.both=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return t.apply(void 0,arguments)&&n.apply(void 0,arguments)}},n.chain=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[]).concat.apply(e,h(n.map(t)))},n.clamp=G,n.clone=v,n.complement=function(n){return function(){return!n.apply(void 0,arguments)}},n.compose=function(){if(0===arguments.length)throw Error("compose requires at least one argument");return V.apply(this,Array.prototype.slice.call(arguments,0).reverse())},n.concat=m,n.cond=function(n){return function(t){var e,u=!1;return n.forEach(function(n){var n=o(n,2),r=n[0],n=n[1];!u&&r(t)&&(u=!0,e=n(t))}),e}},n.converge=function r(e,n){return 1===arguments.length?function(n){return r(e,n)}:t(d(function(n,r){return nn(n,r.length)},0,n),function(){var r=arguments,t=this;return e.apply(this,j(function(n){return n.apply(t,r)},n))})},n.count=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:s(n)?n.filter(function(n){return t(n)}).length:0},n.countBy=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e={},n.forEach(function(n){n=t(n),e[n]?e[n]++:e[n]=1}),e)},n.curry=f,n.curryN=t,n.dec=function(n){return n-1},n.defaultTo=O,n.difference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:cn(t).filter(function(n){return!x(n,e)})},n.dissoc=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null==n)return{};var e,u={};for(e in n)u[e]=n[e];return delete u[t],u},n.divide=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t/n},n.drop=P,n.dropLast=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:0<t?n.slice(0,-t):n.slice()},n.dropLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;var e=s(n);if("function"!=typeof t)throw Error("'predicate' is from wrong type ".concat(l(t)));if(!e&&"string"!=typeof n)throw Error("'iterable' is from wrong type ".concat(l(n)));for(var u=[],i=n.length;i;){var o=n[--i];if(!t(o)){u.push(o);break}}for(;i;)u.push(n[--i]);return e?u.reverse():u.reverse().join("")},n.dropRepeats=function(n){var t;if(s(n))return t=[],n.reduce(function(n,r){return N(n,r)||t.push(r),r},void 0),t;throw Error("".concat(n," is not a list"))},n.dropRepeatsWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e;if(s(n))return e=[],n.reduce(function(n,r){return void 0!==n&&t(n,r)||e.push(r),r},void 0),e;throw Error("".concat(n," is not a list"))},n.dropWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=[],i=0;i<n.length;){var o=n[i++];if(!t(o)){u.push(o);break}}for(;i<n.length;)u.push(n[i++]);return e?u:u.join("")},n.either=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return!(!t.apply(void 0,arguments)&&!n.apply(void 0,arguments))}},n.endsWith=function r(t,e){var u,i;return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof e?e.endsWith(t):!!s(t)&&(u=e.length-t.length,i=!0,t.filter(function(n,r){return!!i&&((n=N(n,e[r+u]))||(i=!1),n)}).length===t.length)},n.eqProps=an,n.equals=N,n.evolve=sn,n.evolveArray=ln,n.evolveObject=hn,n.filter=S,n.filterArray=gn,n.filterObject=pn,n.find=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0,u=n.length;e<u;){var i=n[e];if(t(i))return i;e++}},n.findIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length,u=-1;++u<e;)if(t(n[u]))return u;return-1},n.findLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return n[e]},n.findLastIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return e;return-1},n.flatten=function n(r,t){for(var e=void 0===t?[]:t,u=0;u<r.length;u++)s(r[u])?n(r[u],e):e.push(r[u]);return e},n.flip=function(n){return e=n,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];if(1===r.length)return function(n){return e(n,r[0])};if(2===r.length)return e(r[1],r[0]);if(3===r.length)return e(r[1],r[0],r[2]);if(4===r.length)return e(r[1],r[0],r[2],r[3]);throw Error("R.flip doesn't work with arity > 4")};var e},n.forEach=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(void 0!==n){if(s(n))for(var e=0,u=n.length;e<u;)t(n[e]),e++;else for(var i=0,o=Y(n),f=o.length;i<f;){var c=o[i];t(n[c],c,n),i++}return n}},n.fromPairs=function(n){var r={};return n.forEach(function(n){n=o(n,2);return r[n[0]]=n[1]}),r},n.groupBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e={},u=0;u<n.length;u++){var i=n[u],o=t(i);e[o]||(e[o]=[]),e[o].push(i)}return e},n.groupWith=function(i,o){var n,f,c;if(s(o))return n=a(o),1===o.length?[n]:(f=[],c=[],n.reduce(function(n,r,t){var e,u;return 0!==t&&(e=i(n,r),u=0===c.length,t=t===o.length-1,e?(u&&c.push(n),c.push(r),t&&f.push(c)):u?(f.push([n]),t&&f.push([r])):(f.push(c),t&&f.push([r]),c=[])),r},void 0),f);throw new TypeError("list.reduce is not a function")},n.has=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!n&&n.hasOwnProperty(t)},n.hasPath=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==F(t,n)},n.head=function(n){return"string"==typeof n?n[0]||"":n[0]},n.identical=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:vn(t,n)},n.identity=function(n){return n},n.ifElse=dn,n.inc=function(n){return n+1},n.includes=x,n.indexBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t){for(var e=t,u=n,i={},o=0;o<u.length;o++){var f=u[o];i[F(e,f)]=f}return i}for(var c={},a=0;a<n.length;a++){var l=n[a];c[t(l)]=l}return c},n.indexOf=function(r,n){return 1===arguments.length?function(n){return A(r,n)}:A(r,n)},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?mn(n,0,-1):[]},n.intersection=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:S(function(n){return x(n,t)},n)},n.intersperse=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=n.length,i=[];++e<u;)e===u-1?i.push(n[e]):i.push(n[e],t);return i},n.is=bn,n.isEmpty=function(n){var r=E(n);return!(["Undefined","NaN","Number","Null"].includes(r)||n&&("Object"===r?0!==Object.keys(n).length:"Array"!==r||0!==n.length))},n.isNil=function(n){return null==n},n.join=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.join(t)},n.juxt=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.map(function(n){return n.apply(void 0,r)})}},n.keys=function(n){return Object.keys(n)},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},n.lastIndexOf=function(r,n){return 1===arguments.length?function(n){return rn(r,n)}:rn(r,n)},n.length=function(n){return s(n)||"string"==typeof n?n.length:NaN},n.lens=I,n.lensIndex=function(n){return I(wn(n),On(n))},n.lensPath=function(n){return I(F(n),H(n))},n.lensProp=function(n){return I(k(n),g(n))},n.map=j,n.mapArray=b,n.mapObjIndexed=Z,n.mapObject=w,n.match=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:null===(n=n.match(t))?[]:n},n.mathMod=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:y(t)&&y(n)&&1<=n?(t%n+n)%n:NaN},n.max=nn,n.maxBy=An,n.maxByFn=En,n.mean=xn,n.median=function(n){var r,t=n.length;return 0===t?NaN:(r=(t-(t=2-t%2))/2,xn(Array.prototype.slice.call(n,0).sort(function(n,r){return n===r?0:n<r?-1:1}).slice(r,r+t)))},n.merge=q,n.mergeAll=function(n){var r={};return j(function(n){r=q(r,n)},n),r},n.mergeDeepRight=R,n.mergeLeft=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:q(n,t)},n.mergeRight=q,n.mergeWith=Pn,n.min=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<t?n:t},n.minBy=Sn,n.minByFn=kn,n.modify=Tn,n.modifyPath=In,n.modifyPathFn=Fn,n.modulo=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t%n},n.move=qn,n.multiply=Rn,n.negate=function(n){return-n},n.none=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(t(n[e]))return!1;return!0},n.nop=function(){},n.not=function(n){return!n},n.nth=wn,n.objOf=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:i({},t,n)},n.of=function(n){return[n]},n.omit=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){var e,u=T(t,","),i={};for(e in n)u.includes(e)||(i[e]=n[e]);return i}},n.on=function t(e,u,r,n){return 3===arguments.length?function(n){return t(e,u,r,n)}:2===arguments.length?function(n,r){return t(e,u,n,r)}:e(u(r),u(n))},n.once=function(n,r){return 1===arguments.length?f(Wn(n,r)):Wn(n,r)},n.or=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t||n},n.over=Bn,n.partial=Cn,n.partialObject=function(r,t){return function(n){return r(R(n,t))}},n.partition=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(s(n)?Dn:Un)(t,n)},n.partitionArray=Dn,n.partitionObject=Un,n.path=F,n.pathEq=Ln,n.pathFn=yn,n.pathOr=zn,n.paths=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:t.map(function(n){return F(n,e)})},n.pick=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=T(t,","),u={},i=0;i<e.length;)e[i]in n&&(u[e[i]]=n[e[i]]),i++;return u}},n.pickAll=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=T(t,","),u={},i=0;i<e.length;)u[e[i]]=e[i]in n?n[e[i]]:void 0,i++;return u}},n.pipe=V,n.pluck=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[],j(function(n){void 0!==n[t]&&e.push(n[t])},n),e)},n.prepend=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:[t].concat("string"==typeof n?n.split(""):n)},n.product=Mn,n.prop=k,n.propEq=Hn,n.propIs=$n,n.propOr=Gn,n.propSatisfies=Jn,n.props=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if(s(t))return b(function(n){return e[n]},t);throw Error("propsToPick is not a list")},n.range=Kn,n.reduce=d,n.reduceFn=r,n.reduceStopper=function(n){return new J(n)},n.reject=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:S(function(n){return!t(n)},n)},n.repeat=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:Array(n).fill(t)},n.replace=Qn,n.reverse=function(n){return"string"==typeof n?n.split("").reverse().join(""):n.slice().reverse()},n.set=Vn,n.slice=Xn,n.sort=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:a(n).sort(t)},n.sortBy=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:a(n).sort(function(n,r){return n=t(n),r=t(r),n===r?0:n<r?-1:1})},n.split=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.split(t)},n.splitAt=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e,u,i;if(n)return s(n)||"string"==typeof n?(u=n.length+t<0?0:n.length+t,u=(e=(i=t)<0)&&"Function"===E(u)?u():u,i=e||"Function"!==E(i)?i:i(),[W(e=e?u:i,n),P(e,n)]):[[],[]];throw new TypeError("Cannot read property 'slice' of ".concat(n))},n.splitEvery=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(t<1)throw Error("First argument to splitEvery must be a positive integer");for(var e=[],u=0;u<n.length;)e.push(n.slice(u,u+=t));return e},n.splitWhen=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'length' of ".concat(n));for(var e=[],u=[],i=!1,o=-1;o++<n.length-1;)i?u.push(n[o]):t(n[o])?(u.push(n[o]),i=!0):e.push(n[o]);return[e,u]},n.startsWith=function r(t,e){var u;return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof e?e.startsWith(t):!!s(t)&&(u=!0,t.filter(function(n,r){return!!u&&((n=N(n,e[r]))||(u=!1),n)}).length===t.length)},n.subtract=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t-n},n.sum=Nn,n.symmetricDifference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:m(S(function(n){return!x(n,e)},t),S(function(n){return!x(n,t)},e))},n.tail=function(n){return P(1,n)},n.take=W,n.takeLast=function r(t,n){var e,u;return 1===arguments.length?function(n){return r(t,n)}:(e=n.length,t<0?n.slice():(u=e<t?e:t,"string"==typeof n?n.slice(e-u):mn(n,u=e-u,e)))},n.takeLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;for(var e=[],u=n.length;u;){var i=n[--u];if(!t(i))break;e.push(i)}return s(n)?e.reverse():e.reverse().join("")},n.takeWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=s(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=[],i=0;i<n.length;){var o=n[i++];if(!t(o))break;u.push(o)}return e?u:u.join("")},n.tap=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(t(n),n)},n.test=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t)throw new TypeError('R.test requires a value of type RegExp as its first argument; received "'.concat(t,'"'));return-1!=n.search(t)},n.times=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!y(n)||n<0)throw new RangeError("n must be an integer");return j(t,Kn(0,n))},n.toLower=function(n){return n.toLowerCase()},n.toPairs=function(n){return Object.entries(n)},n.toString=function(n){return""+n},n.toUpper=function(n){return n.toUpperCase()},n.transpose=function(n){return n.reduce(function(t,n){return n.forEach(function(n,r){return s(t[r])?t[r].push(n):t.push([n])}),t},[])},n.trim=function(n){return n.trim()},n.tryCatch=function(e,u){var i;if(Yn(e))return i=Yn(u),function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];try{return e.apply(void 0,r)}catch(n){return i?u.apply(void 0,[n].concat(r)):u}};throw Error("R.tryCatch | fn '".concat(e,"'"))},n.type=E,n.unapply=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.call(this,r)}},n.union=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=a(t),n.forEach(function(n){x(n,t)||e.push(n)}),e)},n.uniq=cn,n.uniqBy=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=new fn,n.filter(function(n){return e.checkUniqueness(t(n))}))},n.uniqWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=[];++e<n.length;){var i=n[e];!function(n,r,t){for(var e=!1,u=-1;++u<t.length&&!e;)n(r,t[u])&&(e=!0);return e}(t,i,u)&&u.push(i)}return u},n.unless=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:function(n){return t(n)?n:e(n)}},n.unnest=function(n){return n.reduce(function(n,r){return[].concat(h(n),Array.isArray(r)?h(r):[r])},[])},n.unwind=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:s(e[t])?b(function(n){return u(u({},e),{},i({},t,n))},e[t]):[e]},n.update=On,n.updateFn=jn,n.values=function(n){return"Object"!==E(n)?[]:Object.values(n)},n.view=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t(Zn)(n).x},n.when=nr,n.where=function r(t,n){if(void 0===n)return function(n){return r(t,n)};var e,u,i=!0;for(e in t)i&&(u=t[e](n[e]),i)&&!1===u&&(i=!1);return i},n.whereAny=function r(t,n){if(void 0===n)return function(n){return r(t,n)};for(var e in t)if(t[e](n[e]))return!0;return!1},n.whereEq=function r(t,e){var n;return 1===arguments.length?function(n){return r(t,n)}:(n=S(function(n,r){return N(n,e[r])},t),Object.keys(n).length===Object.keys(t).length)},n.without=function r(t,n){return void 0===n?function(n){return r(t,n)}:d(function(n,r){return-1<A(r,t)?n:n.concat(r)},[],n)},n.xor=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!t&&!n||!!n&&!t},n.zip=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=[],u=Math.min(t.length,n.length),i=0;i<u;i++)e[i]=[t[i],n[i]];return e},n.zipObj=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:W(e.length,t).reduce(function(n,r,t){return n[r]=e[t],n},{})},n.zipWith=rr});
