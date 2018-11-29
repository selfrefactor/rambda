import { append } from './append'
import { compose } from './compose'
import { flatten } from './flatten'
import { map } from './map'

test('with strings', () => {
  expect(append('o', 'fo')).toStrictEqual('foo')
})

test('with arrays', () => {
  expect(append('tests', [ 'write', 'more' ])).toStrictEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests', [])).toStrictEqual([ 'tests' ])
})

test('', () => {
  const result = compose(
    flatten,
    map(append(0))
  )([ [ 1 ], [ 2 ], [ 3 ] ])
  expect(result).toStrictEqual([ 1, 0, 2, 0, 3, 0 ])
})

test('should not modify arguments', () => {
  const a = [ 1, 2, 3 ]
  const b = append(4, a)

  expect(a).toStrictEqual([ 1, 2, 3 ])
  expect(b).toStrictEqual([ 1, 2, 3, 4 ])
})
