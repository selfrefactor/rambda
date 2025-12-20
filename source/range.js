export function range(start, end) {
    if (end === start) {
      return []
    }
		const len = start - (end ?? 0)
    const willReturn = Array(len)

    for (let i = 0; i <= len; i++) {
      willReturn[i] = start + i
    }

    return willReturn
}


