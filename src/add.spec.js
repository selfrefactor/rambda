import { add } from './add'

test('add without curring', () => {
  expect(add(2, 3)).toStrictEqual(5)
})

test('add with curring', () => {
  expect(add(7)(10)).toStrictEqual(17)
})
