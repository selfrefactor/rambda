import { countBy } from './countBy.js'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

test('happy', () => {
  const result = countBy(x => x.toLowerCase())(list)
  expect(result).toEqual({
    a: 2,
    b: 2,
    c: 2,
  })
})
