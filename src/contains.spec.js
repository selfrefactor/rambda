import { contains } from './contains'

test('when true + curry', () => {
  expect(contains(3)([ 1, 2, 3 ])).toBeTruthy()
})

test('when false', () => {
  expect(contains(4, [ 1, 2, 3 ])).toBeFalsy()
})

test('with empty object', () => {
  expect(contains(4, {})).toBeFalsy()
})

test('complex case', () => {
  expect(contains([ 42 ], [ [ 42 ] ])).toBeTruthy()
})

test('throws on undefined', () => {
  expect(() => contains(4, undefined)).toThrow()
})
