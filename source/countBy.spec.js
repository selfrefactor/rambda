import { countBy } from './countBy.js'

const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

test('happy', () => {
  const result = countBy(x => x.toLowerCase(), list)
  expect(result).toEqual({
    a : 2,
    b : 2,
    c : 2,
  })
})

test('alike python toolz.itertoolz.frequencies', () => {
  const result = countBy(x => x, list)
  expect(result).toEqual({
    a : 1,
    A : 1,
    b : 1,
    B : 1,
    c : 1,
    C : 1,
  })
})
