import { deleteSuffix } from "./deleteSuffix"
import { pipe } from "./pipe"

test("happy", () => {
  const result = deleteSuffix("/")("https://loving-ruby.com/")
  expect(result).toBe("https://loving-ruby.com")
  expectTypeOf(result).toEqualTypeOf<string>()
})

test("suffix not present - string returned as is", () => {
  expect(deleteSuffix("/not-present")("https://loving-ruby.com/")).toBe(
    "https://loving-ruby.com/",
  )
})

test("empty suffix - string returned as is", () => {
  expect(deleteSuffix("")("abc")).toBe("abc")
})
test("within pipe", () => {
  const result = pipe(
    "https://loving-ruby.com/",
    deleteSuffix("/"),
    deleteSuffix(""),
  )
  expect(result).toBe("https://loving-ruby.com")
})
