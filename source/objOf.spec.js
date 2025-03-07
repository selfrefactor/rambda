import { objOf } from './objOf.js'

test('happy', () => {
  expect(objOf('foo')(42)).toEqual({ foo: 42 })
})
