export function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument')
  }

  return function (...args) {
    const list = fns.slice()
    if (list.length > 0) {
      const fn = list.pop()
      let result = fn.apply(this, args)
      while (list.length > 0) {
        result = list.pop()(result)
      }

      return result
    }
  }
}
