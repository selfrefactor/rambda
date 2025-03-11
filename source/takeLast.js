import { baseSlice } from './_internals/baseSlice.js'

export function takeLast(numberOfItems) {
  return input => {
    const len = input.length
    if (numberOfItems < 0) {
      return input.slice()
    }
    let numValue = numberOfItems > len ? len : numberOfItems

    if (typeof input === 'string') {
      return input.slice(len - numValue)
    }

    numValue = len - numValue

    return baseSlice(input, numValue, len)
  }
}
