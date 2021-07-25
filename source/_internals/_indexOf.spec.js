import { _indexOf } from './_indexOf'

test('with number', () => {
  expect(_indexOf(4, [1, 2, 3])).toBe(-1)
  expect(_indexOf(3, [1, 2, 3])).toBe(2)
})

test('with list of objects', () => {
  const listOfObjects = [
    {a:1},
    {b:2},
    {c:3}
  ]
  expect(_indexOf({c:4}, listOfObjects)).toBe(-1)
  expect(_indexOf({c:3}, listOfObjects)).toBe(2)
})

