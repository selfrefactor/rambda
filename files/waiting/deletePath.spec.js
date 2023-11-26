import { deletePath } from './deletePath.js'

test('happy', () => {
  const obj = {
    a : 1,
    b : {
      c : 2,
      d : {
        e : 3,
        f : 4,
      },
    },
  }
  const expected = {
    a : 1,
    b : {
      c : 2,
      d : {
        e : 3,
        f : 4,
      },
    },
  }
  const result = deletePath('a.b.d.e', obj)
  expect(result).toEqual(expected)
})
