!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((n="undefined"!=typeof globalThis?globalThis:n||self).R={})}(this,function(n){"use strict";function a(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,r){return l.apply(this,arguments)};case 3:return function(n,r,t){return l.apply(this,arguments)};case 4:return function(n,r,t,e){return l.apply(this,arguments)};case 5:return function(n,r,t,e,u){return l.apply(this,arguments)};case 6:return function(n,r,t,e,u,i){return l.apply(this,arguments)};case 7:return function(n,r,t,e,u,i,o){return l.apply(this,arguments)};case 8:return function(n,r,t,e,u,i,o,f){return l.apply(this,arguments)};case 9:return function(n,r,t,e,u,i,o,f,c){return l.apply(this,arguments)};default:return function(n,r,t,e,u,i,o,f,c,a){return l.apply(this,arguments)}}}function t(r,n){if(1===arguments.length)return function(n){return t(r,n)};if(10<r)throw Error("First argument to _arity must be a non-negative integer no greater than ten");return a(r,function i(o,f,c){return function(){for(var n=0,r=0,t=f.length,e=arguments.length,u=Array(t+e);n<t;)u[n]=f[n],n++;for(;r<e;)u[t+r]=arguments[r],r++;return u.length<o?a(o-u.length,i(o,u,c)):c.apply(this,u)}}(r,[],n))}function R(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return 0},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(n){return n+1};return t(u.length,function(){var r=arguments[0],t=arguments[arguments.length-1],e=i(t.length),n=Array.prototype.slice.call(arguments,0);return n[0]=function(){var n=r.apply(this,function(n,r){for(var t=(n=n||[]).length,e=(r=r||[]).length,u=[],i=0;i<t;)u[u.length]=n[i],i+=1;for(i=0;i<e;)u[u.length]=r[i],i+=1;return u}(arguments,[e,t]));return e=o(e),n},u.apply(this,n)})}function l(n){return Array.prototype.slice.call(n)}function C(r,n){var t,e=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,t)),e}function o(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach(function(n){f(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function h(n){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function U(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function D(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_(e.key),e)}}function L(n,r,t){return r&&D(n.prototype,r),t&&D(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function f(n,r,t){return(r=_(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function i(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,u,i,o,f=[],c=!0,a=!1;try{if(i=(t=t.call(n)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(e=i.call(t)).done)&&(f.push(e.value),f.length!==r);c=!0);}catch(n){a=!0,u=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(a)throw u}}return f}}(n,r)||z(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||z(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(n,r){var t;if(n)return"string"==typeof n?e(n,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(n).slice(8,-1))&&n.constructor?n.constructor.name:t)||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}function e(n,r){for(var t=0,e=Array(r=null!=r&&r<=n.length?r:n.length);t<r;t++)e[t]=n[t];return e}function _(n){n=function(n,r){if("object"!=typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0===t)return("string"===r?String:Number)(n);if("object"!=typeof(t=t.call(n,r||"default")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(n,"string");return"symbol"==typeof n?n:""+n}function c(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return function(){for(var n,r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return(n=[].concat(s(i),t)).length<u.length?c(u,n):u.apply(void 0,s(n))}}var M=c(function(n,r,t){var e=n<0?t.length+n:n;return t.length<=n||e<0?t:((n=l(t))[e]=r(n[e]),n)});function J(r){return function(n){return r}}var p=Array.isArray;function g(n){var r,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;for(r in n)!1!=n.hasOwnProperty(r)&&"constructor"!==r&&("object"===h(n[r])&&(t=Math.max(t,g(n[r]))),"function"==typeof n[r])&&(t=Math.max(t,n[r].length));return t}function v(){for(var n=[],r=0,t=arguments.length;r<t&&void 0!==arguments[r];)n[r]=arguments[r],r++;return n}function u(n,r,t,e){return n===r?0:n<r?t:e}function y(n,r,t){return Object.assign({},t,f({},n,r))}var H=c(y);function $(n){return Number.isInteger(+(""+n))}var d=Number.isInteger||function(n){return n<<0===n};function m(n,r){return"string"==typeof n?n.split(1<arguments.length&&void 0!==r?r:".").map(function(n){return d(n)?+(""+n):n}):n}function G(n,r,t){var e,u,n=m(n);return 0===n.length?r:(e=n[0],1<n.length&&(u="object"!==h(t)||null===t||!t.hasOwnProperty(e)?$(n[1])?[]:{}:t[e],r=G(Array.prototype.slice.call(n,1),r,u)),$(e)&&p(t)?((n=l(t))[e]=r,n):y(e,r,t))}var K=c(G);var Q=c(function(n,r,t){if(r<n)throw Error("min must not be greater than max in clamp(min, max, value)");return t<n||r<t?r<t?r:t<n?n:void 0:t});function b(n){var r,t=p(n)?Array(n.length):{};if(n&&n.getTime)return new Date(n.getTime());for(r in n){var e=n[r];t[r]="object"===h(e)&&null!==e?e.getTime?new Date(e.getTime()):b(e):e}return t}var V=L(function n(r){U(this,n),this.value=r});function X(n,r,t){if(null!=t){if(!p(t))throw new TypeError("reduce: list must be array or iterable");for(var e=0,u=t.length;e<u;){if((r=n(r,t[e],e,t))instanceof V)return r.value;e++}}return r}var j=c(X);function Y(n,r){return function(){return r.call(this,n.apply(this,arguments))}}function Z(){if(0===arguments.length)throw Error("pipe requires at least one argument");return a(arguments[0].length,X(Y,arguments[0],Array.prototype.slice.call(arguments,1,1/0)))}function nn(n){return"string"==typeof n?n[0]||"":n[0]}function rn(n){return n}function tn(n){return"string"==typeof n?n.split("").reverse().join(""):n.slice().reverse()}function O(r,n){return 1===arguments.length?function(n){return O(r,n)}:n.slice(0<r?r:0)}function en(n){return O(1,n)}function un(t,n){var r,e;return 0<n.length?(r=nn(n),e=en(n),a(r.length,function(){return j(function(n,r){return t.call(this,r,n)},r.apply(this,arguments),e)})):rn}function on(r,n){return 1===arguments.length?function(n){return on(r,n)}:"string"==typeof r?"".concat(r).concat(n):[].concat(s(r),s(n))}var fn="Incorrect iterable input",cn=Object.keys;function w(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=Array(r.length);e<r.length;)u[e]=t?n(r[e],e):n(r[e]),e++;return u}function A(r,n){if(1===arguments.length)return function(n){return A(r,n)};for(var t=0,e=cn(n),u=e.length,i={};t<u;){var o=e[t];i[o]=r(n[o],o,n),t++}return i}var an=A;function E(r,n){if(1===arguments.length)return function(n){return E(r,n)};if(n)return(p(n)?w:A)(r,n);throw Error(fn)}function ln(r,n){return 1===arguments.length?function(n){return ln(r,n)}:r<n?n:r}function x(r,n){return 1===arguments.length?function(n){return x(r,n)}:null==(t=n)||!0===Number.isNaN(t)?r:n;var t}function N(n){return null===n?"Null":void 0===n?"Undefined":Number.isNaN(n)?"NaN":"AsyncFunction"===(n=Object.prototype.toString.call(n).slice(8,-1))?"Promise":n}function hn(n,r){if(!p(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=N(n);if(!["Array","NaN","Object","RegExp"].includes(t))return r.lastIndexOf(n);for(var e=r.length,u=-1;-1<--e&&-1===u;)k(r[e],n)&&(u=e);return u}function P(n,r){if(!p(r))throw Error("Cannot read property 'indexOf' of ".concat(r));var t=N(n);if(!["Array","NaN","Object","RegExp"].includes(t))return r.indexOf(n);for(var e=-1,u=-1,i=r.length;++e<i&&-1===u;)k(r[e],n)&&(u=e);return u}function sn(n){for(var r,t=[];!(r=n.next()).done;)t.push(r.value);return t}function pn(n){return n.toDateString?[!0,n.getTime()]:[!1]}function gn(n){return n.constructor!==RegExp?[!1]:[!0,""+n]}function k(t,e){var n,u,i,r,o,f,c,a;return 1===arguments.length?function(n){return k(t,n)}:(n=N(t))===N(e)&&("Function"===n?void 0!==t.name&&t.name===e.name:!!["NaN","Null","Undefined"].includes(n)||(["BigInt","Number"].includes(n)?Object.is(-0,t)===Object.is(-0,e)&&""+t==""+e:["Boolean","String"].includes(n)?""+t==""+e:"Array"===n?""+(r=Array.from(t))==""+(u=Array.from(e))&&(i=!0,r.forEach(function(n,r){!i||n===u[r]||k(n,u[r])||(i=!1)}),i):(r=gn(t),o=gn(e),r[0]?!!o[0]&&r[1]===o[1]:!o[0]&&(r=pn(t),o=pn(e),r[0]?!!o[0]&&r[1]===o[1]:!o[0]&&(t instanceof Error?e instanceof Error&&(r=t).message===(o=e).message&&r.toString===o.toString&&""+r==""+o:"Set"===n?(o=t).size===(c=e).size&&(o=sn(o.values()),f=sn(c.values()),0===o.filter(function(n){return-1===P(n,f)}).length):"Object"===n&&(c=Object.keys(t)).length===Object.keys(e).length&&(a=!0,c.forEach(function(n){var r;a&&(r=t[n])!==(n=e[n])&&!k(r,n)&&(a=!1)}),a))))))}function S(r,n){if(1===arguments.length)return function(n){return S(r,n)};if("string"==typeof n)return n.includes(r);if(n)return!!p(n)&&-1<P(r,n);throw new TypeError("Cannot read property 'indexOf' of ".concat(n))}var vn=function(){function n(){U(this,n),this.set=new Set,this.items={}}return L(n,[{key:"checkUniqueness",value:function(n){var r=N(n);return["Null","Undefined","NaN"].includes(r)?!(r in this.items)&&(this.items[r]=!0):["Object","Array"].includes(r)?r in this.items?-1===P(n,this.items[r])&&(this.items[r].push(n),!0):(this.items[r]=[n],!0):(r=this.set.size,this.set.add(n),this.set.size!==r)}}]),n}();function yn(n){var r=new vn,t=[];return n.forEach(function(n){r.checkUniqueness(n)&&t.push(n)}),t}function dn(t,n,r){var e=[],r=i(r.length<n.length?[n,r]:[r,n],2),n=r[0],u=r[1];return n.forEach(function(r){u.some(function(n){return t(r,n)})||-1!==P(r,e)||e.push(r)}),e}var mn=c(dn);function bn(r,n){if(1===arguments.length)return function(n){return bn(r,n)};if(null!=n){var t,e=m(r,","),u={};for(t in n)!function(n,r){for(var t=-1,e=r.length;++t<e;)if(""+r[t]==""+n)return 1}(t,e)&&(u[t]=n[t]);return u}}function jn(n,r){for(var t=r,e=0,u=m(n);e<u.length;){if(null==t)return;if(null===t[u[e]])return;t=t[u[e]],e++}return t}function F(r,n){return 1===arguments.length?function(n){return F(r,n)}:null!=n?jn(r,n):void 0}function On(r,n){return 1===arguments.length?function(n){return On(r,n)}:0<r?r<n.length-1?[].concat(s(n.slice(0,r)),s(n.slice(r+1))):n.slice(0,n.length-1):n.slice(1)}function wn(n,r,t){t=l(t);return-1===n?t.fill(r,n):t.fill(r,n,n+1)}var An=c(wn);function En(n,r,t){return k(n(r),n(t))}var xn=c(En);function Nn(n,r){if(r)return r[n]}function I(r,n){return 1===arguments.length?function(n){return I(r,n)}:Nn(r,n)}var Pn=c(function(n,r,t){return k(I(n,r),I(n,t))});function kn(t,n){return w(function(n,r){return"Function"===N(t[r])?t[r](n):n},n,!0)}function Sn(e,n){return A(function(n,r){var t;return"Object"===N(n)?"Function"===(t=N(e[r]))?e[r](n):"Object"===t?Fn(e[r],n):n:"Function"===N(e[r])?e[r](n):n},n)}function Fn(r,n){if(1===arguments.length)return function(n){return Fn(r,n)};var t=N(r),e=N(n);if(e!==t)throw Error("iterableType !== rulesType");if(["Object","Array"].includes(t))return("Object"===e?Sn:kn)(r,n);throw Error("'iterable' and 'rules' are from wrong type ".concat(t))}function In(n,r){var t,e={};for(t in r)n(r[t],t,r)&&(e[t]=r[t]);return e}function Tn(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=0,u=r.length,i=[];e<u;)(t?n(r[e],e):n(r[e]))&&i.push(r[e]),e++;return i}function T(r,n){if(1===arguments.length)return function(n){return T(r,n)};if(n)return p(n)?Tn(r,n,!1):In(r,n);throw Error("Incorrect iterable input")}function Wn(n,r){for(var t=0,e=cn(r),u=e.length;t<u;){var i=e[t];n(r[i],i,r),t++}return r}function Bn(r,n){return 1===arguments.length?function(n){return Bn(r,n)}:!!n&&n.hasOwnProperty(r)}var qn=Object.is||function(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r};var Rn=c(function(n,r,t){return function(){return(!0===("boolean"==typeof n?n:n.apply(void 0,arguments))?r:t).apply(void 0,arguments)}});function Cn(n,r,t){for(var e=-1,u=n.length,i=((t=u<t?u:t)<0&&(t+=u),u=t<r?0:t-r>>>0,r>>>=0,Array(u));++e<u;)i[e]=n[e+r];return i}function Un(o,n,f){for(var r=function(n){for(var r=o,t=n,e=f,u=0,i=e.length;u<i;){if(r(t,e[u]))return 1;u+=1}},t=n,e=0,u=t.length,i=[];e<u;)r(t[e])&&(i[i.length]=t[e]),e+=1;return i}var Dn=c(Un);function Ln(r,n){return 1===arguments.length?function(n){return Ln(r,n)}:null!=n&&n.constructor===r||n instanceof r}function r(t,e){return function(n){return function(r){return n(t(r)).map(function(n){return e(n,r)})}}}function zn(r,n){var t;return 1===arguments.length?function(n){return zn(r,n)}:(t=r<0?n.length+r:r,"[object String]"===Object.prototype.toString.call(n)?n[0|t]||"":n[t])}function _n(n,r,t){return n(t)>n(r)?t:r}var Mn=c(_n);function Jn(n){return n.reduce(function(n,r){return n+r},0)}function Hn(n){return Jn(n)/n.length}function W(r,n){return 1===arguments.length?function(n){return W(r,n)}:Object.assign({},r||{},n||{})}function B(r,t){var e;return 1===arguments.length?function(n){return B(r,n)}:(e=b(r),Object.keys(t).forEach(function(n){"Object"===N(t[n])&&"Object"===N(r[n])?e[n]=B(r[n],t[n]):e[n]=t[n]}),e)}function $n(r,n,t){var e=null!=n?n:{},u=null!=t?t:{},i={};return Object.keys(e).forEach(function(n){i[n]=void 0===u[n]?e[n]:r(e[n],u[n])}),Object.keys(u).forEach(function(n){void 0===i[n]&&(i[n]=void 0===e[n]?u[n]:r(e[n],u[n]))}),i}var Gn=c($n);function Kn(n,r,t){return n(t)<n(r)?t:r}var Qn=c(Kn);var Vn=c(function(n,r,t){var e;return!Array.isArray(e=t)&&"Object"!==N(e)||void 0===t[n]?t:p(t)?wn(n,r(t[n]),t):o(o({},t),{},f({},n,r(t[n])))});function Xn(n,r,t){n=m(n);return 1===n.length?o(o({},t),{},f({},n[0],r(t[n[0]]))):void 0===F(n,t)||(r=Yn(Array.prototype.slice.call(n,1),r,t[n[0]]))===t[n[0]]?t:H(n[0],r,t)}var Yn=c(Xn);var Zn=c(function(n,r,t){if(n<0||r<0)throw Error("Rambda.move does not support negative indexes");var e;return t.length-1<n||t.length-1<r?t:((e=l(t))[n]=t[r],e[r]=t[n],e)});function nr(r,n){return 1===arguments.length?function(n){return nr(r,n)}:r*n}function rr(n,r){var t;return function(){return n&&(t=n.apply(r||this,arguments),n=null),t}}function tr(r){return{x:r,map:function(n){return tr(n(r))}}}var er=c(function(n,r,t){return n(function(n){return tr(r(n))})(t).x});function ur(e){for(var u=e.length,n=arguments.length,r=Array(1<n?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var i=1===r.length&&p(r[0])?r[0]:r;return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return i.length+r.length<u?ur.apply(void 0,[e].concat([].concat(s(i),r))):e.apply(void 0,s(i).concat(r))}}function ir(t,n){var e={},u={};return Object.entries(n).forEach(function(n){var n=i(n,2),r=n[0],n=n[1];t(n,r)?e[r]=n:u[r]=n}),[e,u]}function or(n,r){for(var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=[],u=[],i=-1;i++<r.length-1;)((t?n(r[i],i):n(r[i]))?e:u).push(r[i]);return[e,u]}var fr=c(function(n,r,t){return k(F(n,t),r)});var cr=c(function(n,r,t){return x(n,F(r,t))});var ar=j(nr,1);var lr=c(function(n,r,t){return!!t&&k(n,I(r,t))});var hr=c(function(n,r,t){return Ln(n,t[r])});var sr=c(function(n,r,t){return t?x(n,t[r]):n});var pr=c(function(n,r,t){return n(I(r,t))});function gr(r,n){if(1===arguments.length)return function(n){return gr(r,n)};if(Number.isNaN(+(""+r))||Number.isNaN(+(""+n)))throw new TypeError("Both arguments to range must be numbers");if(n<r)return[];for(var t=n-r,e=Array(t),u=0;u<t;u++)e[u]=r+u;return e}function vr(i,o,f,n){return j(function(n,r){return t=i,e=o,n=n,u=(u=f)(r=r),t=t(Bn(u,n)?n[u]:b(e),r),n[u]=t,n;var t,e,u},{},n)}var yr=c(vr);var dr=c(function(n,r,t){return t.replace(n,r)});var mr=c(function(n,r,t){return er(n,J(r),t)});var br=c(function(n,r,t){return t.slice(n,r)});function q(r,n){return 1===arguments.length?function(n){return q(r,n)}:r<0?n.slice():"string"==typeof n?n.slice(0,r):Cn(n,0,r)}function jr(n){return["Promise","Function"].includes(N(n))}function Or(r){return{x:r,map:function(n){return Or(r)}}}var wr=c(function(n,r,t){return n(t)?r(t):t});var Ar=c(function(t,n,e){return q((e.length<n.length?e:n).length,n).map(function(n,r){return t(n,e[r])})});n.F=function(){return!1},n.T=function(){return!0},n.__findHighestArity=g,n._indexOf=P,n._lastIndexOf=hn,n._pipe=Y,n.add=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:+(""+t)+ +(""+n)},n.addIndex=R,n.addIndexRight=function(n){return R(n,function(n){return n-1},function(n){return n-1})},n.adjust=M,n.all=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(!t(n[e]))return!1;return!0},n.allPass=function(r){return function(){for(var n=0;n<r.length;){if(!r[n].apply(r,arguments))return!1;n++}return!0}},n.always=J,n.and=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t&&n},n.any=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;){if(t(n[e],e))return!0;e++}return!1},n.anyPass=function(r){return function(){for(var n=0;n<r.length;){if(r[n].apply(r,arguments))return!0;n++}return!1}},n.ap=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:t.reduce(function(n,r){return[].concat(s(n),s(e.map(r)))},[])},n.aperture=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(n.length<t)return[];for(var e=0,u=n.length-(t-1),i=Array(u);e<u;)i[e]=n.slice(e,e+t),e+=1;return i},n.append=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof n?n.split("").concat(t):((n=l(n)).push(t),n)},n.apply=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t.apply(this,n)},n.applySpec=function(n){var r=g(n);if(0===r)return function(){return{}};for(var t=arguments.length,e=Array(1<t?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return function u(i,o,f){var n=o-f.length;if(1==n)return function(n){return u(i,o,v.apply(void 0,s(f).concat([n])))};if(2==n)return function(n,r){return u(i,o,v.apply(void 0,s(f).concat([n,r])))};if(3==n)return function(n,r,t){return u(i,o,v.apply(void 0,s(f).concat([n,r,t])))};if(4==n)return function(n,r,t,e){return u(i,o,v.apply(void 0,s(f).concat([n,r,t,e])))};if(4<n)return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return u(i,o,v.apply(void 0,s(f).concat(r)))};if(p(i)){for(var r=[],t=0,e=i.length;t<e;t++)"object"!==h(i[t])&&!p(i[t])||(r[t]=u(i[t],o,f)),"function"==typeof i[t]&&(r[t]=i[t].apply(i,s(f)));return r}var c,a={};for(c in i)0!=i.hasOwnProperty(c)&&"constructor"!==c&&("object"===h(i[c])?a[c]=u(i[c],o,f):"function"==typeof i[c]&&(a[c]=i[c].apply(i,s(f))));return a}(n,r,e)},n.applyTo=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n(t)},n.ascend=function t(e,n,r){return 1===arguments.length?function(n,r){return t(e,n,r)}:u(e(n),e(r),-1,1)},n.assoc=H,n.assocFn=y,n.assocPath=K,n.assocPathFn=G,n.binary=function(t){return 2<t.length?function(n,r){return t(n,r)}:t},n.bind=function r(e,u){return 1===arguments.length?function(n){return r(e,n)}:t(e.length,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.apply(u,r)})},n.both=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return t.apply(void 0,arguments)&&n.apply(void 0,arguments)}},n.call=function(n){for(var r=arguments.length,t=Array(1<r?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];return n.apply(void 0,t)},n.chain=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[]).concat.apply(e,s(n.map(t)))},n.clamp=Q,n.clone=b,n.collectBy=function r(e,n){if(1===arguments.length)return function(n){return r(e,n)};var t,u=j(function(n,r){var t=e(r);return void 0===n[t]&&(n[t]=[]),n[t].push(r),n},{},n),i=[];for(t in u)i.push(u[t]);return i},n.comparator=function(t){return function(n,r){return t(n,r)?-1:t(r,n)?1:0}},n.complement=function(n){return function(){return!n.apply(void 0,arguments)}},n.compose=function(){if(0===arguments.length)throw Error("compose requires at least one argument");return Z.apply(this,Array.prototype.slice.call(arguments,0).reverse())},n.composeWith=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:un(t,tn(n))},n.concat=on,n.cond=function(n){return function(t){var e,u=!1;return n.forEach(function(n){var n=i(n,2),r=n[0],n=n[1];!u&&r(t)&&(u=!0,e=n(t))}),e}},n.converge=function r(e,n){return 1===arguments.length?function(n){return r(e,n)}:t(j(function(n,r){return ln(n,r.length)},0,n),function(){var r=arguments,t=this;return e.apply(this,E(function(n){return n.apply(t,r)},n))})},n.count=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:p(n)?n.filter(function(n){return t(n)}).length:0},n.countBy=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e={},n.forEach(function(n){n=t(n),e[n]?e[n]++:e[n]=1}),e)},n.createCompareFunction=u,n.curry=c,n.curryN=t,n.dec=function(n){return n-1},n.defaultTo=x,n.descend=function t(e,n,r){return 1===arguments.length?function(n,r){return t(e,n,r)}:u(e(n),e(r),1,-1)},n.difference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:yn(t).filter(function(n){return!S(n,e)})},n.differenceWith=mn,n.differenceWithFn=dn,n.dissoc=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null==n)return{};var e,u={};for(e in n)u[e]=n[e];return delete u[t],u},n.dissocPath=function r(t,n){var e,u,i;return 1===arguments.length?function(n){return r(t,n)}:0===(i=m(t)).length||void 0===F(i,n)?n:(e=i[0],u="object"!==h(n)||null===n||!n.hasOwnProperty(e),1<i.length?(u=u?$(i[1])?[]:{}:n[e],i=r(Array.prototype.slice.call(i,1),u,n),p(n)?An(e,i,n):o(o({},n),{},f({},e,i))):p(n)?On(e,n):bn([e],n))},n.divide=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t/n},n.drop=O,n.dropLast=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:0<t?n.slice(0,-t):n.slice()},n.dropLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;var e=p(n);if("function"!=typeof t)throw Error("'predicate' is from wrong type ".concat(h(t)));if(!e&&"string"!=typeof n)throw Error("'iterable' is from wrong type ".concat(h(n)));for(var u=[],i=n.length;i;){var o=n[--i];if(!t(o)){u.push(o);break}}for(;i;)u.push(n[--i]);return e?u.reverse():u.reverse().join("")},n.dropRepeats=function(n){var t;if(p(n))return t=[],n.reduce(function(n,r){return k(n,r)||t.push(r),r},void 0),t;throw Error("".concat(n," is not a list"))},n.dropRepeatsBy=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=null,n.slice().filter(function(n){if(null===e)e=t(n);else{if(n=t(n),k(e,n))return!1;e=n}return!0}))},n.dropRepeatsWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e;if(p(n))return e=[],n.reduce(function(n,r){return void 0!==n&&t(n,r)||e.push(r),r},void 0),e;throw Error("".concat(n," is not a list"))},n.dropWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=p(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=[],i=0;i<n.length;){var o=n[i++];if(!t(o)){u.push(o);break}}for(;i<n.length;)u.push(n[i++]);return e?u:u.join("")},n.either=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:function(){return!(!t.apply(void 0,arguments)&&!n.apply(void 0,arguments))}},n.empty=function(n){var r;return"string"==typeof n?"":Array.isArray(n)?"Uint8Array"===(r=n.constructor.name)?Uint8Array.from(""):"Float32Array"===r?new Float32Array([]):[]:"Object"===N(n)?{}:void 0},n.endsWith=function r(t,e){var u,i;return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof e?e.endsWith(t):!!p(t)&&(u=e.length-t.length,i=!0,t.filter(function(n,r){return!!i&&((n=k(n,e[r+u]))||(i=!1),n)}).length===t.length)},n.eqBy=xn,n.eqByFn=En,n.eqProps=Pn,n.equals=k,n.evolve=Fn,n.evolveArray=kn,n.evolveObject=Sn,n.filter=T,n.filterArray=Tn,n.filterObject=In,n.find=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0,u=n.length;e<u;){var i=n[e];if(t(i))return i;e++}},n.findIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length,u=-1;++u<e;)if(t(n[u]))return u;return-1},n.findLast=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return n[e]},n.findLastIndex=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=n.length;0<=--e;)if(t(n[e]))return e;return-1},n.flatten=function n(r,t){for(var e=void 0===t?[]:t,u=0;u<r.length;u++)p(r[u])?n(r[u],e):e.push(r[u]);return e},n.flip=function(n){return e=n,function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];if(1===r.length)return function(n){return e(n,r[0])};if(2===r.length)return e(r[1],r[0]);if(3===r.length)return e(r[1],r[0],r[2]);if(4===r.length)return e(r[1],r[0],r[2],r[3]);throw Error("R.flip doesn't work with arity > 4")};var e},n.forEach=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(void 0!==n){if(!p(n))return Wn(t,n);for(var e=0,u=n.length;e<u;)t(n[e]),e++;return n}},n.forEachObjIndexed=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==n?Wn(t,n):void 0},n.forEachObjIndexedFn=Wn,n.fromPairs=function(n){var r={};return n.forEach(function(n){n=i(n,2);return r[n[0]]=n[1]}),r},n.groupBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e={},u=0;u<n.length;u++){var i=n[u],o=t(i);e[o]||(e[o]=[]),e[o].push(i)}return e},n.groupWith=function(i,o){var n,f,c;if(p(o))return n=l(o),1===o.length?[n]:(f=[],c=[],n.reduce(function(n,r,t){var e,u;return 0!==t&&(e=i(n,r),u=0===c.length,t=t===o.length-1,e?(u&&c.push(n),c.push(r),t&&f.push(c)):u?(f.push([n]),t&&f.push([r])):(f.push(c),t&&f.push([r]),c=[])),r},void 0),f);throw new TypeError("list.reduce is not a function")},n.gt=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<t},n.gte=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<=t},n.has=Bn,n.hasIn=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==Nn(t,n)},n.hasPath=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:void 0!==F(t,n)},n.head=nn,n.identical=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:qn(t,n)},n.identity=rn,n.ifElse=Rn,n.inc=function(n){return n+1},n.includes=S,n.indexBy=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t){for(var e=t,u=n,i={},o=0;o<u.length;o++){var f=u[o];i[F(e,f)]=f}return i}for(var c={},a=0;a<n.length;a++){var l=n[a];c[t(l)]=l}return c},n.indexOf=function(r,n){return 1===arguments.length?function(n){return P(r,n)}:P(r,n)},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?Cn(n,0,-1):[]},n.innerJoin=Dn,n.innerJoinFn=Un,n.intersection=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:T(function(n){return S(n,t)},n)},n.intersperse=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=n.length,i=[];++e<u;)e===u-1?i.push(n[e]):i.push(n[e],t);return i},n.is=Ln,n.isEmpty=function(n){var r=N(n);return!(["Undefined","NaN","Number","Null"].includes(r)||n&&("Object"===r?0!==Object.keys(n).length:"Array"!==r||0!==n.length))},n.isNil=function(n){return null==n},n.join=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.join(t)},n.juxt=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.map(function(n){return n.apply(void 0,r)})}},n.keys=function(n){return Object.keys(n)},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},n.lastIndexOf=function(r,n){return 1===arguments.length?function(n){return hn(r,n)}:hn(r,n)},n.length=function(n){return p(n)||"string"==typeof n?n.length:NaN},n.lens=r,n.lensIndex=function(n){return r(zn(n),An(n))},n.lensPath=function(n){return r(F(n),K(n))},n.lensProp=function(n){return r(I(n),H(n))},n.map=E,n.mapArray=w,n.mapObjIndexed=an,n.mapObject=A,n.match=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:null===(n=n.match(t))?[]:n},n.mathMod=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:d(t)&&d(n)&&1<=n?(t%n+n)%n:NaN},n.max=ln,n.maxBy=Mn,n.maxByFn=_n,n.mean=Hn,n.median=function(n){var r,t=n.length;return 0===t?NaN:(r=(t-(t=2-t%2))/2,Hn(Array.prototype.slice.call(n,0).sort(function(n,r){return n===r?0:n<r?-1:1}).slice(r,r+t)))},n.merge=W,n.mergeAll=function(n){var r={};return E(function(n){r=W(r,n)},n),r},n.mergeDeepRight=B,n.mergeLeft=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:W(n,t)},n.mergeRight=W,n.mergeWith=Gn,n.mergeWithFn=$n,n.min=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n<t?n:t},n.minBy=Qn,n.minByFn=Kn,n.modify=Vn,n.modifyPath=Yn,n.modifyPathFn=Xn,n.modulo=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t%n},n.move=Zn,n.multiply=nr,n.negate=function(n){return-n},n.none=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=0;e<n.length;e++)if(t(n[e]))return!1;return!0},n.not=function(n){return!n},n.nth=zn,n.objOf=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:f({},t,n)},n.of=function(n){return[n]},n.omit=bn,n.on=function t(e,u,r,n){return 3===arguments.length?function(n){return t(e,u,r,n)}:2===arguments.length?function(n,r){return t(e,u,n,r)}:e(u(r),u(n))},n.once=function(n,r){return 1===arguments.length?c(rr(n,r)):rr(n,r)},n.or=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t||n},n.over=er,n.partial=ur,n.partialObject=function(r,t){return function(n){return r(B(n,t))}},n.partition=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(p(n)?or:ir)(t,n)},n.partitionArray=or,n.partitionObject=ir,n.path=F,n.pathEq=fr,n.pathFn=jn,n.pathOr=cr,n.paths=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:t.map(function(n){return F(n,e)})},n.pick=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=m(t,","),u={},i=0;i<e.length;)e[i]in n&&(u[e[i]]=n[e[i]]),i++;return u}},n.pickAll=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(null!=n){for(var e=m(t,","),u={},i=0;i<e.length;)u[e[i]]=e[i]in n?n[e[i]]:void 0,i++;return u}},n.pipe=Z,n.pipeWith=un,n.pluck=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=[],E(function(n){void 0!==n[t]&&e.push(n[t])},n),e)},n.prepend=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:[t].concat("string"==typeof n?n.split(""):n)},n.product=ar,n.prop=I,n.propEq=lr,n.propFn=Nn,n.propIs=hr,n.propOr=sr,n.propSatisfies=pr,n.props=function r(t,e){if(1===arguments.length)return function(n){return r(t,n)};if(p(t))return w(function(n){return e[n]},t);throw Error("propsToPick is not a list")},n.range=gr,n.reduce=j,n.reduceBy=yr,n.reduceByFn=vr,n.reduceFn=X,n.reduceStopper=function(n){return new V(n)},n.reject=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:T(function(n){return!t(n)},n)},n.removeIndex=On,n.repeat=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:Array(n).fill(t)},n.replace=dr,n.reverse=tn,n.set=mr,n.slice=br,n.sort=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:l(n).sort(t)},n.sortBy=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:l(n).sort(function(n,r){return n=t(n),r=t(r),n===r?0:n<r?-1:1})},n.sortWith=function r(f,n){return 1===arguments.length?function(n){return r(f,n)}:!1===Array.isArray(n)?[]:((n=n.slice()).sort(function(n,r){for(var t=n,e=r,u=f,i=0,o=0;0===i&&o<u.length;)i=u[o](t,e),o+=1;return i}),n)},n.split=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:n.split(t)},n.splitAt=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e,u,i;if(n)return p(n)||"string"==typeof n?(u=n.length+t<0?0:n.length+t,u=(e=(i=t)<0)&&"Function"===N(u)?u():u,i=e||"Function"!==N(i)?i:i(),[q(e=e?u:i,n),O(e,n)]):[[],[]];throw new TypeError("Cannot read property 'slice' of ".concat(n))},n.splitEvery=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(t<1)throw Error("First argument to splitEvery must be a positive integer");for(var e=[],u=0;u<n.length;)e.push(n.slice(u,u+=t));return e},n.splitWhen=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!n)throw new TypeError("Cannot read property 'length' of ".concat(n));for(var e=[],u=[],i=!1,o=-1;o++<n.length-1;)i?u.push(n[o]):t(n[o])?(u.push(n[o]),i=!0):e.push(n[o]);return[e,u]},n.startsWith=function r(t,e){var u;return 1===arguments.length?function(n){return r(t,n)}:"string"==typeof e?e.startsWith(t):!!p(t)&&(u=!0,t.filter(function(n,r){return!!u&&((n=k(n,e[r]))||(u=!1),n)}).length===t.length)},n.subtract=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t-n},n.sum=Jn,n.symmetricDifference=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:on(T(function(n){return!S(n,e)},t),T(function(n){return!S(n,t)},e))},n.tail=en,n.take=q,n.takeLast=function r(t,n){var e,u;return 1===arguments.length?function(n){return r(t,n)}:(e=n.length,t<0?n.slice():(u=e<t?e:t,"string"==typeof n?n.slice(e-u):Cn(n,u=e-u,e)))},n.takeLastWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(0===n.length)return n;for(var e=[],u=n.length;u;){var i=n[--u];if(!t(i))break;e.push(i)}return p(n)?e.reverse():e.reverse().join("")},n.takeWhile=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};var e=p(n);if(!e&&"string"!=typeof n)throw Error("`iterable` is neither list nor a string");for(var u=[],i=0;i<n.length;){var o=n[i++];if(!t(o))break;u.push(o)}return e?u:u.join("")},n.tap=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:(t(n),n)},n.test=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if("string"==typeof t)throw new TypeError('R.test requires a value of type RegExp as its first argument; received "'.concat(t,'"'));return-1!=n.search(t)},n.times=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};if(!d(n)||n<0)throw new RangeError("n must be an integer");return E(t,gr(0,n))},n.toLower=function(n){return n.toLowerCase()},n.toPairs=function(n){return Object.entries(n)},n.toString=function(n){return""+n},n.toUpper=function(n){return n.toUpperCase()},n.transpose=function(n){return n.reduce(function(t,n){return n.forEach(function(n,r){return p(t[r])?t[r].push(n):t.push([n])}),t},[])},n.trim=function(n){return n.trim()},n.tryCatch=function(e,u){var i;if(jr(e))return i=jr(u),function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];try{return e.apply(void 0,r)}catch(n){return i?u.apply(void 0,[n].concat(r)):u}};throw Error("R.tryCatch | fn '".concat(e,"'"))},n.type=N,n.unapply=function(e){return function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.call(this,r)}},n.union=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=l(t),n.forEach(function(n){S(n,t)||e.push(n)}),e)},n.uniq=yn,n.uniqBy=function r(t,n){var e;return 1===arguments.length?function(n){return r(t,n)}:(e=new vn,n.filter(function(n){return e.checkUniqueness(t(n))}))},n.uniqWith=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=-1,u=[];++e<n.length;){var i=n[e];!function(n,r,t){for(var e=!1,u=-1;++u<t.length&&!e;)n(r,t[u])&&(e=!0);return e}(t,i,u)&&u.push(i)}return u},n.unless=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:function(n){return t(n)?n:e(n)}},n.unnest=function(n){return n.reduce(function(n,r){return[].concat(s(n),Array.isArray(r)?s(r):[r])},[])},n.unwind=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:p(e[t])?w(function(n){return o(o({},e),{},f({},t,n))},e[t]):[e]},n.update=An,n.updateFn=wn,n.values=function(n){return"Object"!==N(n)?[]:Object.values(n)},n.view=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:t(Or)(n).x},n.when=wr,n.where=function r(t,n){if(void 0===n)return function(n){return r(t,n)};var e,u,i=!0;for(e in t)i&&(u=t[e](n[e]),i)&&!1===u&&(i=!1);return i},n.whereAny=function r(t,n){if(void 0===n)return function(n){return r(t,n)};for(var e in t)if(t[e](n[e]))return!0;return!1},n.whereEq=function r(t,e){var n;return 1===arguments.length?function(n){return r(t,n)}:(n=T(function(n,r){return k(n,e[r])},t),Object.keys(n).length===Object.keys(t).length)},n.without=function r(t,n){return void 0===n?function(n){return r(t,n)}:j(function(n,r){return-1<P(r,t)?n:n.concat(r)},[],n)},n.xor=function r(t,n){return 1===arguments.length?function(n){return r(t,n)}:!!t&&!n||!!n&&!t},n.zip=function r(t,n){if(1===arguments.length)return function(n){return r(t,n)};for(var e=[],u=Math.min(t.length,n.length),i=0;i<u;i++)e[i]=[t[i],n[i]];return e},n.zipObj=function r(t,e){return 1===arguments.length?function(n){return r(t,n)}:q(e.length,t).reduce(function(n,r,t){return n[r]=e[t],n},{})},n.zipWith=Ar});
