import { filter } from './filter.js'
import { excludes } from './excludes.js'

export function symmetricDifference(listA) {
	return listB => [
		...filter(excludes(listB))(listA),
		...filter(excludes(listA))(listB),
	]
}
