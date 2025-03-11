import { mapObject } from './mapObject.js'

const double = x => x * 2

it('happy', () => {
  expect(mapObject(double)({ a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 4, c: 6 })
})
