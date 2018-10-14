export default function propEq (key, x, obj) {
  if (x === undefined) {
    return (xHolder, objHolder) => propEq(key, xHolder, objHolder)
  } else if (obj === undefined) {
    return objHolder => propEq(key, x, objHolder)
  }

  return obj[ key ] === x
}
