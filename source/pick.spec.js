import { pick } from './pick.js'

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

test('props to pick is a string', () => {
  const result = pick('a,c')(obj)
  const expectedResult = {
    a: 1,
    c: 3,
  }

  expect(result).toEqual(expectedResult)
})

test('when prop is missing', () => {
  const result = pick('a,d,f')(obj)
  expect(result).toEqual({ a: 1 })
})

test('props to pick is an array', () => {
  expect(
    pick(['a', 'c'])({
      a: 'foo',
      b: 'bar',
    }),
  ).toEqual({
    a: 'foo',
  })
})
