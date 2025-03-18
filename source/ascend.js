export function createCompareFunction(a, b, winner, loser) {
  if (a === b) {
    return 0
  }

  return a < b ? winner : loser
}

export function ascend(getFunction) {
	return (a, b) => {
  const aValue = getFunction(a)
  const bValue = getFunction(b)

  return createCompareFunction(aValue, bValue, -1, 1)
}
}
