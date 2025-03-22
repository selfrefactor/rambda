export function findLastIndex(fn) {
  return list => {
    let index = list.length

    while (--index >= 0) {
      if (fn(list[index])) {
        return index
      }
    }

    return -1
  }
}
