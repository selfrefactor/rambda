import { add } from './add'
import { delay } from './delay'
import { pipedAsync } from './pipedAsync'

const fn1 = async x => {
  await delay(100)

  return x + 2
}
const fn2 = async x => {
  await delay(100)

  return x + 3
}

test('happy', async () => {
  const result = await pipedAsync(
    1, fn1, add(2), fn2
  )

  expect(result).toBe(8)
})
