import {mapFastAsync, delay} from 'rambda'

const list = ['a', 'bc', 'def']
const fn = async(x: string) => {
  await delay(100)

  return x.length % 2 ? x.length + 1 : x.length + 10
}
const fnWithIndex = async(x: string, i: number) => {
  await delay(100)

  return (x.length + i) % 2 ? x.length + 1 : x.length + 10
}

describe('R.mapFastAsync', () => {
  it('happy', async() => {
    const result = await mapFastAsync(fn, list)
    result // $ExpectType readonly number[]
  })
  it('curried', async() => {
    const result = await mapFastAsync(fn)(list)
    result // $ExpectType readonly number[]
  })
  it('with index', async() => {
    const result = await mapFastAsync(fnWithIndex, list)
    result // $ExpectType readonly number[]
  })
  it('with index curried', async() => {
    const result = await mapFastAsync(fnWithIndex)(list)
    result // $ExpectType readonly number[]
  })
})
