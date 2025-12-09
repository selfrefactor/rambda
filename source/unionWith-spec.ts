import { pipe, unionWith } from 'rambda'

describe('R.unionWith', () => {
  it('happy', () => {
		const list = [{a: 1, b: 1}, {a: 2, b: 1}]
    const result = pipe(
			list,
			unionWith((x, y) => {
				x.a // $ExpectType number
				y.b // $ExpectType number
				return x.a === y.a
			}, [{a: 2, b: 2}, {a: 3, b: 2}]),
		)

    result[0].a // $ExpectType number
    result[0].b // $ExpectType number
  })
})
