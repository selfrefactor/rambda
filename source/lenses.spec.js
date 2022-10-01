import { compose } from './compose.js'
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'
import { lensProp } from './lensProp.js'
import { over } from './over.js'
import { toUpper } from './toUpper.js'
import { view } from './view.js'

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

  expect(view(composedLens)(testObject)).toBe('c')

  expect(over(
    composedLens, toUpper, testObject
  )).toEqual({
    ...testObject,
    foo : [ 'a', 'b', 'C' ],
  })
})
