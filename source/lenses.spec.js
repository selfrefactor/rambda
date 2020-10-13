import { compose } from './compose'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { lensProp } from './lensProp'
import { over } from './over'
import { toUpper } from './toUpper'
import { view } from './view'

test('composed lenses', () => {
  const testObject = {
    foo : [ 'a', 'b', 'c' ],
    baz : {
      a : 'x',
      b : 'y',
    },
  }
  const propLens = lensProp('foo')
  const indexLens = lensIndex(2)
  const composedLens = compose(propLens, indexLens)

  const pathLens = lensPath('baz.a')
  const composedPathLens = compose(lensPath('baz'), lensPath('a'))
  expect(view(composedPathLens, testObject)).toEqual(view(pathLens, testObject))

  expect(view(composedLens)(testObject)).toEqual('c')

  expect(over(
    composedLens, toUpper, testObject
  )).toEqual({
    ...testObject,
    foo : [ 'a', 'b', 'C' ],
  })
})
