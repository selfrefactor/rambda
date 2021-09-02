import {split} from './split'

const str = 'foo|bar|baz'
const splitChar = '|'
const expected = ['foo', 'bar', 'baz']

test('happy', () => {
  expect(split(splitChar, str)).toEqual(expected)
})

test('curried', () => {
  expect(split(splitChar)(str)).toEqual(expected)
})
