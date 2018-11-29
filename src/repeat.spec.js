import { repeat } from './repeat'

test('repeat', () => {
  expect(repeat('')(3)).toStrictEqual([ '', '', '' ])
  expect(repeat('foo', 3)).toStrictEqual([ 'foo', 'foo', 'foo' ])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toStrictEqual([ {}, {}, {} ])

  expect(arr[ 0 ] === arr[ 1 ]).toBeTruthy()
})
