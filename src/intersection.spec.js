import { intersection } from './intersection'

test('intersection', () => {
  const list1 = [ 1, 2, 3, 4 ]
  const list2 = [ 3, 4, 5, 6 ]
  expect(intersection(list1)(list2)).toEqual([ 3, 4 ])

  expect(intersection([], [])).toEqual([])
})

test('intersection with objects', () => {
  const list1 = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const list2 = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(intersection(list1)(list2)).toEqual([ { id : 3 }, { id : 4 } ])
})
