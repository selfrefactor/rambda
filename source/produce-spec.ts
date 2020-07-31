import {produce, delay} from 'rambda'

interface Output {
  foo: number,
  bar: number,
}

describe('R.produce', () => {
  it('rules contains asynchronous function', async() => {
    const rules = {
      foo: async(x: number) => {
        await delay(100)
        return x + 10
      },
      bar: (x: number) => {
        return x + 20
      },
    }

    const result = await produce<number, Promise<Output>>(rules, 10)
    const curriedResult = await produce<number, Promise<Output>>(rules)(10)

    result // $ExpectType Output
    curriedResult // $ExpectType Output
  })

  it('rules contains only synchronous functions', () => {
    const rules = {
      foo: (x: number) => {
        return x + 10
      },
      bar: (x: number) => {
        return x + 20
      },
    }

    const result = produce<number, Output>(rules, 10)
    const curriedResult = produce<number, Output>(rules)(10)

    result // $ExpectType Output
    curriedResult // $ExpectType Output
  })
})
