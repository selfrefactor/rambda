export function maxBy(fn, x, y) {
  if (arguments.length === 2) {
    return yHolder => maxBy(fn, x, yHolder)
  } else if (arguments.length === 1) {
    return (xHolder, yHolder) => maxBy(fn, xHolder, yHolder)
  }

  return fn(y) > fn(x) ? y : x
}
