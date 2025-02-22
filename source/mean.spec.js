import { mean } from './mean.js'

test('happy', () => {
  expect(mean([2, 7])).toBe(4.5)
})

test('with NaN', () => {
  expect(mean([])).toBeNaN()
})
