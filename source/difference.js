import { filter } from './filter.js'
import { excludes } from './excludes.js'

export function difference(listA) {
	return listB => ([
		...filter(value => excludes(listB)(value))(listA),
		...filter(value => excludes(listA)(value))(listB),
	])
}
