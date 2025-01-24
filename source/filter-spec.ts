import {filter, piped, pipe} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('within piped', () => {
		let result = piped(
			list,
			x => x,
			filter(x => {
				x // $ExpectType number
				return x > 1
			})
		)
		result // $ExpectType number[]
  })
  it('within pipe requires explicit type', () => {
		pipe(
			x => x,
			filter<number>((x) => {
				x // $ExpectType number
				return x > 1
			}),
			filter((x: number) => {
				x // $ExpectType number
				return x > 1
			})
		)(list)
	})

})

describe('R.filter with objects', () => {
  it('happy', () => {
    const result = filter((val) => {
      val // $ExpectType number

      return val > 1
    }, obj)
    result // $ExpectType Dictionary<number>
  })
	// it('curried', () => {
	// 	const result = filter((val) => {
	// 		val // $ExpectType number

	// 		return val > 1
	// 	})(obj)
	// 	result // $ExpectType Dictionary<number>
	// })
})
