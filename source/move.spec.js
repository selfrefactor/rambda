import { move } from './move'

const list = [ 1, 2, 3 ]

test('happy', () => {
  const result = move(
    0, 1, list
  )

  expect(result).toEqual([ 2, 1, 3 ])
})
