const R = require("../../rambda")

test("", () => {
  expect(
    R.reverse([ 1, 2, 3 ])
  ).toEqual([ 3, 2, 1 ])
})
