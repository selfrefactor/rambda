import { sortByFn } from "./sortBy.js";

export function sortByDescending(sortFn) {
  return list => sortByFn(sortFn, list, true)
}
