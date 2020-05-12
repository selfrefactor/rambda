import { isType } from './isType'

test('array', () => {
  const foo = [ 1, 2, 3 ]
  expect(isType('Array', foo)).toBeTruthy()
  expect(isType('Array')([])).toBeTruthy()
})
