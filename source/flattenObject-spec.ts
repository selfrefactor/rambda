import {flattenObject} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.flattenObject', () => {
  it('without explicit type', () => {
    const result = flattenObject(obj)

    result // $ExpectType Record<string, unknown>
  })

  it('with explicit type', () => {
    const result = flattenObject<number>(obj)

    result // $ExpectType Record<string, number>
  })
})
