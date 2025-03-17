export function find(predicate) {
  return list => {
    let index = 0
    const len = list.length

    while (index < len) {
      const x = list[index]
      if (predicate(x)) {
        return x
      }

      index++
    }
  }
}
