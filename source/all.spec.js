import { all } from './all.js'

const list = [0, 1, 2, 3, 4]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(list)).toBeTruthy()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn)(list)).toBeFalsy()
})
