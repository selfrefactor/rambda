import { List } from 'rambda'

describe('R.list', () => {
  const list = new List(1,2,3,4,5)
  it('slice', () => {
    const result = list.slice('1:3');

    result // $ExpectType number[]
  })
})
