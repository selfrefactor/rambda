import { map, piped, tryCatch } from 'rambda'

describe('R.tryCatch', () => {
  it('happy', () => {
    const result = piped(
			['{a:1', 
				'{"b": 2}'
			],
			map(tryCatch(x => {
				return JSON.parse(x) as string
			}, null)),
		)
		
    result // $ExpectType (string | null)[]
  })
})
