import { nop } from './nop.js'

test('call', () => {
  expect(nop).not.toThrow()
})
