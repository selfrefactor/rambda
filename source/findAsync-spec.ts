import {findAsync, delay} from 'rambda'

const list = [1, 2, 3]

const predicate = async(x: number) => {
  await delay(100)
  return x > 1
}

describe('R.findAsync', () => {
  it('curried', async() => {
    const result = await findAsync(predicate)(list)
    result // $ExpectType number | undefined
  })
})
