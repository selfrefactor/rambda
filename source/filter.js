export function filter(predicate) {
  return list => {
    if (!list) {
      throw new Error('Incorrect iterable input')
    }
    let index = 0
    const len = list.length
    const willReturn = []

    while (index < len) {
      if (predicate(list[index], index)) {
        willReturn.push(list[index])
      }

      index++
    }

    return willReturn
  }
}
