import {filterAsync, delay} from 'rambda'

const list = ['a', 'bc', 'def']
const predicate = async(x: string) => {
  await delay(100)

  return x.length % 2 === 0
}
const predicateWithIndex = async(x: string, i: number) => {
  await delay(100)

  return x.length + i % 2 === 0
}

describe('R.filterAsync', () => {
  it('happy', async() => {
    const result = await filterAsync(predicate, list)
    result // $ExpectType readonly string[]
  })
  it('curried', async() => {
    const result = await filterAsync(predicate)(list)
    result // $ExpectType readonly string[]
  })
  it('with index', async() => {
    const result = await filterAsync(predicateWithIndex, list)
    result // $ExpectType readonly string[]
  })
  it('with index curried', async() => {
    const result = await filterAsync(predicateWithIndex)(list)
    result // $ExpectType readonly string[]
  })
})
