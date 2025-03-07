import { dropLastWhile } from './dropLastWhile.js'

const list = [1, 2, 3, 4, 5]

test('with list', () => {
  const result = dropLastWhile(x => x >= 3, list)
  expect(result).toEqual([1, 2])
})

test('with empty list', () => {
  expect(dropLastWhile(() => true, [])).toEqual([])
  expect(dropLastWhile(() => false, [])).toEqual([])
})
