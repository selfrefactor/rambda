import { DELAY, delay } from './delay.js'

test('usage with variables', async () => {
  await expect(delay(500)).resolves.toBe(DELAY)
})
