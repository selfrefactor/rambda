import { cloneList } from './_internals/cloneList.js'

/**
 * Source:
 * https://github.com/denoland/std/blob/main/collections/permutations.ts
 */
export function permutations(inputArray) {
  const result = [];
  const array = cloneList(inputArray);
  const k = array.length;
  if (k === 0) {
    return result;
  }

  const c = new Array(k).fill(0);

  result.push([...array]);

  let i = 1;

  while (i < k) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        [array[0], array[i]] = [array[i], array[0]]
      } else {
        [array[c[i]], array[i]] = [array[i], array[c[i]]]
      }

      result.push([...array]);

      c[i] += 1;
      i = 1;
    } else {
      c[i] = 0;
      i += 1;
    }
  }

  return result;
}