export function partition(predicate) {
  return list => {
		const yes = []
		const no = []
		let counter = -1
	
		while (counter++ < list.length - 1) {
			if (predicate(list[counter], counter)) {
				yes.push(list[counter])
			} else {
				no.push(list[counter])
			}
		}
	
		return [yes, no]
  }
}
