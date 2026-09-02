import { random } from './random'

test('type test', () => {
  const result = random(0, 3)
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result >= 0 && result <= 3).toBeTruthy()
})
