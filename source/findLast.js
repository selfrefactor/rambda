export function findLast(predicate) {
  return list => {
    let index = list.length

    while (--index >= 0) {
      if (predicate(list[index])) {
        return list[index]
      }
    }

    return undefined
  }
}
