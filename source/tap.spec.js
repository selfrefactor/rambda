import { tap } from './tap.js'

test('tap', () => {
  let a = 1
  const sayX = x => a = x

  expect(tap(sayX, 100)).toBe(100)
  expect(tap(sayX)(100)).toBe(100)
  expect(a).toBe(100)
})
