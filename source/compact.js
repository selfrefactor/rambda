import { isArray } from './_internals/isArray.js'
import { reject } from './reject.js'
import { rejectObject } from './rejectObject.js'

const isNullOrUndefined = x => x === null || x === undefined

export function compact(input){
	if(isArray(input)){
		return reject(isNullOrUndefined)(input)
	}
	return rejectObject(isNullOrUndefined)(input)
}