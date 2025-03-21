import { partitionObject, pipe } from 'rambda'

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
  })
})
