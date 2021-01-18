export function pipe(...fns){
  if (fns.length === 0)
    throw new Error('pipe requires at least one argument')

  return (...args) => {
    const list = fns.slice()
    if (list.length > 0){
      const fn = list.shift()
      let result = fn(...args)
      while (list.length > 0){
        result = list.shift()(result)
      }

      return result
    }
  }
}
