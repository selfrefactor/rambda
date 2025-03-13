import { merge } from './merge.js'

const obj = {
  foo: 1,
  bar: 2,
}

test('happy', () => {
  expect(merge(obj)( { bar: 20 })).toEqual({
    foo: 1,
    bar: 20,
  })
})
