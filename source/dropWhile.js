export function dropWhile(predicate) {
  return iterable => {
    const toReturn = []
    let counter = 0

    while (counter < iterable.length) {
      const item = iterable[counter++]
      if (!predicate(item, counter)) {
        toReturn.push(item)
        break
      }
    }

    while (counter < iterable.length) {
      toReturn.push(iterable[counter++])
    }

    return toReturn
  }
}
