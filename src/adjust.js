import {curry} from './curry'

function adjustRaw(fn, index, arr) {
  const clone = arr.concat()

  return clone.map((val, key) => {
    if (key === index) {
      return fn(arr[ index ])
    }

    return val
  })
}

export const adjust = curry(adjustRaw)