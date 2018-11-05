export function is(xPrototype, x) {
  if (arguments.length === 1) {
    return xHolder => is(xPrototype, xHolder)
  }

  return (
    x != null && x.constructor === xPrototype ||
    x instanceof xPrototype
  )
}
