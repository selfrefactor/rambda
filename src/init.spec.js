import { compose } from './compose'
import { tail } from './tail'
import { init } from './init'
import { flatten } from './flatten'

test('init', () => {
  expect(
    compose(
      tail,
      init,
      flatten
    )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
  ).toEqual([ 2, 3 ])

  expect(init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toEqual([ 1 ])
  expect(init([ 1 ])).toEqual([])
  expect(init([])).toEqual([])

  expect(init([])).toEqual([])

  expect(init([ 1 ])).toEqual([])

  expect(init('foo')).toEqual('fo')

  expect(init('f')).toEqual('')

  expect(init('')).toEqual('')
})
