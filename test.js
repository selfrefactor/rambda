const R = require("./rambda")

describe("common cases", () => {
  it("compose", () => {
    expect(
      R.compose(
        R.tail,
        R.init,
        R.flatten
      )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
    ).toEqual([ 2, 3 ])
  })
  it("flatten", () => {
    expect(
      R.flatten([ 1, 2, 3, [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])
    expect(
      R.flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])
    expect(
      R.flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, [ 3 ], 4 ])
  })
})
