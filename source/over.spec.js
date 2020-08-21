import { assoc } from './assoc'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { over } from './over'
import { prop } from './prop'
import { toUpper } from './toUpper'

const testObject = {
  foo : 'Led Zeppelin',
  bar : [ 1, 2 ],
  baz : {
    a : 'x',
    b : 'y',
  },
}

const assocLens = lens(prop('foo'), assoc('foo'))
const indexLens = lensIndex(0)
const pathLens = lensPath('baz.a')

test('assoc lens', () => {
  const result = over(
    assocLens, toUpper, testObject
  )
  const expected = {
    ...testObject,
    foo : 'LED ZEPPELIN',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const result = over(
    pathLens, toUpper, testObject
  )
  const expected = {
    ...testObject,
    baz : {
      a : 'X',
      b : 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const result = over(indexLens, x => x + 1)(testObject.bar)
  expect(result).toEqual([ 2, 2 ])
})
