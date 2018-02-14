export default function none (fn, arr) {
  if (arr === undefined) {
    return arrHolder => none(fn, arrHolder)
  }

  return arr.filter(fn).length === 0
}
