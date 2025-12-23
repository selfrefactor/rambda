import { excludes } from './excludes.js'

export function union(listA) {
  return listB => [
		...listA,
		...listB.filter(excludes(listA)),
	]
}
