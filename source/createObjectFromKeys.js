export function createObjectFromKeys(keys) {
	return fn => {
		const result = {}
		keys.forEach((key, index) => {
			result[key] = fn(key, index)
		})

		return result
	}
}