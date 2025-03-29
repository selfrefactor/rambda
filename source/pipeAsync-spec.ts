import { pipeAsync } from 'rambda'
import { delay } from 'rambdax'

describe('R.pipeAsync', () => {
  it('happy', async () => {
    const result = await pipeAsync(
      4,
      async x => {
        x // $ExpectType number
        await delay(100)
        return x + 1
      },
      x => {
        x // $ExpectType number
        return Promise.resolve([x])
      },
    )

    result // $ExpectType number[]
  })
})
