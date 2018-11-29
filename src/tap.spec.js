import { tap } from './tap'

test('tap', () => {
  let a = 1
  const sayX = x => a = x

  expect(tap(sayX, 100)).toStrictEqual(100)
  expect(a).toStrictEqual(100)
})
