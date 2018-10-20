import { modulo } from './modulo'

test('', () => {
  expect(modulo(17, 3)).toEqual(2)
  expect(modulo(15)(6)).toEqual(3)
})
