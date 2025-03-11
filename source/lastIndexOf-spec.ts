import { lastIndexOf, pipe } from 'rambda'

describe('R.lastIndexOf', () => {
    const result = pipe(
			[{a: 1}, {a: 2}, {a: 3}],
			lastIndexOf({a: 2})
		)
    result // $ExpectType number
})
