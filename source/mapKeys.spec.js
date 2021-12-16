import {mapKeys} from './mapKeys'

const obj = {
  a: 1,
  b: 2,
}
const changeKeyFn = prop => `${prop}_foo`
const expected = {
  a_foo: 1,
  b_foo: 2,
}

test('happy', () => {
  const result = mapKeys(changeKeyFn, obj)

  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = mapKeys(changeKeyFn)(obj)

  expect(result).toEqual(expected)
})
