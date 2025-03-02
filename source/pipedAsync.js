import { reduce } from "./reduce.js";

export function pipedAsync(input, ...fnList) {
  return reduce(async (value, fn) => fn(await value), input, fnList)
}
