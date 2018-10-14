function flipExport (fn) {
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[ 0 ])
    } else if (input.length === 2) {
      return fn(input[ 1 ], input[ 0 ])
    }

    return undefined
  }
}

export default function flip (fn, ...input) {
  return flipExport(fn)
}
