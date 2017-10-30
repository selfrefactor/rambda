export default function is (xPrototype, x) {
  if (x === undefined) {
    return xHolder => is(xPrototype, xHolder)
  }

  return x instanceof xPrototype || x.constructor === xPrototype
}
