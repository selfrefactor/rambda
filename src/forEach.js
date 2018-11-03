import { map } from './map'

export function forEach(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => forEach(fn, arrHolder)
  }

  map(fn, arr)

  return arr
}
