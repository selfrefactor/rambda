export function indexBy(fn, list) {
  if (arguments.length === 1) {
    return listHolder => indexBy(fn, listHolder)
  }

  const result = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[ i ]
    result[ fn(item) ] = item
  }

  return result
}
