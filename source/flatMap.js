export function flatMap(fn, xs){
  if (arguments.length === 1){
    return xsHolder => flatMap(fn, xsHolder)
  }

  return [].concat(...xs.map(fn))
}
