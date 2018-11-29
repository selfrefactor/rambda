import { compose } from './compose'
import { last } from './last'
import { map } from './map'

test('last', () => {
  expect(
    compose(
      last,
      map(last)
    )([ 'foo', 'bar', 'baz' ])
  ).toEqual('z')

  expect(last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
  expect(last([])).toEqual(undefined)
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})
