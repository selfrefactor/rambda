import {always, applySpec, assoc, assocPath, both, cond, defaultTo, difference, EqualTypes, piped, T, tap} from 'rambda'
// import {defaultTo} from 'ramda'
function assertType<T>(input: Partial<T>): T {
  return input as T
}
type IsNotNever<T> = [T] extends [never] ? false : true;
export type Expect<T extends true> = T



describe('real use cases', () => {
	it('assoc', () => {
		let input = {
			a: 'foo',
			b: 2
		}
		interface AfterAssoc{
			a: string,
			b: number,
			c: number
		}
		interface AfterAssocPath extends AfterAssoc{
			d: {
				e: number
			}
		}
		let foo: AfterAssocPath = {
			a: 'foo',
			b: 2,
			c: 3,
			d: {
				e: 4
			}
		}
		let bar: AfterAssocPath = {
			a: 'bar',
			b: 2,
			c: 3,
			d: {
				e: 4
			}
		}
		const result = piped(
			input,
			assoc('c', 3),
			tap(x => {
				x.a // $ExpectType string
				x.c // $ExpectType number
			}),
			assocPath<AfterAssocPath>('d.e', 4),
			defaultTo(
				foo
			),
			// both(x => x.b > 1, x => x.b < 11),
			x => ([x]),
			difference([bar]),
			// x => x as unknown as AfterAssocPath,
		)
		type Foo = Expect<IsNotNever<typeof result>>
	})
})


describe('R.piped', () => {
  it('happy', () => {
    const result = piped(
      [1, 2],
      x => {
        return x.length + 1
      },
      x => {
        return x + 10
      }
    )

    result // $ExpectType number
  })
  it('issue #63', () => {
    const result = piped(1, x => x)

    result // $ExpectType number
  })
})
