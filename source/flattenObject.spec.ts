import { flattenObject } from './flattenObject'

test('happy', () => {
  const result = flattenObject({
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5,
        z: 4,
        f: {
          h: 6,
          i: 7,
          j: {
            k: 8,
            l: 9,
          },
        },
      },
    },
  })
  const expected = {
    'a': 1,
    'b.c': 3,
    'b.d.e': 5,
    'b.d.z': 4,
    'b.d.f.h': 6,
    'b.d.f.i': 7,
    'b.d.f.j.k': 8,
    'b.d.f.j.l': 9,
  }
  expectTypeOf(result['b.c']).toEqualTypeOf<number>()
  expect(result).toEqual(expected)
})
