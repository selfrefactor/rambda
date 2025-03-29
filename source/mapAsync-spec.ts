import { mapAsync, pipeAsync } from 'rambda'
import { delay } from 'rambdax'

const list = ['a', 'bc', 'def']

it('R.mapAsync', async () => {
	const fn = async (x:unknown) => x as number + 1

  const result = await pipeAsync(
    list,
    mapAsync(async x => {
      await delay(100)
      x // $ExpectType string
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
		mapAsync(fn),
    mapAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  result // $ExpectType number[]
})
