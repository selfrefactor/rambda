import { has } from "./has.js";
import { curry } from "./curry.js";
import { reduce } from "./reduce.js";
import { clone } from "./clone.js";

export function reduceByFn(valueFn, valueAcc, keyFn, list){
  var xf = function(acc, elt) {
    var key = keyFn(elt);
    var value = valueFn(has(key, acc) ? acc[key] : clone(valueAcc), elt);

    acc[key] = value;
    return acc;
  }
  return reduce(xf, {}, list);
}

export const reduceBy = curry(reduceByFn)
