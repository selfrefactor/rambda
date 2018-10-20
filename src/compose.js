export function compose(...fns) {
  return (...args) => {
    const list = fns.slice()
    if (list.length > 0) {
      const fn = list.pop()
      let result = fn(...args)
      while (list.length > 0) {
        result = list.pop()(result)
      }

      return result
    }

    return undefined
  }
}
