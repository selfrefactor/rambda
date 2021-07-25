import { map } from './map'

const double = x => x * 2

describe(`with array`, () => {
  test('happy', () => {
    expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
  })

  test('when undefined instead of array', () => {
    /**
     * https://github.com/selfrefactor/rambda/issues/77
     */
    expect(map(double)(undefined)).toEqual([])
  })
})

describe(`with object`, () => {
  const obj = {
    a : 1,
    b : 2,
  }

  test('happy', () => {
    expect(map(double, obj)).toEqual({
      a : 2,
      b : 4,
    })
  })
  test('property as second and input object as third argument', () => {
    const obj = {
      a : 1,
      b : 2,
    }
    const iterator = (
      val, prop, inputObject
    ) => {
      expect(prop).toBeString()
      expect(inputObject).toEqual(obj)
  
      return val * 2
    }
  
    expect(map(iterator)(obj)).toEqual({
      a : 2,
      b : 4,
    })
  })
})
