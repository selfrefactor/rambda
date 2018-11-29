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
  ).toStrictEqual([ 2, 3 ])

  expect(init([ 1, 2, 3 ])).toStrictEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toStrictEqual([ 1 ])
  expect(init([ 1 ])).toStrictEqual([])
  expect(init([])).toStrictEqual([])

  expect(init([])).toStrictEqual([])

  expect(init([ 1 ])).toStrictEqual([])

  expect(init('foo')).toStrictEqual('fo')

  expect(init('f')).toStrictEqual('')

  expect(init('')).toStrictEqual('')
})
