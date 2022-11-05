import { pick } from './pick.js'

const obj = {
  a : 1,
  b : 2,
  c : 3,
}

test('props to pick is a string', () => {
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('when prop is missing', () => {
  const result = pick('a,d,f', obj)
  expect(result).toEqual({ a : 1 })
})

test('with list indexes as props', () => {
  const list = [ 1, 2, 3 ]
  const expected = {
    0 : 1,
    2 : 3,
  }
  expect(pick([ 0, 2, 3 ], list)).toEqual(expected)
  expect(pick('0,2,3', list)).toEqual(expected)
})

test('props to pick is an array', () => {
  expect(pick([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(pick([ 'a', 'd', 'e', 'f' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toBeUndefined()
})

test('works with list as input and number as props - props to pick is an array', () => {
  const result = pick([ 1, 2 ], [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('works with list as input and number as props - props to pick is a string', () => {
  const result = pick('1,2', [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('with symbol', () => {
  const symbolProp = Symbol('s')
  expect(pick([ symbolProp ], { [ symbolProp ] : 'a' })).toMatchInlineSnapshot(`
    {
      Symbol(s): "a",
    }
  `)
})
