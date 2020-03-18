import { isFunction } from './isFunction'

test('when function', () => {
  const fn = () => {}

  expect(isFunction(fn)).toEqual(true)
})

test('when promise', () => {
  const fn = Promise.resolve(2)

  expect(isFunction(fn)).toEqual(true)
})

test('when async', () => {
  const fn = async x => x

  expect(isFunction(fn)).toEqual(true)
})

test('when false', () => {
  expect(isFunction(null)).toEqual(false)
})
