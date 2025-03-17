import { pipe, sortBy } from 'rambda'

describe('R.sortBy', () => {
  it('passing type to sort function and list', () => {
    const result = pipe(
			[{ a: 2 }, { a: 1 }, { a: 0 }],
			sortBy(x => {
				return x.a
			})
		)
		

    result[0].a // $ExpectType number
  })
})
