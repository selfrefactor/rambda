import { omit } from './omit.js'

test('with string as condition', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const result = omit('a,c')(obj)
  const expectedResult = { b: 2 }

  expect(result).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(
    omit(['a', 'c', 'd'])({
      a: 'foo',
      b: 'bar',
      c: 'baz',
    }),
  ).toEqual({ b: 'bar' })
})
