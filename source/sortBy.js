import { cloneList } from './_internals/cloneList.js'

export function sortByFn (
	sortFn,
	list,
	descending
){
	const clone = cloneList(list)

	return clone.sort((a, b) => {
		const aSortResult = sortFn(a)
		const bSortResult = sortFn(b)

		if (aSortResult === bSortResult) {
			return 0
		}
		if(
			descending
		) return aSortResult > bSortResult ? -1 : 1

		return aSortResult < bSortResult ? -1 : 1
	})
}

export function sortBy(sortFn) {
  return list => sortByFn(sortFn, list, false)
}
