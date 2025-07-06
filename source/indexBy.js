export function indexBy(property){
	return list => {
		const toReturn = {}
		for (let i = 0; i < list.length; i++){
			const item = list[ i ]
			const key = item[property]
			if(key !== undefined){
				toReturn[ key ] = item
			}
		}
	
		return toReturn
	}
}
