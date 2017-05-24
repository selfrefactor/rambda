const R = require("../rambda")

describe("map", () => {
  it("", () => {
    const double = x => x * 2
    expect(
      R.map(double, [ 1, 2, 3 ])
    ).toEqual([ 2, 4, 6 ])
  })
})
