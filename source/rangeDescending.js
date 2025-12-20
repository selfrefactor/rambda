export function rangeDescending(start, end) {
	const len = start - (end ?? 0)
	if(!(len >0)) return []
	const willReturn = Array(len)

	for (let i = 0; i <= len; i++) {
		willReturn[i] = start - i
	}

	return willReturn
}
