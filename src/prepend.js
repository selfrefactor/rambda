export function prepend(x, arr) {
  if (arguments.length === 1)
    return arrHolder => prepend(x, arrHolder)

  if (typeof arr === 'string') {
    return `${ x }${ arr }`
  }
  const clone = arr.concat()
  clone.unshift(x)

  return clone
}
