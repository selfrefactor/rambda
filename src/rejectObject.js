export function rejectObject(predicate) {
  return obj => {
    const willReturn = {}

    for (const prop in obj) {
      if (!predicate(obj[prop], prop, obj)) {
        willReturn[prop] = obj[prop]
      }
    }

    return willReturn
  }
}
