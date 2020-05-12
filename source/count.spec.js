import { count } from './count'

test('when 0', () => {
  const target = { a : 1 }
  const list = []

  const result = count(target, list)
  const expectedResult = 0

  expect(result).toEqual(expectedResult)
})

test('when 2', () => {
  const target = { a : 1 }
  const list = [ 2, 1, 2, { a : 1 }, 22, { a : 1 } ]

  const result = count(target)(list)
  const expectedResult = 2

  expect(result).toEqual(expectedResult)
})
