export function intersperse(separator) {
  return list => {
    let index = -1
    const len = list.length
    const willReturn = []

    while (++index < len) {
      if (index === len - 1) {
        willReturn.push(list[index])
      } else {
        willReturn.push(list[index], separator)
      }
    }

    return willReturn
  }
}
