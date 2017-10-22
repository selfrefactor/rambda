export default function sort (fn, arr) {
  if (arr === undefined) {
    return arrHolder => sort(fn, arrHolder)
  }
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}
