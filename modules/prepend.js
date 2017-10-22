
export default function prepend (x, arr) {
  if (arr === undefined) {
    return arrHolder => prepend(x, arrHolder)
  }
  if (typeof arr === 'string') {
    return `${ x }${ arr }`
  }
  const clone = arr.concat()

  clone.unshift(x)

  return clone
}
