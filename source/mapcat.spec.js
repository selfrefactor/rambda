// import { mapcat } from './mapcat.js'
import { flatMap } from './flatMap.js'

test('happy', () => {
  const result = flatMap(x => x.toUpperCase())([
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
  ])
  expect(result).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F'])
})
