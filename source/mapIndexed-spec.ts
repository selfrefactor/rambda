import {mapIndexed, piped} from 'rambda'

const fn = (x: number, i: number) => {
  return x + 2
}
const list = [1, 2, 3]

describe('R.mapIndexed', () => {
  it('happy', () => {
    const result = mapIndexed(fn, list)
    result // $ExpectType number[]
  })
  it('inside piped', () => {
		const result = piped(
			list,
			mapIndexed(fn),
		)
		result // $ExpectType number[]
  })
})
