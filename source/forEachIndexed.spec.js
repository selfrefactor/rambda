import { forEachIndexed } from './forEachIndexed'

const list = [ 1, 2, 3 ]
const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const result = forEachIndexed(iterator, list)

  expect(result).toEqual(list)
})

test('curried', () => {
  const result = forEachIndexed(iterator)(list)

  expect(result).toEqual(list)
})
