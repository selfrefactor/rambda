import {pipe, prop} from 'rambda'

describe('R.prop', () => {
  const obj = {a: 1, b: 'foo'}
  interface Something {
    a?: number,
    b?: string,
  }

  it('issue #553', () => {
    const result = prop('e', {e: 'test1', d: 'test2'})
    const curriedResult = prop<string>('e')({e: 'test1', d: 'test2'})

    result // $ExpectType string
    curriedResult // $ExpectType string
  })
  it('happy', () => {
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

    result // $ExpectType string
  })
  it('curried with explicit object type', () => {
    const result = prop<'a', Something>('a')(obj)

    result // $ExpectType number | undefined
  })
  it('curried with implicit object type', () => {
    const result = pipe(value => value as Something, prop('b'))(obj)

    result // $ExpectType undefined
  })
  it('curried with explicit result type', () => {
    const result = prop<'b', string>('b')(obj)

    result // $ExpectType string
  })
})

describe('with number as prop', () => {
  const list = [1, 2, 3]
  const index = 1
  it('happy', () => {
    const result = prop(index, list)

    result // $ExpectType number
  })
  it('curried require explicit type', () => {
    const result = prop<number>(index)(list)

    result // $ExpectType number
  })
})
