import { keys } from './keys.js'

test('happy', () => {
  expect(keys({ a : 1 })).toEqual([ 'a' ])
})
