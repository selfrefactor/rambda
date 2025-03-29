import { mapObjectAsync, pipeAsync } from 'rambda'
import { delay } from 'rambdax'

it('R.mapObjectAsync', async () => {
  const result = await pipeAsync(
    { a: 'foo', b: 'bar' },
    mapObjectAsync(async x => {
      await delay(100)
      x // $ExpectType string
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
    mapObjectAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  result.a // $ExpectType number
  result.b // $ExpectType number
})
