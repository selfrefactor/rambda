export function pluck(property) {
  return list => {
    const willReturn = []

    list.forEach(x => {
      if (x[property] !== undefined) {
        willReturn.push(x[property])
      }
    })

    return willReturn
  }
}
