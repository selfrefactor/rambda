
export default function tap (fn, x) {
  if (x === undefined) {
    return xHolder => tap(fn, xHolder)
  }

  fn(x)

  return x
}
