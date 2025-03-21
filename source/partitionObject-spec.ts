import { compact, partitionObject, pipe } from 'rambda'

describe('R.partition', () => {
  it('happy', () => {
		let result = pipe(
			{ a: 1, b: 2 },
			partitionObject((x, prop) => x> 1 || prop === 'c'),
		)
    result // $ExpectType [Record<string, number>, Record<string, number>]
  })
  it('with complex object', () => {
    interface Foo {
      a: number
    }
    interface Bar {
      b: number
    }
    const obj: Record<string, (Foo | Bar)> = {
			a: { a: 1 },
			b: { b: 2 },
			c: { a: 3 },
			d: { b: 4 },
		}
    const filterFoo = (x: Foo | Bar): x is Foo => 'a' in x
    const result = pipe(obj, partitionObject(filterFoo))
    result // $ExpectType [Record<string, Foo>, Record<string, Bar>]

		let foo = pipe(
			{
				a: [ undefined, '', 'a', 'b', 'c'],
				b: [1,2, null, 0, undefined, 3],
				c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
			},
			x => ({
				a: compact(x.a),
				b: compact(x.b),
				c: compact(x.c)
			})
		)
  })
})
