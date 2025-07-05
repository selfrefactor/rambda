export function mapAsync(fn) {
  return async list => {
    const willReturn = []
    let i = 0
    for (const x of list) {
      willReturn.push(await fn(x, i++))
    }

    return willReturn
  }
}
