import { switcher } from './switcher'

test('happy', () => {
  const list = [1, 2, 3]
  const result = switcher(list.length)
    .is(x => x < 2, 4)
    .is(x => x < 4, 6)
    .default(7)
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(6)
})

test('require explicit types when dealing with different types', () => {
  const list = [1, 2, 3]
  const result = switcher<number, string>(list.length)
    .is(x => x < 2, '4')
    .is(x => x===3, '6')
    .default('7')
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('6')
})
