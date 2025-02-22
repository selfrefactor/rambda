import { lensEq } from './lensEq.js'
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'

test('with list', () => {
  const list = [1, 2, 3]
  const lens = lensIndex(0)
  expect(lensEq(lens, 1, list)).toBeTruthy()
  expect(lensEq(lens, 2)(list)).toBeFalsy()
})

test('with R.lensPath', () => {
  const input = { a: { b: { c: 1 } } }
  const target = { c: 1 }
  const lens = lensPath('a.b')

  expect(lensEq(lens)(target)(input)).toBeTruthy()
  expect(lensEq(lens, target, { c: 2 })).toBeFalsy()
})
