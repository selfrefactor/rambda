import { filter } from './filter'
import { filterIndexed } from './filterIndexed'

const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const list = [ 1, 2, 3 ]
  filterIndexed(iterator, list)
  filterIndexed(iterator)(list)
})

test('with object', () => {
  const iterator = x => x + 1
  const obj = { a : 1 }
  expect(filterIndexed(iterator, obj)).toEqual(filter(iterator, obj))
})

test('with bad input', () => {
  expect(filterIndexed(iterator, undefined)).toEqual([])
})
