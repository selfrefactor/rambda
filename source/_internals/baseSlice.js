export function baseSlice(array, start, end) {
  let index = -1
  const len = array.length
  let endIdx = end > len ? len : end
  if (endIdx < 0) {
    endIdx += len
  }
  const newLen = start > endIdx ? 0 : (endIdx - start) >>> 0
  const result = Array(newLen)
  let startIdx = start >>> 0

  while (++index < newLen) {
    result[index] = array[index + startIdx]
  }

  return result
}
