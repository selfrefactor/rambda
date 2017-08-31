export default function addIndex (functor) {
  return function (fn, ...rest) {
    let cnt = 0
    const newFn = (...args) => fn.apply(null, [ ...args, cnt++ ])

    return functor.apply(null, [ newFn, ...rest ])
  }
}
