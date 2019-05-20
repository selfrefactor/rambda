import { fromPairs } from './fromPairs'

const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

test('', () => {
  expect(fromPairs(list)).toEqual(expected)
})
