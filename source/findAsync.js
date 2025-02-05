export function findAsync(predicate){
	return async list => {
		let found = undefined
		let counter = -1
		while(counter++ < list.length || found === undefined){
			const result = await predicate(list[counter], counter)
			if (result === true){
				found = list[counter]
			}
		}
		return found
	}
}
