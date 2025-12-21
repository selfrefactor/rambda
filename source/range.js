export function range(a, b) {
  const start = b === undefined ? 0 : a
  const end = b === undefined ? a : b
  if (end<=  start) {
		return []
  }
  const len = end - start
	return Array.from({ length: len + 1 }, (_, i) => start + i)
}
