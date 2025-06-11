export function mapPropObject(fn, prop) {
  return obj => {
		if (!Array.isArray(obj[prop])) return obj
			
			return {
				...obj,
				[prop]: obj[prop].map(fn)
			}
		}
 	 }
