import { show } from './testUtils'

test('happy', () => {
  expect(show([ 1, { a : 1 } ])).toBe('[1, {"a":1}]')
})
