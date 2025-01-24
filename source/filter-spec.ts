import {filter} from 'rambda'

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
  it('curried', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    })(list)
    result // $ExpectType number[]
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
	it('curried', () => {
		const result = filter<number>((val) => {
			val // $ExpectType number

			return val > 1
		})(obj)
		result // $ExpectType Dictionary<number>
	})
})
