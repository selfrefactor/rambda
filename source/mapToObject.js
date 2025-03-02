import { map } from './map.js'
import { mergeAll } from './mergeAll.js'

export function mapToObject(fn) {
	return list => mergeAll(map(fn, list))
}
