import { filter } from './filter'

export function reject(fn, arr) {
  if (arguments.length === 1) return arrHolder => reject(fn, arrHolder)

  return filter(x => !fn(x), arr)
}
