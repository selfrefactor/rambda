import { delay } from './delay.js'
import { pipeAsync } from './pipeAsync.js'

const fn1 = x => {
  return new Promise(resolve => {
    resolve(x + 2)
  })
}
const fn2 = async x => {
  await delay(1)

  return x + 3
}

test('happy', async () => {
  const result = await pipeAsync(1, fn1, x => x + 2, fn2)
  expect(result).toBe(8)
})
