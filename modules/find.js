export default function find (fn, arr) {
  if (arr === undefined) {
    return arrHolder => find(fn, arrHolder)
  }

  return arr.find(fn)
}
