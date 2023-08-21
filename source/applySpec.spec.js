import { applySpec as applySpecRamda, nAry } from 'ramda'

import {
  add,
  always,
  compose,
  dec,
  inc,
  map,
  path,
  prop,
  T,
} from '../rambda.js'
import { applySpec } from './applySpec.js'

test('different than Ramda when bad spec', () => {
  const result = applySpec({ sum : { a : 1 } })(1, 2)
  const ramdaResult = applySpecRamda({ sum : { a : 1 } })(1, 2)
  expect(result).toEqual({})
  expect(ramdaResult).toEqual({ sum : { a : {} } })
})

test('works with empty spec', () => {
  expect(applySpec({})()).toEqual({})
  expect(applySpec([])(1, 2)).toEqual({})
  expect(applySpec(null)(1, 2)).toEqual({})
})

test('works with unary functions', () => {
  const result = applySpec({
    u : dec,
    v : inc,
  })(1)
  const expected = {
    u : 0,
    v : 2,
  }
  expect(result).toEqual(expected)
})

test('works with binary functions', () => {
  const result = applySpec({ sum : add })(1, 2)
  expect(result).toEqual({ sum : 3 })
})

test('works with nested specs', () => {
  const result = applySpec({
    nested   : { sum : add },
    unnested : always(0),
  })(1, 2)
  const expected = {
    nested   : { sum : 3 },
    unnested : 0,
  }
  expect(result).toEqual(expected)
})

test('works with arrays of nested specs', () => {
  const result = applySpec({
    nested   : [ { sum : add } ],
    unnested : always(0),
  })(1, 2)

  expect(result).toEqual({
    nested   : [ { sum : 3 } ],
    unnested : 0,
  })
})

test('works with arrays of spec objects', () => {
  const result = applySpec([ { sum : add } ])(1, 2)

  expect(result).toEqual([ { sum : 3 } ])
})

test('works with arrays of functions', () => {
  const result = applySpec([ map(prop('a')), map(prop('b')) ])([
    {
      a : 'a1',
      b : 'b1',
    },
    {
      a : 'a2',
      b : 'b2',
    },
  ])
  const expected = [
    [ 'a1', 'a2' ],
    [ 'b1', 'b2' ],
  ]
  expect(result).toEqual(expected)
})

test('works with a spec defining a map key', () => {
  expect(applySpec({ map : prop('a') })({ a : 1 })).toEqual({ map : 1 })
})

test('cannot retains the highest arity', () => {
  const f = applySpec({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  const fRamda = applySpecRamda({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  expect(f).toHaveLength(0)
  expect(fRamda).toHaveLength(5)
})

test('returns a curried function', () => {
  expect(applySpec({ sum : add })(1)(2)).toEqual({ sum : 3 })
})

// Additional tests
// ============================================
test('arity', () => {
  const spec = {
    one   : x1 => x1,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    two : (x1, x2) => x1 + x2,
  }
  expect(applySpec(
    spec, 1, 2, 3
  )).toEqual({
    one   : 1,
    three : 6,
    two   : 3,
  })
})

test('arity over 5 arguments', () => {
  const spec = {
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    one   : x1 => x1,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    two : (x1, x2) => x1 + x2,
  }
  expect(applySpec(
    spec, 1, 2, 3, 4, 5
  )).toEqual({
    five  : 15,
    four  : 10,
    one   : 1,
    three : 6,
    two   : 3,
  })
})

test('curried', () => {
  const spec = {
    one   : x1 => x1,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    two : (x1, x2) => x1 + x2,
  }
  expect(applySpec(spec)(1)(2)(3)).toEqual({
    one   : 1,
    three : 6,
    two   : 3,
  })
})

test('curried over 5 arguments', () => {
  const spec = {
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    one   : x1 => x1,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    two : (x1, x2) => x1 + x2,
  }
  expect(applySpec(spec)(1)(2)(3)(4)(5)).toEqual({
    five  : 15,
    four  : 10,
    one   : 1,
    three : 6,
    two   : 3,
  })
})

test('undefined property', () => {
  const spec = { prop : path([ 'property', 'doesnt', 'exist' ]) }
  expect(applySpec(spec, {})).toEqual({ prop : undefined })
})

test('restructure json object', () => {
  const spec = {
    doesntExist : path('user.profile.doesntExist'),
    id          : path('user.id'),
    info        : { views : compose(inc, prop('views')) },
    name        : path('user.firstname'),
    profile     : path('user.profile'),
    type        : always('playa'),
  }

  const data = {
    user : {
      firstname : 'john',
      id        : 1337,
      lastname  : 'shaft',
      profile   : 'shaft69',
    },
    views : 42,
  }

  expect(applySpec(spec, data)).toEqual({
    doesntExist : undefined,
    id          : 1337,
    info        : { views : 43 },
    name        : 'john',
    profile     : 'shaft69',
    type        : 'playa',
  })
})
