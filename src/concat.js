export function concat(x, y) {
  if (arguments.length === 1) {
    return yHolder => concat(x, yHolder)
  }

  return typeof x === 'string' ? `${ x }${ y }` : [ ...x, ...y ]
}
