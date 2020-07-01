import {
  add,
  delay,
  divide,
  either,
  endsWith,
  throttle,
  equals,
  findIndex,
  has,
  hasPath,
  identical,
  ifElse,
  findLastIndex,
} from 'rambda'

describe('curry first issue', () => {
  it('ifElse', () => {
    const fn = throttle(ifElse, 1000)
    const result = fn(x => x > 1, () => 10, () => 2)(3)
    result // $ExpectType any
  })
  it('identical', () => {
    const fn = throttle(identical, 1000)
    const result = fn('a', {a:1})
    result // $ExpectType boolean
  })
  it('hasPath', () => {
    const fn = throttle(hasPath, 1000)
    const result = fn('a', {a:1})
    result // $ExpectType boolean
  })
  it('has', () => {
    const fn = throttle(has, 1000)
    const result = fn('fi', {a:1})
    result // $ExpectType boolean
  })
  it('findLastIndex', () => {
    const fn = throttle(findLastIndex, 1000)
    const result = fn(x => x === 1, [1, 2, 3])
    result // $ExpectType number
  })
  it('findIndex', () => {
    const fn = throttle(findIndex, 1000)
    const result = fn(x => x === 1, [1, 2, 3])
    result // $ExpectType number
  })
  it('equals', () => {
    const fn = throttle(equals, 1000)
    const result = fn('f','foo')
    result // $ExpectType boolean
  })
  it('endsWith', () => {
    const fn = throttle(endsWith, 1000)
    const result = fn('f','foo')
    result // $ExpectType boolean
  })
  it('either', () => {
    const fn = throttle(either, 1000)
    const result = fn(x => x> 1,x => x > 4)(5)
    result // $ExpectType boolean
  })
  it('divide', () => {
    const fn = throttle(divide, 1000)
    fn(1,2)
  })
})


describe('throttle', () => {
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
