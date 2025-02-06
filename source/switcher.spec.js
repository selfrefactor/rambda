import { add } from './add.js'
import { switcher } from './switcher.js'
import { tap } from './tap.js'
import { trim } from './trim.js'

test('with undefined', () => {
  const result = switcher(undefined)
    .is(x => x === 0, '0')
    .is(x => x === undefined, 'UNDEFINED')
    .default('3')

  expect(result).toBe('UNDEFINED')
})

test('happy', () => {
  const a = true
  const b = false
  const result = switcher([a, b])
    .is([false, false], '0')
    .is([false, true], '1')
    .is([true, true], '2')
    .default('3')

  expect(result).toBe('3')
})

test('can compare objects', () => {
  const result = switcher({ a: 1 })
    .is({ a: 1 }, 'it is object')
    .is('baz', 'it is baz')
    .default('it is default')

  expect(result).toBe('it is object')
})

test('options are mixture of functions and values - input match function', () => {
  const fn = switcher('foo').is('bar', 1).is('foo', add(1)).default(1000)

  expect(fn(2)).toBe(3)
})

test('options are mixture of functions and values - input match value', () => {
  const result = switcher('bar').is('bar', 1).is('foo', add(1)).default(1000)

  expect(result).toBe(1)
})

test('return function if all options are functions', () => {
  const fn = switcher('foo').is('bar', tap).is('foo', add(1)).default(trim)

  expect(fn(2)).toBe(3)
})

const switchFn = input =>
  switcher(input)
    .is(x => x.length && x.length === 7, 'has length of 7')
    .is('baz', 'it is baz')
    .default('it is default')

test('works with function as condition', () => {
  expect(switchFn([0, 1, 2, 3, 4, 5, 6])).toBe('has length of 7')
})

test('works with string as condition', () => {
  expect(switchFn('baz')).toBe('it is baz')
})

test('fallback to default input when no matches', () => {
  expect(switchFn(1)).toBe('it is default')
})
