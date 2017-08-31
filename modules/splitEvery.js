import curry from './internal/curry'

function splitEvery (num, a) {
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

export default curry(splitEvery)
