import { tally } from "./tally"

test("happy", () => {
  const result = tally(["🍎", "🍌", "🍎", "🍑", "🍌", "🍎"])
  const expected = { "🍎": 3, "🍌": 2, "🍑": 1 }
  expect(result).toEqual(expected)
  expectTypeOf(result).toEqualTypeOf<Record<string, number>>()
})

test("empty list", () => {
  expect(tally([])).toEqual({})
})

test("numbers and their string forms share the same key", () => {
  expect(tally([1, 2, 1, "1"])).toEqual({ 1: 3, 2: 1 })
})
