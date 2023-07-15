import {addIndex} from 'ramda'

describe('R.addIndex', () => {
  it('happy', () => {
    const withIndex = addIndex()

    result // $ExpectType number
  })
  it('curried', () => {
    const result = addIndex()

    result // $ExpectType number
  })
})
