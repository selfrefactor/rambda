function splitEvery(num, a) {
  if (a === undefined) {
    return holder => splitEvery(num, holder)
  }
  num = num > 1 ?
    num :
    1

  const willReturn = []
  let counter = 0
  while (counter < a.length) {
    willReturn.push(a.slice(counter, counter += num))
  }

  return willReturn
}

module.exports = splitEvery
