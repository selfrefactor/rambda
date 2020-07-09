import {promiseAllObject, delay} from 'rambda'

const promises = {
  foo: async () => {
    await delay(100)
    return 10
  },
  bar: async () => {
    await delay(100)
    return 10
  }
}

describe('R.promiseAllObject', () => {
  it('happy', async () => {
    const result = await promiseAllObject(promises)

    result // $ExpectType number
  })
})
