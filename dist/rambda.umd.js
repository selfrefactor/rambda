(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.R = {})));
}(this, (function (exports) { 'use strict';

//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose(...fns) {
  return result => {
    const list = fns.slice();

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}

// import curry from './internal/curry'

function filterObject(fn, obj) {
  const willReturn = {};
  for (const prop in obj) {
    if (fn(obj[prop])) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, arr) {
  if (arr === undefined) {
    return arrHolder => filter(fn, arrHolder);
  }

  if (arr.length === undefined) {
    return filterObject(fn, arr);
  }
  let index = -1;
  let resIndex = 0;
  const len = arr.length;
  const willReturn = [];

  while (++index < len) {
    const value = arr[index];
    if (fn(value)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function range(start, end) {
  const willReturn = [];
  for (let i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

// export { default as add } from './modules/add'
// export { default as addIndex } from './modules/addIndex'
// export { default as adjust } from './modules/adjust'
// export { default as all } from './modules/all'
// export { default as allPass } from './modules/allPass'
// export { default as anyPass } from './modules/anyPass'
// export const always = x => () => x
// export { default as any } from './modules/any'
// export { default as append } from './modules/append'
// export { default as both } from './modules/both'
// export const complement = fn => input => !fn(input)

// export { default as reduce } from './modules/reduce'
// export { default as reject } from './modules/reject'
// export { default as repeat } from './modules/repeat'
// export { default as replace } from './modules/replace'
// export { default as reverse } from './modules/reverse'
// export { default as sort } from './modules/sort'
// export { default as sortBy } from './modules/sortBy'
// export { default as split } from './modules/split'
// export { default as splitEvery } from './modules/splitEvery'
// export { default as startsWith } from './modules/startsWith'
// export { default as subtract } from './modules/subtract'
// export const T = () => true
// export { default as tap } from './modules/tap'
// export { default as tail } from './modules/tail'
// export { default as take } from './modules/take'
// export { default as takeLast } from './modules/takeLast'
// export { default as test } from './modules/test'
// export { default as times } from './modules/times'
// export { default as toLower } from './modules/toLower'
// export { default as toUpper } from './modules/toUpper'
// export { default as toString } from './modules/toString'
// export const trim = x => x.trim()
// export { default as type } from './modules/type'
// export { default as typedPathOr } from './modules/typedPathOr'
// export { default as typedDefaultTo } from './modules/typedDefaultTo'
// export { default as uniq } from './modules/uniq'
// export { default as update } from './modules/update'
// export { default as values } from './modules/values'
// export { default as without } from './modules/without'

exports.compose = compose;
exports.filter = filter;
exports.range = range;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rambda.umd.js.map
