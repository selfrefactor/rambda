export default function concat (x, y) {
  if (y === undefined) {
    return yHolder => concat(x, yHolder)
  }

  return typeof x === 'string' ? `${ x }${ y }` : [ ...x, ...y ]
}
