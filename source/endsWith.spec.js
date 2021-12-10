import {endsWith} from './endsWith'
import {endsWith as endsWithRamda} from 'ramda'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [{a:1}, {a:2}, {a:3}]
  expect(endsWith({a:3}, list)).toBeFalse()
  expect(endsWith([{a:3}], list)).toBeTrue()
  expect(endsWith([{a:2}, {a:3}], list)).toBeTrue()
  expect(endsWith(list, list)).toBeTrue()
  expect(endsWith([{a:1}], list)).toBeFalse()
})
