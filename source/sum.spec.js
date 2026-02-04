import { sum } from './sum.js'

test('happy', () => {
  expect(sum([1,2,3])).toEqual(6)
})
