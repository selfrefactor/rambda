const list = [ 'a', 'b', 'c', 'd', 'e', 'f' ]

test('moves an element from an index to another', () => {
  expect(move(
    0, 1, list
  )).toEqual([ 'b', 'a', 'c', 'd', 'e', 'f' ])
  expect(move(
    2, 1, list
  )).toEqual([ 'a', 'c', 'b', 'd', 'e', 'f' ])
  expect(move(
    -1, 0, list
  )).toEqual([ 'f', 'a', 'b', 'c', 'd', 'e' ])
  expect(move(
    0, -1, list
  )).toEqual([ 'b', 'c', 'd', 'e', 'f', 'a' ])
})

test('does nothing when indexes are outside the list outbounds', () => {
  expect(move(
    -20, 2, list
  )).toEqual(list)
  expect(move(
    20, 2, list
  )).toEqual(list)
  expect(move(
    2, 20, list
  )).toEqual(list)
  expect(move(
    2, -20, list
  )).toEqual(list)
  expect(move(
    20, 20, list
  )).toEqual(list)
  expect(move(
    -20, -20, list
  )).toEqual(list)
})
