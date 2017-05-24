const R = require("../rambda")

describe("add", () => {
  it("without curring", () => {
    expect(
      R.add(2, 3)
    ).toEqual(5)
  })

  it("with curring", () => {
    expect(
      R.add(7)(10)
    ).toEqual(17)
  })
})
