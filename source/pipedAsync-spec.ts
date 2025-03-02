import { delay, pipedAsync } from 'rambdax'

describe('R.pipedAsync', () => {
  it('happy', async () => {
    const result = await pipedAsync(
      4 as const,
      async x => {
        x // $ExpectType 4
        await delay(100)
        return x + 1
      },
      x => {
        x // $ExpectType number
        return new Promise<string>(resolve => {
          resolve(x.toString())
        })
      },
      x => {
        x // $ExpectType string
        return Promise.resolve([x])
      },
    )

    result // $ExpectType string[]
  })
})
