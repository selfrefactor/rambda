import {add} from './add'
import {compose} from './compose'
import {filter} from './filter'
import {last} from './last'
import {map} from './map'

test('happy', () => {
  const result = compose(last, map(add(10)), map(add(1)))([1, 2, 3])

  expect(result).toEqual(14)
})

test('can accepts initially two arguments', () => {
  const result = compose(
    map(x => x * 2),
    (list, limit) => filter(x => x > limit, list)
  )([1, 2, 3, 4, false], 2)

  expect(result).toEqual([6, 8])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrow('compose requires at least one argument')
})

test('ramda spec', () => {
  const f = function (a, b, c) {
    return [a, b, c]
  }
  const g = compose(f)

  expect(g(1, 2, 3)).toEqual([1, 2, 3])
})
