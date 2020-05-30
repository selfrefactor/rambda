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

  const result = updateFlipped(
    88, 0, [ 1, 2, 3 ]
  )
  const curriedResult = updateFlipped(88, 0)([ 1, 2, 3 ])
  const tripleCurriedResult = updateFlipped(88)(0)([ 1, 2, 3 ])
  expect(result).toEqual([ 88, 2, 3 ])
  expect(curriedResult).toEqual([ 88, 2, 3 ])
  expect(tripleCurriedResult).toEqual([ 88, 2, 3 ])
})

test('function with arity of 4', () => {
  const testFunction = (
    a, b, c, d
  ) => `${ a - b }==${ c - d }`
  const testFunctionFlipped = flip(testFunction)

  const result = testFunction(
    1, 2, 3, 4
  )
  const flippedResult = testFunctionFlipped(
    2, 1, 3, 4
  )
  expect(result).toEqual(flippedResult)
  expect(result).toEqual('-1==-1')
})

test('function with arity of 5', () => {
  const testFunction = (
    a, b, c, d, e
  ) => `${ a - b }==${ c - d - e }`
  const testFunctionFlipped = flip(testFunction)

  expect(() => testFunctionFlipped(
    1, 2, 3, 4, 5
  )).toThrowWithMessage(Error,
    'R.flip doesn\'t work with arity > 4')
})
