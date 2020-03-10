import { compose, curry, map } from '../rambda'
import { reduce } from './reduce'

test('happy', () => {
  const result = reduce((
    acc, val, i
  ) => {
    expect(typeof i).toBe('number')

    return acc + val
  })(1)([ 1, 2, 3 ])

  expect(result).toEqual(7)
})

test('with compose', () => {
  const convertToString = (acc, value) => acc + value

  expect(compose(reduce(convertToString, ''),
    map(x => x + 1))([ 1, 2, 3 ])).toEqual('234')
})

test('with curry', () => {
  const add = curry((n, n2) => n + n2)

  expect(reduce(
    add, 0, [ 1, 2, 3 ]
  )).toEqual(6)
})
