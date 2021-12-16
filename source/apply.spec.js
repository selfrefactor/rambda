import {apply} from './apply'
import {bind} from './bind'
import {identity} from './identity'

test('happy', () => {
  expect(apply(identity, [1, 2, 3])).toEqual(1)
})

test('applies function to argument list', function () {
  expect(apply(Math.max, [1, 2, 3, -99, 42, 6, 7])).toEqual(42)
})

test('provides no way to specify context', function () {
  const obj = {
    method: function () {
      return this === obj
    },
  }
  expect(apply(obj.method, [])).toEqual(false)
  expect(apply(bind(obj.method, obj), [])).toEqual(true)
})
