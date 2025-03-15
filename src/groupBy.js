export function groupBy(groupFn) {
	return list => {
  const result = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    const key = groupFn(item)

    if (!result[key]) {
      result[key] = []
    }

    result[key].push(item)
  }

  return result
}
}
