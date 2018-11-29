import { compose } from './compose'
import { last } from './last'
import { map } from './map'

test('last', () => {
  expect(
    compose(
      last,
      map(last)
    )([ 'foo', 'bar', 'baz' ])
  ).toStrictEqual('z')

  expect(last([ 'foo', 'bar', 'baz' ])).toStrictEqual('baz')
  expect(last([])).toStrictEqual(undefined)
  expect(last('abc')).toStrictEqual('c')
  expect(last('')).toStrictEqual('')
})
