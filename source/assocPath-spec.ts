import {assocPath} from 'ramda'

describe('R.assocPath', () => {
  it('happy', () => {
    const result = assocPath(
      ['b'], 2, { a : 1 }
    )

    result // $ExpectType { a: number; }
  })
})
