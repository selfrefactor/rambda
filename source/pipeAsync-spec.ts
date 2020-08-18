import {delay, pipeAsync} from 'rambda'

describe('R.pipeAsync', () => {
  it('happy', async() => {
    const result = await pipeAsync<number>(
      async x => {
        await delay(100)
        return x + 2
      },
      x => x.length + 10
    )([1, 2])

    result // $ExpectType number
  })
})
