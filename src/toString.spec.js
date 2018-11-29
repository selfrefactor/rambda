import { toString } from './toString'

test('', () => {
  expect(toString([ 1, 2, 3 ])).toStrictEqual('1,2,3')
})
