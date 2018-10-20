import { add } from "./add";

test('add without curring', () => {
  expect(add(2, 3)).toEqual(5)
})

test('add with curring', () => {
  expect(add(7)(10)).toEqual(17)
})

