import { multiply } from './multiply'

test('', () => {
  expect(multiply(2, 4)).toEqual(8)
  expect(multiply(2)(4)).toEqual(8)
})
