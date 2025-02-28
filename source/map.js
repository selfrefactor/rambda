export function map(fn) {
  return list => {
    let index = 0
    const willReturn = Array(list.length)
    while (index < list.length) {
      willReturn[index] = fn(list[index])
      index++
    }
    return willReturn
  }
}
