export default function reduce (fn, initialValue, arr) {
  if (initialValue === undefined) {
    return (initialValueHolder, arrHolder) => reduce(fn, initialValueHolder, arrHolder)
  } else if (arr === undefined) {
    return arrHolder => reduce(fn, initialValue, arrHolder)
  }

  return arr.reduce(fn, initialValue)
}
