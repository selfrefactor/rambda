import { binary } from './binary.js'

test('happy', () => {
  const result = binary((x, y, z) => {
    expect(arguments).toHaveLength(2)
    expect(z).toBeUndefined()
    expect(x).toBe(10)
    expect(y).toBe(20)

    return x + y
  })(10, 20, 30)
  expect(result).toBe(30)
})
