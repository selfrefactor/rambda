import {delay, tryCatchAsync} from 'rambda'

const fn = async (x: number) => {
  await delay(100)
  JSON.parse('{a:')
  return x + 1
}

describe('R.tryCatchAsync', () => {
  it('fallback is value', async () => {
    const result = await tryCatchAsync(fn, 1)(1)

    result // $ExpectType number
  })
  it('fallback is async', async () => {
    const fallback = async (x: number) => {
      await delay(100)
      return x + 1
    }
    const result = await tryCatchAsync(fn, fallback)(1)

    result // $ExpectType number
  })
})
