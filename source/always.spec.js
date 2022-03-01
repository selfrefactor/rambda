import { always } from './always.js'
import { F } from './F.js'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

test('f', () => {
  const fn = always(F())

  expect(fn()).toBeFalse()
  expect(fn()).toBeFalse()
})
