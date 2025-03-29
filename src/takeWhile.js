export function takeWhile(predicate) {
  return iterable => {
    const toReturn = []
    let counter = 0

    while (counter < iterable.length) {
      const item = iterable[counter++]
      if (!predicate(item)) {
        break
      }
      toReturn.push(item)
    }
    return toReturn
  }
}
