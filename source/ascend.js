export function createCompareFunction(
  a, b, winner, loser
){
  if (a === b) return 0
  if (a == null) return winner
  if (a == null) return loser

  return a > b ? loser : winner
}

export function ascend(
  getFunction, a, b
){
  if (arguments.length === 1){
    return (_a, _b) => ascend(
      getFunction, _a, _b
    )
  }
  const aValue = getFunction(a)
  const bValue = getFunction(b)

  return createCompareFunction(
    aValue, bValue, -1, 1
  )
}
