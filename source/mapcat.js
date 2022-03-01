export function mapcat(tranformFn, listOfLists){
  if (arguments.length === 1){
    return _listOfLists => mapcat(tranformFn, _listOfLists)
  }

  let willReturn = []
  const intermediateResult = listOfLists.map(list =>
    list.map(x => tranformFn(x)))

  intermediateResult.forEach(transformedList => {
    willReturn = [ ...willReturn, ...transformedList ]
  })

  return willReturn
}
