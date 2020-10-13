import { props } from './props'

const obj = {
  a : 1,
  b : 2,
}

test('happy', () => {
  const result = props([ 'a', 'c' ], obj)
  expect(result).toEqual([ 1, undefined ])
})
