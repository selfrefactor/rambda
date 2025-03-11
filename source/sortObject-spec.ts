import { piped } from 'rambda'
import { sortObject } from 'rambdax'

const obj = {
  c: 1,
  a: 2,
  b: 3,
}

describe('R.sortObject', () => {
  it('predicate with all arguments', () => {
    const result = piped(
			obj,
			sortObject((propA, propB, valueA, valueB) => {
				propA // $ExpectType string
				propB // $ExpectType string
				valueA // $ExpectType number
				valueB // $ExpectType number
				return propA > propB ? -1 : 1
			})
		)

    result // $ExpectType { [keyOutput: string]: number; }
  })

  it('predicate with only property arguments', () => {
		const result = piped(
			obj,
			sortObject((propA, propB) => {
				propA // $ExpectType string
				propB // $ExpectType string
				return propA > propB ? -1 : 1
			})
		)

		result // $ExpectType { [keyOutput: string]: number; }
  })
})
