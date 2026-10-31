import { lines } from "./lines"

test("happy", () => {
  const result = lines("Hello\nWorld\nRuby")
  const expected = ["Hello", "World", "Ruby"]
  expect(result).toEqual(expected)
  expectTypeOf(result).toEqualTypeOf<string[]>()
})

test("windows line separators", () => {
  expect(lines("Hello\r\nWorld\r\nRuby")).toEqual(["Hello", "World", "Ruby"])
})

test("edge cases", () => {
  expect(lines("")).toEqual([])
  expect(lines("\n")).toEqual([""])
  expect(lines("a\n\nb")).toEqual(["a", "", "b"])
  expect(lines("Hello\nWorld\n")).toEqual(["Hello", "World"])
})
