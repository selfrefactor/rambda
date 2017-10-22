import filter from './filter'

export default function reject (fn, arr) {
  if (arr === undefined) {
    return arrHolder => reject(fn, arrHolder)
  }

  return filter(x => !fn(x), arr)
}
