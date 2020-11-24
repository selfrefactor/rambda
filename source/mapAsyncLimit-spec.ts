import {mapAsyncLimit, delay} from 'rambda'

const list = ['a', 'bc', 'def']
const limit = 3
const fn = async(x: string) => {
  await delay(100)

  return x.length % 2 ? x.length + 1 : x.length + 10
}
const fnWithIndex = async(x: string, i: number) => {
  await delay(100)

  return (x.length + i) % 2 ? x.length + 1 : x.length + 10
}

describe('R.mapAsyncLimit', () => {
  it('happy', async() => {
    const result = await mapAsyncLimit(fn, limit, list)
    result // $ExpectType readonly number[]
  })
  it('with index', async() => {
    const result = await mapAsyncLimit(fnWithIndex, limit, list)
    result // $ExpectType readonly number[]
  })
})

describe('curried', () => {
  it('happy', async() => {
    const result = await mapAsyncLimit(fn, limit)(list)
    result // $ExpectType readonly number[]
  })
  it('with index', async() => {
    const result = await mapAsyncLimit(fnWithIndex, limit)(list)
    result // $ExpectType readonly number[]
  })
})
