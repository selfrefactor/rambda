import { deletePrefix } from "./deletePrefix"
import { pipe } from "./pipe"

test("happy", () => {
  const result = deletePrefix("https://")("https://loving-ruby.com")
  expect(result).toBe("loving-ruby.com")
  expectTypeOf(result).toEqualTypeOf<string>()
})

test("prefix not present - string returned as is", () => {
  expect(deletePrefix("ftp://")("https://loving-ruby.com")).toBe(
    "https://loving-ruby.com",
  )
})

test("empty prefix - string returned as is", () => {
  expect(deletePrefix("")("abc")).toBe("abc")
})
test("within pipe", () => {
  const result = pipe(
    "https://loving-ruby.com",
    deletePrefix("https://"),
    deletePrefix(""),
  )
  expect(result).toBe("loving-ruby.com")
})
