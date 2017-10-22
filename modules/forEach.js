import tap from './tap'
import map from './map'

export default function forEach (fn, arr) {
  if (arr === undefined) {
    return arrHolder => forEach(fn, arrHolder)
  }

  return map(tap(fn), arr)
}
