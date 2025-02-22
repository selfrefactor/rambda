import { anyType } from './anyType.js'

test('when true', () => {
  const result = anyType('Array')(1, undefined, null, [])

  expect(result).toBeTruthy()
})

test('when false', () => {
  const result = anyType('String')(1, undefined, null, [])

  expect(result).toBeFalsy()
})
