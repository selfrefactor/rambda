import { times } from './times'
import { identity } from './identity'

test('', () => {
  const result = times(identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})
