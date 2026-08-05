import { sortByPathDescending } from './sortByPathDescending'
import {pipe} from './pipe'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('happy', () => {
  const result = pipe(list, sortByPathDescending('a.b'))
  expectTypeOf(result).toEqualTypeOf<typeof list>()
  expect(result).toEqual(sorted)
})

test('with string as path', () => {
  expect(pipe(list, sortByPathDescending('a.b'))).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(pipe(list, sortByPathDescending(['a', 'b']))).toEqual(sorted)
})
