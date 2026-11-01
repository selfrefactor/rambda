import { invert } from "./invert"

test("happy", () => {
  const result = invert({ ok: 200, not_found: 404 })
  const expected = { 200: "ok", 404: "not_found" }
  expect(result).toEqual(expected)
  expectTypeOf(result).toEqualTypeOf<Record<string, "ok" | "not_found">>()
})

test("duplicate values - last one wins", () => {
  const result = invert({ a: 1, b: 1 })
  expect(result).toEqual({ 1: "b" })
})
