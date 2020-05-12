import { add } from './add'
import { delay } from './delay'
import { identity } from './identity'
import { switcher } from './switcher'
import { tap } from './tap'
import { trim } from './trim'
import { type } from './type'

test('accept function as answers', () => {
  const fn = switcher('foo').is('bar', tap)
    .is('foo', add(1))
    .default(trim)

  expect(fn(2)).toEqual(3)
})

test('with boolean tuple', () => {
  const a = true
  const b = false
  const result = switcher([ a, b ])
    .is([ false, false ], '0')
    .is([ false, true ], '1')
    .is([ true, true ], '2')
    .default('3')

  expect(result).toEqual('3')
})

test('with boolean tuple - second test', () => {
  const a = true
  const b = true
  const result = switcher([ a, b ])
    .is([ false, false ], '0')
    .is([ false, true ], '1')
    .is([ true, true ], '2')
    .default('3')

  expect(result).toEqual('2')
})

test('works with objects as arguments', () => {
  const result = switcher({ a : 1 })
    .is({ a : 1 }, 'it is bar')
    .is('baz', 'it is baz')
    .default('it is default')

  expect(result).toEqual('it is bar')
})

const switchFn = input =>
  switcher(input)
    .is({ a : 1 }, 'it is bar')
    .is(x => x.length && x.length === 7, 'has length of 7')
    .is('baz', 'it is baz')
    .default('it is default')

test('hits default of no matches', () => {
  expect(switchFn(1)).toEqual('it is default')
})

test('works with function as condition', () => {
  expect(switchFn([ 0, 1, 2, 3, 4, 5, 6 ])).toEqual('has length of 7')
})

test('works with string as condition', () => {
  expect(switchFn('baz')).toEqual('it is baz')
})

test('works with functions as condition result', () => {
  const input = 'foo'
  const result = switcher(input).is('foo', delay)
    .default(identity)

  expect(type(result())).toEqual('Promise')
})
