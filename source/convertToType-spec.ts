import { convertToType, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.convertToType', () => {
  const result = pipe(list, 
		convertToType<string[]>,
		x => {
			x // $ExpectType string[]
			return x 
		}
	)
  result // $ExpectType string[]
})
