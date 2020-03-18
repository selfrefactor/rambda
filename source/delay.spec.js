import { DELAY, delay } from '..x'

test('usage with variables', async () => {
  expect(await delay(500)).toBe(DELAY)
})
