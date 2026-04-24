import { splitEvery } from "./splitEvery.js";

export function splitEveryStrict(sliceLength) {
  return splitEvery(sliceLength, true)
}
