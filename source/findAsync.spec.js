import {findAsync} from './findAsync'
import {propEq} from './propEq'

const list = [{a: 1}, {a: 2}, {a: 3}]

test('happy', async () => {
  const fn = async (x, i) => {
    expect(typeof i).toBe('number')
    return propEq('a', 2, x)
  }
  expect(await findAsync(fn, list)).toEqual({a: 2})
  expect(await findAsync(fn)(list)).toEqual({a: 2})
  expect(await findAsync(fn)([])).toEqual(undefined)
})

test('with error', async () => {
  const fn = async (x, i) => {
    return x.a.b.c === 1
  }

  try {
    await findAsync(fn, list)
  } catch (error) {
    expect(error.message).toBe(
      `Cannot read properties of undefined (reading 'c')`
    )
  }
})
