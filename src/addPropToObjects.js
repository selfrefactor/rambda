import { mapFn } from './map.js'

export function addPropToObjects (
	property, 
	fn
){
	return listOfObjects => mapFn(
		(obj) => ({
			...(obj),
			[property]: fn(obj)
		}), 
		listOfObjects
	)
}