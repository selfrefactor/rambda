import { props } from './props'

const obj = {a: 1, b: 2}

test('happy', () => {
  const result = props(['a', 'c'], obj)
  console.log(result)
  expect(result).toEqual([1,undefined])
})