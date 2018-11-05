export function zipObj(x, y) {
  if (arguments.length === 1) return yHolder => zipObj(x, yHolder)

  return x.reduce((prev, xInstance, i) => {
    prev[ xInstance ] = y[ i ]

    return prev
  }, {})
}
