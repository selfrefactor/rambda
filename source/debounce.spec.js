import {debounce} from './debounce'
import {delay} from './delay'
import {inc} from './inc'

test('happy', async () => {
  let counter = 1

  const incWrapped = debounce(inc, 500)

  expect(incWrapped(counter, 2)).toBe(
    3
  )
  
  await delay(200)

  expect(incWrapped(counter, 2)).toBe(
    5
  )
  
  await delay(600)
  expect(incWrapped(counter, 2)).toBe(
    5
  )
})

test('immediate debounce', async () => {
  let counter = 0
  const incFn = () => {
    counter++
  }

  const incWrapped = debounce(incFn, 500, true)
  incWrapped()
  expect(counter).toBe(1)
  await delay(200)
  incWrapped()
  expect(counter).toBe(1)
  await delay(200)
  incWrapped()
  expect(counter).toBe(1)
  await delay(700)
  incWrapped()
  expect(counter).toBe(2)
})
