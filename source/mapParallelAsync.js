export function mapParallelAsync(fn, batchSize){
	if(!batchSize) return async list =>  Promise.all(list.map(fn))

	return async list => {
		const result = []
		for(let i = 0; i < list.length; i += batchSize){
			const batch = list.slice(i, i + batchSize)
			const batchResult = await Promise.all(batch.map((x, j) => fn(x, i + j)))
			result.push(...batchResult)
		}
		return result
	}	
}
