const R = require("../rambda")

describe("compose", () => {
  it("", () => {
    expect(() => { R.compose(3, [ 1, 2, 3 ]) }).toThrow()
  })
})
