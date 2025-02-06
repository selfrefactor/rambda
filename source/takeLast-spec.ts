import { filter, piped, takeLast } from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.takeLast - array', () => {
  it('happy', () => {
    const result = takeLast(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = takeLast<number[]>(howMany)(list)

    result // $ExpectType number[]
  })
  it('real case', () => {
    const data = ['foo', 'bar', 'baz', 'qux']
    const result = piped(
      data,
      filter(x => x.length >= 100),
      // takeLast(2),
    )
    result // $ExpectType string[]
  })
})

describe('R.takeLast - string', () => {
  it('happy', () => {
    const result = takeLast(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = takeLast<string>(howMany)(str)

    result // $ExpectType string
  })
})
