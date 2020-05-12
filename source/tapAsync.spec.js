import { delay } from './delay'
import { tapAsync } from './tapAsync'

test('', async () => {
  const result = await tapAsync(delay)(1)
  expect(result).toEqual(1)
})
