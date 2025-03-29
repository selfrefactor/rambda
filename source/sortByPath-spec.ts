import { pipe, sortByPath } from 'rambda'

const input= [{ a: { b: 2 } }, { a: { b: 1 } }]

describe('R.sortByPath', () => {
  it('with string as path', () => {
    const result = pipe(input, sortByPath('a.b'))
		result[0].a.b // $ExpectType number
  })
  it('with list of strings as path', () => {
    const result = pipe(input, sortByPath(['a', 'b']))
		result[0].a.b // $ExpectType number
  })
	it('with non-existent path', () => {
		// @ts-expect-error
		pipe(input, sortByPath(['a', 'c']))
		// @ts-expect-error
		pipe(input, sortByPath('a.c'))
	})
})
