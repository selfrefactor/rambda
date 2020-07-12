import {delay, debounce} from 'rambda'

describe('R.debounce', () => {
  it('arity of 1', async() => {
    const fn = debounce((x: number) => x + 1, 1000)
    const result1 = fn(1)
    await delay(100)
    const result2 = fn(1)
    result1 // $ExpectType number
    result2 // $ExpectType number
  })
  it('arity of 2', () => {
    function add(x: number, y: number) {
      return x + y
    }
    const fn = debounce(add, 1000)
    const result = fn(1, 2)
    result // $ExpectType number
  })
  it('arity of 3', () => {
    const todebounce = (x: number, y: string, z: boolean) => {
      if (z) return 'foo'
      return `${x}${y}`
    }

    const fn = debounce(todebounce, 1000)
    const result = fn(1, 'bar', true)
    result // $ExpectType string
  })
})
