const R = require("../rambda")

describe("path", () => {
  it("", () => {
    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )({ foo : { bar : { baz : "yes" } } })
      ).toEqual("yes")

    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )(null)
      ).toEqual(undefined)

    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )({ foo : { bar : "baz" } })
      ).toEqual(undefined)
  })
})
