import { filterAsync, pipeAsync } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('within pipe', async () => {
    const result = await pipeAsync(
      list,
      filterAsync(async x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    result // $ExpectType number[]
  })
})
