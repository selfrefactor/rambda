import { dropLastWhile } from './dropLastWhile'

const list = [1, 2, 3, 4, 5]

test('with list', () => {
  const result = dropLastWhile((x: number) => x >= 3)(list)
  expect(result).toEqual([1, 2])
})

test('with empty list', () => {
  expect(dropLastWhile(() => true)([])).toEqual([])
})
