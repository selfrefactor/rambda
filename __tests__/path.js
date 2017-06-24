const R = require("../rambda")

describe("path", () => {
  it("works with string instead of array", () => {
    expect(
        R.path(
          "foo.bar.baz"
        )({ foo : { bar : { baz : "yes" } } })
      ).toEqual("yes")
  })    
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
