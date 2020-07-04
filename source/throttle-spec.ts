import {
  add,
  delay,
  divide,
  either,
  endsWith,
  equals,
  has,
  match,
  hasPath,
  identical,
  indexOf,
  join,
  ifElse, 
  is, 
  last,
  lastIndexOf,
  pipe,
  throttle,
} from 'rambda'

describe('curry first issue', () => {
  it('is', () => {
    const pipeResult = pipe(
      last,
      is(Number)
    )([1, 2, 3])
    
    const fn = throttle(is, 1000)
    const result = fn(Number, 1)
    result // $ExpectType boolean
    pipeResult // $ExpectType boolean
  })
  it('lastIndexOf', () => {
    const fn = throttle(lastIndexOf, 1000)
    fn([1, 2, 3])
  })
  it('match', () => {
    const fn = throttle(match, 1000)
    fn(/foo/,'foo bar')
  })
  it('join', () => {
    const fn = throttle(join, 1000)
    const result = fn('|',[1, 2, 3])
    result // $ExpectType string
  })
  it('indexOf', () => {
    const fn = throttle(indexOf, 1000)
    const result = fn(1,[1, 2, 3])
    result // $ExpectType number
  })
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
