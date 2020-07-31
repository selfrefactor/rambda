import {assocPath} from 'rambda'

describe('R.assocPath', () => {
  it('happy', () => {
    const result = assocPath(['b'], 2, {a: 1})

    result // $ExpectType { a: number; }
  })
})
