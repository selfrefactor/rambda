import { mapToObject } from './mapToObject'

test('happy', () => {
  const list = 'auto?bar=false?foo?baz=1.5?s=more?k=2'.split('?')
  const fn = x => {
    const [ key, value ] = x.split('=')
    if (value === undefined || value === 'true'){
      return { [ key ] : true }
    }
    if (value === 'false'){
      return { [ key ] : false }
    }

    if (Number.isNaN(Number(value))){
      return { [ key ] : value }
    }

    return { [ key ] : Number(value) }
  }

  const expectedResult = {
    auto : true,
    foo  : true,
    bar  : false,
    baz  : 1.5,
    s    : 'more',
    k    : 2,
  }
  const result = mapToObject(fn, list)
  const resultx = mapToObject(fn)(list)

  expect(result).toEqual(expectedResult)
  expect(resultx).toEqual(expectedResult)
})

test('bad path', () => {
  expect(() => mapToObject(1, null)).toThrow()
})
