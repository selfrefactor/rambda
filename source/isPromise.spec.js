import { isPromise } from './isPromise'

test('', () => {
  expect(isPromise(() => {})).toBeFalsy()

  expect(isPromise(async () => {})).toBeTruthy()

  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(isPromise(delay(10))).toBeTruthy()
})
