import {always, applySpec, assoc, assocPath, both, cond, defaultTo, difference, piped, T, tap} from 'rambda'
// import {defaultTo} from 'ramda'

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
		const result = piped(
			input,
			assoc('c', 3),
			tap(x => {
				x.a // $ExpectType string
				x.c // $ExpectType number
			}),
			assocPath<AfterAssocPath>('d.e', 4),
			// x => x,
			defaultTo(
				{
					a: 'bar',
					b: 2,
					c: 3,
					d: {
						e: 4
					}
				}
			),
			// x => ([x]),
			// difference([{
			// 	// a: 'bar',
			// 	b: 2,
			// 	c: 3,
			// 	d: {
			// 		e: 4
			// 	}
			// }]),
			// both(x => x.b > 1, x => x.b < 11),
			// x => x as unknown as AfterAssocPath,
		)
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
