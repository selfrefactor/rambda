import { delay } from './delay'
import { filterAsync } from './filterAsync'

test('happy', async () => {
  const predicate = async (x, i) => {
    expect(i).toBeNumber()
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate)([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3 ])
})

test('with object', async () => {
  const predicate = async (x, prop) => {
    expect(prop).toBeString()
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
  })

  expect(result).toEqual({
    a : 1,
    c : 3,
    e : 5,
  })
})
