import { curryN } from './curryN.js'

function flipExport(fn) {
  const flipedFn = (...input) => {
    const missing = fn.length - input.length;

    if (missing <= 0)
      return fn(input[1], input[0], ...input.slice(2))

    if (input.length === 0)
      return flipedFn

    if (input.length === 1)
      return curryN(missing, (...rest) => {
        const args = [rest[0], input[0], ...rest.slice(1)]
        return fn(...args)
      })

    // input.length >= 2
    return curryN(missing, (...rest) => {
      const args = [input[1], input[0], ...input.slice(2), ...rest]
      return fn(...args)
    })
  }

  return flipedFn
}

export function flip(fn){
  return flipExport(fn)
}
