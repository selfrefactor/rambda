import { flip } from './flip'
import { subtract } from './subtract'
import { update } from './update'

test('function with arity of 2', () => {
  const subtractFlipped = flip(subtract)

  expect(subtractFlipped(1)(7)).toEqual(6)
  expect(subtractFlipped(1, 7)).toEqual(6)
  expect(subtractFlipped(
    1, 7, 9
  )).toEqual(6)
})

test('function with arity of 3', () => {
  const updateFlipped = flip(update)

  const result = updateFlipped(88, 0, [ 1, 2, 3 ])
  const curriedResult = updateFlipped(88, 0)([ 1, 2, 3 ])
  const tripleCurriedResult = updateFlipped(88)(0)([ 1, 2, 3 ])

  expect(result).toEqual([ 88, 2, 3 ])
  expect(curriedResult).toEqual([ 88, 2, 3 ])
  expect(tripleCurriedResult).toEqual([ 88, 2, 3 ])
})

test('function with arity of 4', () => {
  const testFunction = (a, b, c, d) =>
    `${a},${b},${c},${d}`

  const flippedFn = flip(testFunction)

  const result1 = flippedFn(2)(1)(3)(4)
  const result2 = flippedFn(2)(1, 3, 4)
  const result3 = flippedFn(2, 1)(3, 4)
  const result4 = flippedFn(2, 1, 3)(4)
  const result5 = flippedFn(2, 1, 3, 4)

  const expected = '1,2,3,4'

  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
  expect(result3).toEqual(expected)
  expect(result4).toEqual(expected)
  expect(result5).toEqual(expected)
})
