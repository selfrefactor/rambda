import { uniqWith } from './uniqWith'

const list = [
  {a: 1},
  {a: 1},
]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn, list)
  expect(result).toEqual([{a:1}])
})

test('curried', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn)(list)
  expect(result).toEqual([{a:1}])
})
