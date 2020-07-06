import {delay, composeAsync} from 'rambda'

describe('R.composeAsync', () => {
  it('happy', async () => {
    const result = await composeAsync<number>(
      async x => {
        await delay(100)
        return x + 2
      },
      x => x.length + 10
    )([1, 2])

    result // $ExpectType number
  })
})
