export function countBy(fn) {
  return list => {
    const willReturn = {}

    list.forEach(item => {
      const key = fn(item)
      if (!willReturn[key]) {
        willReturn[key] = 1
      } else {
        willReturn[key]++
      }
    })

    return willReturn
  }
}
