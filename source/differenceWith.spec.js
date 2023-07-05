import { differenceWith } from './differenceWith.js'

test('happy', () => {
  const foo = [ { a : 1 }, { a : 2 }, { a : 3 } ]
  const bar = [ { a : 3 }, { a : 4 } ]
  const fn = function (r, s){
    return r.a === s.a
  }
  const result = differenceWith(
    fn, foo, bar
  )
  expect(result).toEqual([ { a : 1 }, { a : 2 } ])
})
