function includesWith(predicate, target, list) {
  let willReturn = false
  let index = -1

  while (++index < list.length && !willReturn) {
    const value = list[index]

    if (predicate(target, value)) {
      willReturn = true
    }
  }

  return willReturn
}

export function uniqWith(predicate) {
  return list => {
    let index = -1
    const willReturn = []

    while (++index < list.length) {
      const value = list[index]

      if (!includesWith(predicate, value, willReturn)) {
        willReturn.push(value)
      }
    }

    return willReturn
  }
}
