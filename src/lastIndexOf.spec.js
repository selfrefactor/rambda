import { lastIndexOf } from './lastIndexOf'

test('', () => {
  const a = lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
  const b = lastIndexOf(1)([ 1, 2, 3, 1, 2 ])

  expect(a).toStrictEqual(3)
  expect(b).toStrictEqual(3)
})

test('false', () => {
  const a = lastIndexOf(10, [ 1, 2, 3, 1, 2 ])

  expect(a).toStrictEqual(-1)
})
