import { always, equals, T } from '../rambda.js'
import { cond } from './cond'

test('returns a function', () => {
  expect(typeof cond([])).toEqual('function')
})

test('returns a conditional function', () => {
  const fn = cond([
    [ equals(0), always('water freezes at 0°C') ],
    [ equals(100), always('water boils at 100°C') ],
    [
      T,
      function(temp){
        return 'nothing special happens at ' + temp + '°C'
      },
    ],
  ])
  expect(fn(0)).toEqual('water freezes at 0°C')
  expect(fn(50)).toEqual('nothing special happens at 50°C')
  expect(fn(100)).toEqual('water boils at 100°C')
})

test('returns a function which returns undefined if none of the predicates matches', () => {
  const fn = cond([
    [ equals('foo'), always(1) ],
    [ equals('bar'), always(2) ],
  ])
  expect(fn('quux')).toEqual(undefined)
})

test('predicates are tested in order', () => {
  const fn = cond([
    [ T, always('foo') ],
    [ T, always('bar') ],
    [ T, always('baz') ],
  ])
  expect(fn()).toEqual('foo')
})

test('forwards all arguments to predicates and to transformers', () => {
  const fn = cond([
    [
      function(_, x){
        return x === 42
      },
      () => arguments.length,
    ],
  ])
  expect(fn(
    21, 42, 84
  )).toEqual(3)
})

test('retains highest predicate arity', () => {
  const fn = cond([
    [ nAry(2, T), T ],
    [ nAry(3, T), T ],
    [ nAry(1, T), T ],
  ])
  expect(fn.length).toEqual(3)
})
