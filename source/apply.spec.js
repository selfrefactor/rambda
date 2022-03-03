import {apply} from './apply.js'
import {bind} from './bind.js'
import {identity} from './identity.js'

test('happy', () => {
  expect(apply(identity, [1, 2, 3])).toEqual(1)
})

test('applies function to argument list', () => {
  expect(apply(Math.max, [1, 2, 3, -99, 42, 6, 7])).toEqual(42)
})

test('provides no way to specify context', () => {
  const obj = {
    method: function () {
      return this === obj
    },
  }
  expect(apply(obj.method, [])).toBeFalse()
  expect(apply(bind(obj.method, obj), [])).toBeTrue()
})
