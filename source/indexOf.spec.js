import { indexOf } from './indexOf'

test('without list of objects - no R.equals', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [
    {a:1},
    {b:2},
    {c:3}
  ]
  expect(indexOf({c:4}, listOfObjects)).toBe(-1)
  expect(indexOf({c:3}, listOfObjects)).toBe(2)
})
