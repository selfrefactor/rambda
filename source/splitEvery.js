export function splitEvery(sliceLength) {
  return list => {
    if (sliceLength < 1) {
      throw new Error('First argument to splitEvery must be a positive integer')
    }

    const willReturn = []
    let counter = 0

    while (counter < list.length) {
      willReturn.push(list.slice(counter, (counter += sliceLength)))
    }

    return willReturn
  }
}
