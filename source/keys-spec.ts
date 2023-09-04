import {keys} from 'rambda'

const obj = {a: 1, b: 2}

interface Generic {
  [key: string]: string,
}

describe('R.keys', () => {
  it('for a known object type', () => {
    const result = keys(obj)
    result // $ExpectType ("a" | "b")[]
  })

  it('for a generic object type', () => {
    const result = keys({} as Generic)
    result // $ExpectType string[]
  })
})
