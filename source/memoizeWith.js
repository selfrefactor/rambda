import { curry } from './curry.js'

function memoizeWithFn(keyGen, fn) {
  const cache = new Map()

  return function () {
    const key = keyGen.apply(this, arguments)

    if (!cache.has(key)) {
      cache.set(key, fn.apply(this, arguments))
    }

    return cache.get(key)
  }
}

export const memoizeWith = curry(memoizeWithFn)
