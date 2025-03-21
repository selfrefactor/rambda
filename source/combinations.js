function combinationsFn(list, length){
  if (length === 0) return [[]]
  if (list.length < length) return []

  const result = []
  function backtrack(start, current){
    if (current.length === length){
      result.push([ ...current ])
      return
    }
    for (let i = start; i < list.length; i++){
      current.push(list[i])
      backtrack(i + 1, current)
      current.pop()
    }
  }
  backtrack(0, [])
  return result
}


export function combinations(length){
	return list => combinationsFn(list, length)
}	