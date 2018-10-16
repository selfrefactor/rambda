import {add} from './add'
import {map} from './map'
import {filter} from './filter'
import {last} from './last'
import {compose} from './compose'

test('', () => {
  const result = compose(
    last,
    map(R.add(10)),
    map(R.add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('accepts initially two arguments', () => {
  const result = compose(
    map(x => x * 2),
    (a, y) => filter(x => x > y, a)
  )([1, 2, 3, 4], 2)

  expect(result).toEqual([6,8])
})
