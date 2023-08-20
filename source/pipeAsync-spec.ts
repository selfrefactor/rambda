import {delay, pipeAsync} from 'rambda'

describe('R.pipeAsync', () => {
  it('happy', async() => {
    const fn = pipeAsync(
      async (x: 4) => {
        x // $ExpectType 4
        await delay(100)
        return x + 1
      },
      x => {
        x // $ExpectType number
        return new Promise<string>((resolve) => {
          resolve(x.toString())
        })
      },
      x => {
        x // $ExpectType string
        return Promise.resolve([x])
      }
    )

    const result1 = await fn(4)
    const result2 = await fn(Promise.resolve(4))

    result1 // $ExpectType string[]
    result2 // $ExpectType string[]
  })
})
