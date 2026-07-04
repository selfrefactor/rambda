import { random } from './random'
import { range } from './range'

test('happy', () => {
  const results = range(0, 100).map(() => random(0, 3))
  const uniqResults = [...new Set(results)].sort()
  expect(uniqResults).toEqual([0, 1, 2, 3])
})

test('type test', () => {
  const result = random(0, 3)
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result >= 0 && result <= 3).toBeTruthy()
})
