export function rangeDescending(start, b) {
	const end = b === undefined ? 0 : b
	if (start <= end) {
		return []
	}
  const len = start - end
 	return Array.from({ length: len + 1 }, (_, i) => start - i)
}
