export function fromKeys(keys) {
	return fn => {
		const result = {}
		keys.forEach(key => {
			result[key] = fn(key)
		})

		return result
	}
}