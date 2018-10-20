export function tap(fn, x) {
  if (arguments.length === 1) return xHolder => tap(fn, xHolder)

  fn(x)

  return x
}
