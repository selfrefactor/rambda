export function match(pattern) {
  return input => {
    const willReturn = input.match(pattern)

    return willReturn === null ? [] : willReturn
  }
}
