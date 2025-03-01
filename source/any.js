export function any(predicate) {
  return list => {
    let counter = 0
    while (counter < list.length) {
      if (predicate(list[counter], counter)) {
        return true
      }
      counter++
    }

    return false
  }
}
