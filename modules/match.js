export default function match (regex, x) {
  if (x === undefined) {
    return xHolder => match(regex, xHolder)
  }
  const willReturn = x.match(regex)

  return willReturn === null ?
    [] :
    willReturn
}
