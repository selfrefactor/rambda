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

test('list of arrays uses R.equals', () => {
  const listOfLists = [
    [1],
    [2,3],
    [2,3,4],
    [2,3],
    [1],
    []
  ]
  expect(indexOf([], listOfLists)).toBe(5)
  expect(indexOf([1], listOfLists)).toBe(0)
  expect(indexOf([2,3,4], listOfLists)).toBe(2)
  expect(indexOf([2,3,5], listOfLists)).toBe(-1)
})

