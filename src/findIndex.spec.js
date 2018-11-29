import { findIndex } from './findIndex'
import { propEq } from './propEq'

test('', () => {
  expect(
    findIndex(propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toStrictEqual(1)

  expect(
    findIndex(propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toStrictEqual(0)

  expect(
    findIndex(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toStrictEqual(-1)
})
