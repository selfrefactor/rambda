export function mapKeys(fn) {
  return obj => {
		const willReturn = {}

		Object.keys(obj).forEach(key => {
			willReturn[fn(key, obj[key])] = obj[key]
		})

		return willReturn
	}
}
