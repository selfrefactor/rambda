import { mapFn } from './map.js';

export function mapChain(...fns) {
  return list => {
		let result = list.slice()
		fns.forEach((fn) => {
			result = mapFn(fn, result)
		})
		return result
	}
}
