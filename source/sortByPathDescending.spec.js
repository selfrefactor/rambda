import { sortByPathDescending } from './sortByPathDescending.js'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('with string as path', () => {
  expect(sortByPathDescending('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPathDescending(['a', 'b'])(list)).toEqual(sorted)
})
