const R = require("../rambda")

describe.only("addIndex", () => {
  it("should add incrementing index to functors first arity method ", () => {
    expect(
      R.addIndex(R.map)((val, index) => `${val} - ${index}`, ["A", "B", "C"])
    ).toEqual(["A - 0", "B - 1", "C - 2"])
  })
})
