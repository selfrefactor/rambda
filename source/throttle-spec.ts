import {throttle, add, delay, divide, compose} from 'rambda'

describe('throttle', () => {
  it('curry first issue - divide', () => {
    const fn = throttle(divide, 1000)
    fn(1,2)
    const result = compose(
      divide(2)
    )(2)
    result // $ExpectType number
  })

  it('curry first issue - divide', () => {
    const fn = throttle(divide, 1000)
    fn(1,2)
    const result = compose(
      divide(2)
    )(2)
    result // $ExpectType number
  })
  it('arity of 1', async() => {
    const fn = throttle((x: number) => x + 1, 1000)
    const result1 = fn(1)
    await delay(100)
    const result2 = fn(1)
    result1 // $ExpectType number
    result2 // $ExpectType number
  })
  it('arity of 2', () => {
    /*
      If typings of `R.add` are:

      export function add(a: number, b: number): number;
      export function add(a: number): (b: number) => number;

      then the code below will result in error
    */
    const fn = throttle(add, 1000)
    const result = fn(1, 2)
    result // $ExpectType number
  })
  it('arity of 3', () => {
    const toThrottle = (x: number, y: string, z: boolean) => {
      if (z) return 'foo'
      return `${x}${y}`
    }

    const fn = throttle(toThrottle, 1000)
    const result = fn(1, 'bar', true)
    result // $ExpectType string
  })
})
