import { unwind } from './unwind'

test('happy', () => {
  const obj = {
    a: 1,
    b: [2,3],
    c: [3,4]
  }
  const result = unwind('b', obj)
  console.log(result)
})
