import {startsWith} from './startsWith'
import {startsWith as startsWithRamda} from 'ramda'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTrue()
  expect(startsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [{a:1}, {a:2}, {a:3}]
  expect(startsWith({a:1}, list)).toBeFalse()
  expect(startsWith([{a:1}], list)).toBeTrue()
  expect(startsWith([{a:1}, {a:2}], list)).toBeTrue()
  expect(startsWith(list, list)).toBeTrue()
  expect(startsWith([{a:2}], list)).toBeFalse()
})

