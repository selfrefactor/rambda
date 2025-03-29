export function mapFn(
	fn, list
){
	let index = 0
	const willReturn = Array(list.length)
	while (index < list.length) {
		willReturn[index] = fn(list[index], index)
		index++
	}
	return willReturn
}

export function map(fn) {
  return list => mapFn(fn, list)
}
