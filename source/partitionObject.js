export function partitionObject(predicate) {
	return obj => {
  const yes = {}
  const no = {}
  Object.entries(obj).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value
    } else {
      no[prop] = value
    }
  })

  return [yes, no]
}
}
