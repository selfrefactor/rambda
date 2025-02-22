import { map } from './map.js'
import { mapIndexed } from './mapIndexed.js'

test('with object', () => {
  const iterator = x => x + 1
  const obj = { a: 1 }
  expect(mapIndexed(iterator, obj)).toEqual(map(iterator, obj))
})

test('with bad input', () => {
  expect(mapIndexed(null, undefined)).toEqual([])
})
