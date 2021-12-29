import { debounce} from 'rambda'

describe('R.debounce', () => {
  it('happy', async() => {
    const fn = debounce((x: number) => x + 1, 1000)
    const result = fn(1)
    result // $ExpectType void
  })
  it('with explicit types', async() => {
    debounce<number, boolean>(x => x > 1, 1000)
    
    // $ExpectError
    debounce<number, boolean>(x => {
      return x + 1
    }, 1000)
  })
})
