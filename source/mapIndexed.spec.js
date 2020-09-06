import { mapIndexed } from './mapIndexed'
import { map } from './map'

const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const list = [1,2,3]
  mapIndexed(iterator, list)
  mapIndexed(iterator)(list)
})

test('with object', () => {
  const iterator = x => x + 1
  const obj = {a:1}
  expect(mapIndexed(iterator, obj)).toEqual(map(iterator, obj))  
})

test('with bad input', () => {
  expect(mapIndexed(iterator, undefined)).toEqual([])  
})