import {delay} from './delay'
import {inc} from './inc'
import {throttle} from './throttle'

test('with side effect', async () => {
  let counter = 0

  const incFn = (a) => {
    counter = counter+a
    return counter
  }
  const incWrapped = throttle(incFn, 1000)
  incWrapped(1)
  incWrapped(1)
  await delay(1500)
  incWrapped(1)
  expect(counter).toBe(2)
})

test('return result', async() => {
  const incWrapped = throttle(inc, 1000)
  const results = []
  results.push(incWrapped(1))
  results.push(incWrapped(1))
  await delay(1500)
  results.push(incWrapped(1))
  await delay(500)
  results.push(incWrapped(1))
  expect(results).toEqual([2,2,2,2])
})
