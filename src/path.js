import { createPath } from './_internals/createPath.js'

export function path(pathInput) {
	return (obj)  => {
		if (!obj) {
			return undefined
		}
		let willReturn = obj
		let counter = 0
	
		const pathArrValue = createPath(pathInput)
	
		while (counter < pathArrValue.length) {
			if (willReturn === null || willReturn === undefined) {
				return undefined
			}
			if (willReturn[pathArrValue[counter]] === null) {
				return undefined
			}
	
			willReturn = willReturn[pathArrValue[counter]]
			counter++
		}
	
		return willReturn
	}
}
