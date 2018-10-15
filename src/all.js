import { filter } from './filter'

export function all(condition, arr) {
  if (arguments.length === 1) {
    return arrHolder => all(condition, arrHolder)
  }

  return filter(condition, arr).length === arr.length
}
