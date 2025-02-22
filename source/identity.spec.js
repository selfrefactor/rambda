import { identity } from './identity.js'

test('happy', () => {
  expect(identity(7)).toBe(7)
  expect(identity(true)).toBeTruthy()
  expect(identity({ a: 1 })).toEqual({ a: 1 })
})
