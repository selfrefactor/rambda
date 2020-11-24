import {takeWhile} from 'rambda'

const list = [1, 2, 3, 4]

describe('R.takeWhile', () => {
  it('happy', () => {
    const result = takeWhile(x => x > 2, list)

    result // $ExpectType readonly number[]
  })
  it('curried require explicit type', () => {
    const result = takeWhile<number>(x => x > 2)(list)

    result // $ExpectType readonly number[]
  })
})

describe('with string as iterable', () => {
  const str = 'foobar'
  it('happy', () => {
    const result = takeWhile(x => x !== 'b', str)

    result // $ExpectType string
  })
  it('curried require explicit type', () => {
    const result = takeWhile(x => x !== 'b')(str)

    result // $ExpectType string
  })
})
