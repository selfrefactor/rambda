import { flattenObject, head, mapObjectWithDecorate, pipe, tap, when } from 'rambda'

function notNull<T>(a: T | null | undefined): a is T {
  return a != null
}

describe('R.when', () => {
  it('happy', () => {
		let foo = pipe(
			[
				{a: 1, b: 2},
				{a: 3, b: 4},
			],
			mapObjectWithDecorate(
				'c',
				(x) => x.a + x.b,
			)
				
		)
		foo // $ExpectType { a: number; b: number; c: number; }[]
		let flattenResult =
		pipe(
			{ a: { b: 1,
				asd: 1, c: 2,
				d: { e: 3, f: 4,
	
					ads: [		12, 13, 14],
					asd: { a: 1, b: 2, c: 3 },
				 },
				},
			
			},
			flattenObject
		)
		flattenResult // $ExpectType { a: { b: number } }
    const result = pipe(
      [1, null, 2, 3],
      head,
      when(notNull, x => x + 1),
    )
    result // $ExpectType number | null
  })
  it('happy', () => {
    const result = pipe(
      1,
      when(
        x => x > 2,
        x => x,
      ),
      tap(x => {
        x // $ExpectType number
      }),
      when(
        x => x > 2,
        x => String(x),
      ),
    )

    result // $ExpectType string | number
  })
})
