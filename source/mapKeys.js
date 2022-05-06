export function mapKeys(changeKeyFn, obj){
  if (arguments.length === 1) return _obj => mapKeys(changeKeyFn, _obj)
  const toReturn = {}

  Object.keys(obj).forEach(prop => toReturn[ changeKeyFn(prop) ] = obj[ prop ])

  return toReturn
}
