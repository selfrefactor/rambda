import { DELAY, delay } from './delay.js'

test('usage with variables', async () => {
  expect(await delay(500)).toBe(DELAY)
})
