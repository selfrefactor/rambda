export function uniqBy(fn, list){
  if (arguments.length === 1){
    return _list => uniqBy(fn, _list)
  }
  const set = new Set()

  return list.filter(item => {
    if (set.has(fn(item))) return false
    set.add(fn(item))

    return true
  })
}
