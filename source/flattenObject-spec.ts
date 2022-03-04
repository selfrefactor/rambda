import {flattenObject} from 'rambda'

describe('R.flattenObject', () => {
  it('happy', () => {
    const result = flattenObject({a: 1})

    result // $ExpectType Record<string, unknown>
  })
})
