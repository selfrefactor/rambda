import { pipe, tap, when } from 'rambda'

describe('R.when', () => {
  it('happy', () => {
    const result = pipe(
			1,
			when(x => x > 2, x => x),
			tap(x => {
				x // $ExpectType number
			}),
			when(x => x > 2, x => String(x))
		)
		
    result // $ExpectType string | number
  })
})
