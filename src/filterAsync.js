export function filterAsync(predicate) {
  return async list => {
    const willReturn = []
    let index = 0
    for (const x of list) {
      if (await predicate(x, index)) {
        willReturn.push(list[index])
      }
      index++
    }

    return willReturn
  }
}
