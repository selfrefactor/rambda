import { promiseAllObject } from './promiseAllObject'

test('happy', async () => {
  const delay = ms =>
    new Promise(res => {
      setTimeout(() => {
        res(ms)
      }, ms)
    })
  const promises = {
    a : delay(1),
    b : delay(2),
    c : delay(3),
  }
  const result = await promiseAllObject(promises)

  expect(result).toEqual({
    a : 1,
    b : 2,
    c : 3,
  })
})
