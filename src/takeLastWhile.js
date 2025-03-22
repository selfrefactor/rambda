export function takeLastWhile(predicate) {
  return input => {
    if (input.length === 0) {
      return input
    }

    const toReturn = []
    let counter = input.length

    while (counter) {
      const item = input[--counter]
      if (!predicate(item)) {
        break
      }
      toReturn.push(item)
    }

    return toReturn.reverse()
  }
}
