export function type(input) {
  if (input === null) {
    return 'Null'
  }
  if (input === undefined) {
    return 'Undefined'
  }
  if (Number.isNaN(input)) {
    return 'NaN'
  }
  const typeResult = Object.prototype.toString.call(input).slice(8, -1)
  return typeResult === 'AsyncFunction' ? 'Promise' : typeResult
}
