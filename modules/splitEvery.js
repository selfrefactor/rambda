
export default function splitEvery (num, x) {
  if (x === undefined) {
    return xHolder => splitEvery(num, xHolder)
  }

  const numValue = num > 1 ?
    num :
    1

  const willReturn = []
  let counter = 0

  while (counter < x.length) {
    willReturn.push(x.slice(counter, counter += numValue))
  }

  return willReturn
}
