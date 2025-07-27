export function createObjectFromKeys(fn) {
	return keys => {
		const result = {}
		keys.forEach((key, index) => {
			result[key] = fn(key, index)
		})

		return result
	}
}