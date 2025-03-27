function rangeDescending(start, end) {
	const len = start - end
	const willReturn = Array(len)

	for (let i = 0; i < len; i++) {
		willReturn[i] = start - i
	}

	return willReturn
}

export function range(start) {
  return end => {
    if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
      throw new TypeError('Both arguments to range must be numbers')
    }

    if (end === start) {
      return []
    }
		if (end < start) return rangeDescending(start,end)

    const len = end - start
    const willReturn = Array(len)

    for (let i = 0; i < len; i++) {
      willReturn[i] = start + i
    }

    return willReturn
  }
}


