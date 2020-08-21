import { assoc } from './assoc'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { prop } from './prop'
import { set } from './set'

const testObject = {
  foo : 'bar',
  baz : {
    a : 'x',
    b : 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = set(
    assocLens, 'FOO', testObject
  )
  const expected = {
    ...testObject,
    foo : 'FOO',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = set(
    pathLens, 'z', testObject
  )
  const expected = {
    ...testObject,
    baz : {
      a : 'z',
      b : 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)

  const result = set(
    indexLens, 3, [ 1, 2 ]
  )
  expect(result).toEqual([ 3, 2 ])
})
