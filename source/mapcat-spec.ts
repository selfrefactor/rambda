import {mapcat} from 'rambda'

describe('R.mapcat', () => {
  it('happy', () => {
    const result = mapcat(1)

    result // $ExpectType 1
  })
})
