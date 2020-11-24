import {prop} from 'rambda'

const obj = {a: 1, b: 'foo'}

describe('R.prop', () => {
  it('happy', () => {
    // const testa = prop('e')({ e: 'test1', d: 'test2' })
    // const testaa = prop('e',{ e: 'test1', d: 'test2' })
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

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
