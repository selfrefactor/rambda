import { piped, uniqWith } from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
		const result = piped(
			[{ a: 1 }, { a: 1 }],
			uniqWith((x, y) => x.a === y.a)
		)
    result // $ExpectType { a: number; }[]
  })
})
