import {delay, pipeAsync} from 'rambda'

describe('R.pipeAsync', () => {
  it('happy', async() => {
    const result = await pipeAsync(
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
    )(4)

    result // $ExpectType string[]
  })
})
