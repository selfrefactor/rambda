export function append(x, arr) {
  if (arguments.length === 1) {
    return arrHolder => append(x, arrHolder)
  }

  if (typeof arr === 'string') return `${ arr }${ x }`

  const clone = arr.concat()
  clone.push(x)

  return clone
}
