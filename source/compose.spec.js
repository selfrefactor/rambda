import { compose as composeRamda } from 'ramda'

import { add } from './add.js'
import { compose } from './compose.js'
import { filter } from './filter.js'
import { last } from './last.js'
import { map } from './map.js'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toBe(14)
})

test('can accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (list, limit) => filter(x => x > limit, list))([ 1, 2, 3, 4, false ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrowErrorMatchingInlineSnapshot('"compose requires at least one argument"')
})

test('ramda spec', () => {
  const f = function (
    a, b, c
  ){
    return [ a, b, c ]
  }
  const g = compose(f)

  expect(g(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
})

test('does return correct length of composed function', () => {
  expect(compose(
    map, map, map
  )).toHaveLength(2)
  expect(composeRamda(
    map, map, map
  )).toHaveLength(2)
})
