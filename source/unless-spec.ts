import { pipe, unless } from 'rambda'

let inc = (x: number) => x + 1

describe('R.unless', () => {
  it('happy', () => {
		let result = pipe(
			1,
			unless(x => x > 5, inc)
		)
    result // $ExpectType number
  })
  it('with two different types', () => {
		let result = pipe(
			1,
			unless(
				x => {
					x // $ExpectType number
					return x > 5
				},
				x => {
					x // $ExpectType number
					return `${x}-foo`
				},
			)
		)
    result // $ExpectType string | number
  })
})
