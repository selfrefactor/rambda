import {memoize, delay} from 'rambda'

describe('memoize', () => {
  test('synchronous function', () =>{
    const fn = (x: number, y: number) => x + y
    const memoized = memoize(fn)
    const result = memoized(1,2)
    result // $ExpectType number
  })
  test('asynchronous function', async () =>{
    const fn = async (x: number, y: number) => {
      await delay(100)
      return x + y
    }
    const memoized = memoize(fn)
    const result = await memoized(1,2)
    result // $ExpectType number
  })
})
