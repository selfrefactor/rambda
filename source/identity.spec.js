import {identity} from './identity.js'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toBeTrue()
  expect(identity({a: 1})).toEqual({a: 1})
})
