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

  expect(result).toStrictEqual(expectedResult)
  expect(resultCurry).toStrictEqual(expectedResult)
})

test('pick', () => {
  expect(
    pick([ 'a', 'c' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toStrictEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(
    pick([ 'a', 'd', 'e', 'f' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toStrictEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toStrictEqual(undefined)
})
