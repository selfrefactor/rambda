export function minBy(fn, x, y) {
  if (arguments.length === 2) {
    return yHolder => minBy(fn, x, yHolder)
  } else if (arguments.length === 1) {
    return (xHolder, yHolder) => minBy(fn, xHolder, yHolder)
  }

  return fn(y) < fn(x) ? y : x
}
