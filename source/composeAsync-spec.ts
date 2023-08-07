import {delay, composeAsync} from 'rambda'

describe('R.composeAsync', () => {
  it('happy', async() => {
    const fn = composeAsync(
      // Notice the type parameter here. Because of the order of the functions,
      // TypeScript won't infer the type of `x` from later functions, but using
      // a type parameter we can leave it generic and properly compute the
      // result type at the end.
      <T>(x: T) => {
        x // $ExpectType T
        return Promise.resolve([x])
      },
      x => {
        x // $ExpectType number
        return new Promise<string>((resolve) => {
          resolve(x.toString())
        })
      },
      async (x: 4) => {
        x // $ExpectType 4
        await delay(100)
        return x + 1
      },
    )

    const result1 = await fn(4)
    const result2 = await fn(Promise.resolve(4))

    result1 // $ExpectType string[]
    result2 // $ExpectType string[]
  })
})
