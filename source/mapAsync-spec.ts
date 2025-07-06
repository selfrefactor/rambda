import { mapAsync, pipeAsync, map } from 'rambda'

const list = ['a', 'bc', 'def']
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

it('R.mapAsync', async () => {
  const result = await pipeAsync(
    list,
    mapAsync(async x => {
      await delay(100)
      x // $ExpectType string
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
		map(x => x +1),
    mapAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  result // $ExpectType number[]
})
