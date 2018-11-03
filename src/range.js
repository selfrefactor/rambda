export function range(start, end) {
  if (arguments.length === 1)
    return endHolder => range(start, endHolder)

  const willReturn = []

  for (let i = start; i < end; i++) {
    willReturn.push(i)
  }

  return willReturn
}
