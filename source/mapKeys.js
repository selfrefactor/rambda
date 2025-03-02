export function mapKeys(changeKeyFn) {
	return obj => {
  const toReturn = {}

  Object.keys(obj).forEach(prop => (toReturn[changeKeyFn(prop)] = obj[prop]))

  return toReturn
}
}
