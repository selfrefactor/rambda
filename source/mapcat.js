export function mapcat(tranformFn){
	return listOfLists => {
		let willReturn = []
		const intermediateResult = listOfLists.map(list =>
			list.map(x => tranformFn(x)))

		intermediateResult.forEach(transformedList => {
			willReturn = [ ...willReturn, ...transformedList ]
		})

		return willReturn
	}
}
