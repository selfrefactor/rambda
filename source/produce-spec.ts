import {promiseAllObject, delay} from 'rambda'

interface Output {
  foo: number,
  bar: number,
}

describe('R.promiseAllObject', () => {
  it('with asynchronous functions', async () => {
    const promises = {
      foo: async () => {
        await delay(100)
        return 10
      },
      bar: async () => {
        await delay(100)
        return 20
      },
      baz: () => 30
    }

    const result = await promiseAllObject<Output>(promises)

    result // $ExpectType Output
  })
})
