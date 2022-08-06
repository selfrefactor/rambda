import {produceAsync, delay} from 'rambda'

interface Output {
  foo: number,
}

describe('R.produceAsync', () => {
  it('happy', async() => {
    const result = await produceAsync(
      {
        foo: async x => {
          x // $ExpectType number
          await delay(100)
          return x + 10
        },
        bar: async x => {
          return x + 20
        },
      },
      10
    )

    result.foo // $ExpectType number
    result.bar // $ExpectType number
  })

  it('happy', async() => {
    const fn = produceAsync<number, Output>({foo: async x => x + 1})
    const result = await fn(10)

    result.foo // $ExpectType number
  })
})
