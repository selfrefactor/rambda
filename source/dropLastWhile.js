export function dropLastWhile(predicate) {
  return list => {
    if (list.length === 0) {
      return list
    }

    const toReturn = []
    let counter = list.length

    while (counter) {
      const item = list[--counter]
      if (!predicate(item, counter)) {
        toReturn.push(item)
        break
      }
    }

    while (counter) {
      toReturn.push(list[--counter])
    }

    return toReturn.reverse()
  }
}
