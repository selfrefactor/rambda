export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)

  return list.find(predicate)
}
