import { toString } from './toString'

test('', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
