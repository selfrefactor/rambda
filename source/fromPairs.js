export function fromPairs(list){
  const toReturn = {}
  list.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}
