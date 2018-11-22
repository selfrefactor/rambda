export function addIndex(functor) {
  return function(fn, ...rest) {
    console.log({a:1})
    let cnt = 0
    const willApply = (...args) => fn.apply(null, [ ...args, cnt++ ])

    return functor.apply(null, [ willApply, ...rest ])
  }
}
