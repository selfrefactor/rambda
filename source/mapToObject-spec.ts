import {mapToObject} from 'rambda'

interface Output{
  key1: string
  key2: string
  key3: string
}

const list = [ 1, 2, 3, 12 ]
const fn = (x: number) => {
  if(x>10) return false

  return x % 2 ? { [ `key${x}` ] : x + 1 } : { [ `key${x}` ] : x + 10 }
}

describe('R.mapToObject', () => {
  it('happy', () => {
  const result = mapToObject<number, Output>(fn, list)
    result // $ExpectType Output
  })
  it('curried', () => {
    const result = mapToObject<number, Output>(fn)(list)
      result // $ExpectType Output
  })
})
