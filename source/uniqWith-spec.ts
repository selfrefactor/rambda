import { pipe, uniqWith } from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
		const result = pipe(
			[{ a: 1 }, { a: 1 }],
			uniqWith((x, y) => x.a === y.a)
		)
    result // $ExpectType { a: number; }[]
  })
})
