import { sortByDescending } from './sortByDescending.js'
import { path } from './path.js'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('happy', () => {
  expect(sortByDescending(path('a.b'))(list)).toEqual(sorted)
})

