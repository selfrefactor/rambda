import {produceAsync, delay} from 'rambda'

interface Output {
  foo: number,
  bar: number,
}

describe('R.produceAsync', () => {
  it('happy', async() => {
    const rules = {
      foo: async(x: number) => {
        await delay(100)
        return x + 10
      },
      bar: (x: number) => {
        return x + 20
      },
    }

    const result = await produceAsync<number, Output>(rules, 10)
    result // $ExpectType Output

    const fn = produceAsync<number, Output>(rules)
    const curriedResult = await fn(10)

    fn // $ExpectType (input: number) => Promise<Output>
    curriedResult // $ExpectType Output
  })
})
