import { toString } from './toString.js'

test('happy', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
