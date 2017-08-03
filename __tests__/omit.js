const R = require("../rambda")

test("R.omit with string as condition", () => {
  const obj = {
    a:1,
    b:2,
    c:3
  }
  const result = R.omit('a, c', obj)
  const resultCurry = R.omit('a,c')(obj)
  const expectedResult = {
    b: 2
  }
  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

describe("omit", () => {
  it("", () => {
    expect(
      R.omit(
        [ "a", "c" ]
      )({
        a : "foo",
        b : "bar",
        c : "baz",
      })
    ).toEqual({ b : "bar" })
  })
})
