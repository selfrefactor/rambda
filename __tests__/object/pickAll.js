const R = require('../../rambda')

test('R.pickAll with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = R.pickAll('a,c', obj)
  const resultCurry = R.pickAll('a,c')(obj)
  const expectedResult = {
    a : 1,
    b : undefined, 
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('', () => {
  expect(R.pick([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    b : undefined, 
    c : 'baz',
  })

  expect(R.pick([ 'a', 'd', 'e', 'f' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ a : 'foo' })

  expect(R.pick('a,d,e,f')(null)).toEqual(undefined)
})
