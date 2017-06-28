const R = require("../rambda")

describe.only("reduce", () => {
  it("", () => {
    const convertToString = (acc, value) => {
      return acc + value
    }
    expect(
      R.compose(
        R.reduce(convertToString, ''),
        R.map(x => x + 1)
      )([1, 2, 3])
    ).toEqual('234')
  })
})