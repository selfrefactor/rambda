import {applySpec, assoc, assocPath, both, piped, tap} from 'rambda'


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
			// tap(x => {
			// 	x.a // $ExpectType string
			// 	x.c // $ExpectType number
			// }),
			assocPath<AfterAssocPath>('d.e', 4),
			// tap(x => {
			// 	x.a // $ExpectType string
			// 	x.c // $ExpectType number
			// 	x.d
			// })
			both(x => x.b > 1, x => x.b < 11)
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
