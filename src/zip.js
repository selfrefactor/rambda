export function zip(left) {
  return right => {
    const result = []
    const length = Math.min(left.length, right.length)

    for (let i = 0; i < length; i++) {
      result[i] = [left[i], right[i]]
    }

    return result
  }
}
