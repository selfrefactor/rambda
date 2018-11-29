import { compose } from './compose'
import { reduce } from './reduce'
import { map } from './map'
import { curry } from './curry'
test('with compose', () => {
  const convertToString = (acc, value) => acc + value

  expect(
    compose(
      reduce(convertToString, ''),
      map(x => x + 1)
    )([ 1, 2, 3 ])
  ).toEqual('234')
})

test('', () => {
  const result = reduce((acc, val) => acc + val)(1)([ 1, 2, 3 ])

  expect(result).toEqual(7)
})

test('with curry', () => {
  const add = curry((n, n2) => n + n2)

  expect(reduce(add, 0, [ 1, 2, 3 ])).toEqual(6)
})
