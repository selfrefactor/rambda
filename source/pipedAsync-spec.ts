import {pipedAsync, delay} from 'rambda'

describe('R.pipedAsync', () => {
  it('happy', async () => {
    const result = await pipedAsync<number>(
      4,
      async x => {
        await delay(100)
        return x + 1
      },
      async x => {
        await delay(100)
        return x + 10
      }
    )

    result // $ExpectType number
  })
})
