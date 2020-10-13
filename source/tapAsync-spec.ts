import {tapAsync, delay, composeAsync} from 'rambda'

describe('R.tapAsync', () => {
  it('happy', async() => {
    await composeAsync(
      tapAsync(async x => {
        await delay(100)
        x // $ExpectType any
      }),
      (x: number[]) => x.length
    )([1, 2])
  })
})
