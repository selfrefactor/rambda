import { mapPropObject } from './mapPropObject.js'
import { pipe } from './pipe.js'

it('happy', () => {
  const result = pipe(
    { a: [1, 2, 3], b: 'foo' },
    mapPropObject(x => ({ a: x, flag: x > 2 }), 'a'),
  )

  expect(result).toEqual({
    a: [
      { a: 1, flag: false },
      { a: 2, flag: false },
      { a: 3, flag: true },
    ],
    b: 'foo',
  })
})
