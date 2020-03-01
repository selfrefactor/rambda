import { always } from './always'
import { applySpec } from './applySpec'
import { compose } from './compose'
import { inc } from './inc'
import { path } from './path'
import { prop } from './prop'

test('arity', () => {
  const spec = {
    one: (x1) => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
  }
  expect(applySpec(spec, 1, 2, 3)).toEqual({
    one: 1,
    two: 3,
    three: 6,
  })
})

test('arity over 5 arguments', () => {
  const spec = {
    one: (x1) => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
    four: (x1, x2, x3, x4) => x1 + x2 + x3 + x4,
    five: (x1, x2, x3, x4, x5) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec, 1, 2, 3, 4, 5)).toEqual({
    one: 1,
    two: 3,
    three: 6,
    four: 10,
    five: 15,
  })
})

test('curried', () => {
  const spec = {
    one: (x1) => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
  }
  expect(applySpec(spec)(1)(2)(3)).toEqual({
    one: 1,
    two: 3,
    three: 6,
  })
})

test('curried over 5 arguments', () => {
  const spec = {
    one: (x1) => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
    four: (x1, x2, x3, x4) => x1 + x2 + x3 + x4,
    five: (x1, x2, x3, x4, x5) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec)(1)(2)(3)(4)(5)).toEqual({
    one: 1,
    two: 3,
    three: 6,
    four: 10,
    five: 15,
  })
})

test('undefined property', () => {
  const spec = {
    prop: path(['property', 'doesnt', 'exist'])
  }
  expect(applySpec(spec, {})).toEqual({
    prop: undefined
  })
})

test('filter spec property that is not callable', () => {
  const spec = {
    prop: 'not callable'
  }
  expect(applySpec(spec, {})).toEqual({})
})


test('Restructure json object', () => {

  const spec = {
    id: path('user.id'),
    name: path('user.firstname'),
    profile: path('user.profile'),
    doesntExist: path('user.profile.doesntExist'),
    info: {
      views: compose(inc, prop('views'))
    },
    type: always('playa'),
  }

  const data = {
    user: {
      id: 1337,
      firstname: 'john',
      lastname: 'shaft',
      profile: 'shaft69',
    },
    views: 42,
  }

  expect(applySpec(spec, data)).toEqual({
    id: 1337,
    name: 'john',
    profile: 'shaft69',
    doesntExist: undefined,
    info: {
      views: 43,
    },
    type: 'playa',
  })

})
