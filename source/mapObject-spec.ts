import { mapObject, piped } from 'rambda'

describe('R.mapObject', () => {
  it('iterable with one arguments', () => {
    const result = piped(
			{ a: 1 },
			mapObject((a) => {
				a // $ExpectType number
				return `${a}`
			}),
		)
		
    result // $ExpectType {a: string;}
  })
  it('iterable with two three arguments', () => {
    const result = piped(
			{ a: 1, b: 'foo' },
			mapObject((a, b) => {
				a // $ExpectType string | number
				b // $ExpectType 'a' | 'b'
				return `${a}`
			}),
		)
		
    result // $ExpectType {a: string; b: string;}
  })
	it('iterable with three arguments', () => {
		const result = piped(
			{ a: 1, b: 'foo' },
			mapObject((a, b, c) => {
				a // $ExpectType string | number
				b // $ExpectType 'a' | 'b'
				c // $ExpectType {a: number; b: string;}
				return `${a}`
			}),
		)
		
		result // $ExpectType {a: string; b: string;}
	})
})
