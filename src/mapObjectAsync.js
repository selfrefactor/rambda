export function mapObjectAsync(fn) {
  return async obj => {
    const willReturn = {}
    for (const prop in obj) {
      willReturn[prop] = await fn(obj[prop], prop)
    }

    return willReturn
  }
}
