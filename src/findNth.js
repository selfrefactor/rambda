export function findNth(predicate, nth) {
  return list => {
    let index = 0
    const len = list.length

    while (index < len) {
      const x = list[index]
      if (predicate(x)) {
				if (nth === 0) return x
				nth--
      }

      index++
    }
  }
}
