import { pipe, indexBy } from 'rambda'

describe('R.indexBy', () => {
	it('using `as const`', () => {
		const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}] as const
		const result = pipe(
      list,
			indexBy('id')
    )

    result.abc // $ExpectType {id: string, title: string}
    result.xyz // $ExpectType {id: string, title: string}
  })
	it('general case', () => {
		const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}]
		const result = pipe(
			list,
			indexBy('id')
		)
		result.abc // $ExpectType {id: string, title: string}
		result.foo // $ExpectType {id: string, title: string}
	})
})
