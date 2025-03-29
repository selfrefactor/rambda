export function mapAsync(fn) {
  return async list => {
    const willReturn = []
    let i = 0
    for (const a of list) {
      willReturn.push(await fn(a, i++))
    }

    return willReturn
  }
}
