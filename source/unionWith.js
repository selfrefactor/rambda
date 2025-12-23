export function unionWith(predicate, x) {
  return y => {
    const filtered = y.filter(yInstance => {
			return x.every(xInstance => {
				return !predicate(xInstance, yInstance)
			})
    })

    return [...x, ...filtered]
  }
}
