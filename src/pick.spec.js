import { pick } from './pick'

test('pick with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('pick', () => {
  expect(
    pick([ 'a', 'c' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(
    pick([ 'a', 'd', 'e', 'f' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
})
