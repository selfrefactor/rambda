import {chain} from './chain'

const duplicate = n => [n, n]

test('happy', () => {
  const fn = x => [x * 2]
  const list = [1, 2, 3]

  const result = chain(fn, list)

  expect(result).toEqual([2, 4, 6])
})

test('maps then flattens one level', () => {
  expect(chain(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('maps then flattens one level - curry', () => {
  expect(chain(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(chain(nest, [1, 2, 3])).toEqual([[1], [2], [3]])
})
