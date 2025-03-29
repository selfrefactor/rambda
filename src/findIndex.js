export function findIndex(predicate) {
  return list => {
    const len = list.length
    let index = -1

    while (++index < len) {
      if (predicate(list[index])) {
        return index
      }
    }

    return -1
  }
}
