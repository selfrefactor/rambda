export function splitEvery(sliceLength, strict = false) {
  return list => {
    if (sliceLength < 1) {
      throw new Error('First argument to splitEvery must be a positive integer')
    }

    const willReturn = []
    let counter = 0

    while (counter < list.length) {
			if (strict && counter + sliceLength > list.length) break;
      willReturn.push(list.slice(counter, (counter += sliceLength)))
    }

    return willReturn
  }
}
