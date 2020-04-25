import { DELAY, delay } from './delay'

test('usage with variables', async () => {
  expect(await delay(500)).toBe(DELAY)
})
