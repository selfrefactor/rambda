import { modulo } from './modulo'

test('', () => {
  expect(modulo(17, 3)).toStrictEqual(2)
  expect(modulo(15)(6)).toStrictEqual(3)
})
