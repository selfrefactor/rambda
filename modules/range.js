export default function range (start, end) {
  if (end === undefined) {
    return endHolder => range(start, endHolder)
  }
  const willReturn = []

  for (let i = start; i < end; i++) {
    willReturn.push(i)
  }

  return willReturn
}
