const R = require("../rambda")

test("works with undefined", () => {
  expect(
    R.path("foo.bar.baz",undefined)
  ).toEqual(undefined)
})

test("works with string instead of array", () => {
  expect(
    R.path(
      "foo.bar.baz"
    )({
      foo: {
        bar: {
          baz: "yes"
        }
      }
    })
  ).toEqual("yes")
})

test("", () => {
  expect(
    R.path(
      ["foo", "bar", "baz"]
    )({
      foo: {
        bar: {
          baz: "yes"
        }
      }
    })
  ).toEqual("yes")

  expect(
    R.path(
      ["foo", "bar", "baz"]
    )(null)
  ).toEqual(undefined)

  expect(
    R.path(
      ["foo", "bar", "baz"]
    )({
      foo: {
        bar: "baz"
      }
    })
  ).toEqual(undefined)
})
