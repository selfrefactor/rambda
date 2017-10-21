export default function append (x, arr) {
  if (arr === undefined) {
    return arrHolder => append(x, arrHolder)
  }
  if (typeof arr === 'string') {
    return `${ arr }${ x }`
  }
  const clone = arr.concat()

  clone.push(x)

  return clone
}
