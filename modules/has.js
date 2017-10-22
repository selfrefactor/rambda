export default function has (prop, obj) {
  if (obj === undefined) {
    return objHolder => has(prop, objHolder)
  }

  return obj[ prop ] !== undefined
}
