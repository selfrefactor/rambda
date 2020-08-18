export function takeWhile(predicate, list){
  const toReturn = []
  let stopFlag = false
  let counter = -1

  while (stopFlag === false && counter++ < list.length){
    if (!predicate(list[ counter ])){
      stopFlag = true
    } else {
      toReturn.push(list[ counter ])
    }
  }

  return toReturn
}
