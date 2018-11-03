export function match(regex, x) {
  if (arguments.length === 1) {
    return xHolder => match(regex, xHolder)
  }

  const willReturn = x.match(regex)

  return willReturn === null ? [] : willReturn
}
