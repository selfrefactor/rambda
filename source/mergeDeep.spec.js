import { mergeDeep } from './mergeDeep.js'

test('happy', () => {
  const source = {
    a: 1,
    b: [1, 2],
    c: {
      d: 1,
      f: 2,
      e: [1, 2],
      h: [1, 2],
    },
  }
  const objectWithNewProps = {
    b: [3],
    c: {
      f: 3,
      s: 3,
      e: [3],
    },
    q: 3,
  }
  expect(mergeDeep(source)(objectWithNewProps)).toEqual({
    a: 1,
    b: [3],
    c: { d: 1, f: 3, e: [3], h: [1, 2], s: 3 },
    q: 3,
  })
})
