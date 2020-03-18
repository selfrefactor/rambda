import { debounce } from './debounce'
import { delay } from './delay'

test('', async () => {
  let counter = 0
  let aHolder
  let bHolder

  const inc = (a, b) => {
    aHolder = a
    bHolder = b
    counter++
  }
  const incWrapped = debounce(inc, 500)

  incWrapped(1, 2)
  expect(counter).toBe(0)
  expect(aHolder).toBe(undefined)
  expect(bHolder).toBe(undefined)

  await delay(200)

  incWrapped(2, 3)
  expect(counter).toBe(0)

  await delay(200)

  incWrapped(3, 4)
  expect(counter).toBe(0)
  expect(aHolder).toBe(undefined)
  expect(bHolder).toBe(undefined)

  await delay(200)
  incWrapped(5, 6)
  expect(counter).toBe(0)

  await delay(700)
  expect(counter).toBe(1)
  expect(aHolder).toBe(5)
  expect(bHolder).toBe(6)
})

test('immediate debounce', async () => {
  let counter = 0
  const inc = () => {
    counter++
  }

  const incWrapped = debounce(
    inc, 500, true
  )
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
