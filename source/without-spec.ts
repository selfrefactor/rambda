import {without} from 'rambda'

const itemsToOmit = ['A', 'B', 'C']
const collection = ['A', 'B', 'C', 'D', 'E', 'F']

describe('R.without', () => {
  it('happy', () => {
    const result = without(itemsToOmit, collection)

    result // $ExpectType readonly string[]
  })
  it('curried', () => {
    const result = without(itemsToOmit)(collection)

    result // $ExpectType readonly string[]
  })
})
