import { findAsync } from './findAsync.js'
import { propEq } from './propEq.js'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', async () => {
  const fn = async (x, i) => {
    expect(typeof i).toBe('number')

    return propEq(2, 'a', x)
  }
  await expect(findAsync(fn)(list)).resolves.toEqual({ a: 2 })
})

test('with error', async () => {
  const fn = async x => x.a.b.c === 1

  try {
    await findAsync(fn)(list)
  } catch (error) {
    expect(error.message).toBe("Cannot read properties of undefined (reading 'c')")
  }
})
