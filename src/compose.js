/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @func
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
export function compose(...fns){
  if (fns.length === 0){
    throw new Error('compose requires at least one argument')
  }

  return (...args) => {
    const list = fns.slice()
    if (list.length > 0){
      const fn = list.pop()
      let result = fn(...args)
      while (list.length > 0){
        result = list.pop()(result)
      }

      return result
    }
  }
}
