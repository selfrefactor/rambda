import { findModify } from './findModify'

const fn = x => x + 1 > 10 ?
  {
    a : 8,
    x,
  } :
  false

test('no element pass the condition function', () => {
  const list = [ 1, 2, 3 ]

  expect(findModify(fn)(list)).toEqual(false)
})

test('we have one such fool', () => {
  const list = [ 1, 2, 32, 54 ]

  expect(findModify(fn, list)).toEqual({
    a : 8,
    x : 32,
  })
})
