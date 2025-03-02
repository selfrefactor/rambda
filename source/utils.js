function range(start, end) {
  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (end < start) {
    return []
  }

  const len = end - start
  const willReturn = Array(len)

  for (let i = 0; i < len; i++) {
    willReturn[i] = start + i
  }

  return willReturn
}

export const utils = {
	range,
}