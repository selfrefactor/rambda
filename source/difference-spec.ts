import { difference } from 'rambda'

describe('R.difference', () => {
  it('happy', () => {
    const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    const list2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    const result = difference(list1)(list2)

    result // $ExpectType { id: number; }[]
  })
})
