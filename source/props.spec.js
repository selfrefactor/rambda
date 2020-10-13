import { props } from './props'

const obj = {
  a : 1,
  b : 2,
}

test('with string as set of selected props', () => {
  const result = props('a,c')(obj)
  expect(result).toEqual([ 1, undefined ])
})

test('with list as set of selected props', () => {
  const result = props([ 'a', 'c' ], obj)
  expect(result).toEqual([ 1, undefined ])
})
