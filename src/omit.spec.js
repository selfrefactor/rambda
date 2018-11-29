import { omit } from './omit'

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = { b : 2 }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with null', () => {
  expect(omit('a,b', null)).toEqual(undefined)
})

test('doesn\'t work with number as property', () => {
  expect(
    omit([ 42 ], {
      a  : 1,
      42 : 2,
    })
  ).toEqual({
    42 : 2,
    a  : 1,
  })
})

test('', () => {
  expect(
    omit([ 'a', 'c' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({ b : 'bar' })
})
