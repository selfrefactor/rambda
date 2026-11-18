import { grep } from "./grep"
import { pipe } from "./pipe"

test("happy", () => {
  const logLines = [
    "ERROR: Disk space low",
    "INFO: User logged in",
    "WARNING: High memory usage",
    "ERROR: Network timeout",
    "INFO: File uploaded",
    "INFO: User logged out",
  ]
  const result = pipe(logLines, grep(/ERROR/))
  const expected = ["ERROR: Disk space low", "ERROR: Network timeout"]
  expect(result).toEqual(expected)
  expectTypeOf(result).toEqualTypeOf<string[]>()
})

test("no matches", () => {
  expect(pipe(["a", "b"], grep(/z/))).toEqual([])
})

test("global regexp does not leak lastIndex", () => {
  const filterA = grep(/a/g)
  expect(pipe(["xa", "a", "b"], filterA)).toEqual(["xa", "a"])
  expect(pipe(["a", "za"], filterA)).toEqual(["a", "za"])
})
