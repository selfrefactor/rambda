import {partialCurry, delay} from 'rambda'

describe('partialCurry', () => {
  it('happy', () => {
    interface Input {
      a: number,
      b: number,
      c: string,
    }
    const fn = ({a, b, c}: Input) => a + b + c
    const curried = partialCurry(fn, {a: 1})
    const result = curried({
      b: 2,
      c: 'foo',
    })
    result // $ExpectType string
  })
  it('asynchronous', async() => {
    interface Input {
      a: number,
      b: number,
      c: string,
    }
    const fn = async({a, b, c}: Input) => {
      await delay(100)
      return a + b + c
    }
    const curried = partialCurry(fn, {a: 1})
    const result = await curried({
      b: 2,
      c: 'foo',
    })
    result // $ExpectType string
  })
})
