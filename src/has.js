export function has(prop, obj) {
  if (arguments.length === 1) {
    return objHolder => has(prop, objHolder)
  }

  return obj[ prop ] !== undefined
}
