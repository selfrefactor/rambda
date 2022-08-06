import {debounce} from 'rambda'

describe('R.debounce', () => {
  it('happy', async() => {
    const fn = debounce((x: number) => x + 1, 1000)
    const result = fn(1)
    result // $ExpectType void
  })
  it('with immediate flag', async() => {
    const fn = debounce((x: number) => x + 1, 1000, true)
    const result = fn(1)
    result // $ExpectType void
  })
  it('with explicit types', async() => {
    debounce<number, boolean>(x => x > 1, 1000)

    // @ts-expect-error
    debounce<number, boolean>(x => {
      return x + 1
    }, 1000)
  })
})
