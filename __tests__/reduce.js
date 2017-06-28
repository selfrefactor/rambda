const R = require("../rambda")

describe("reduce", () => {
  it("with compose", () => {
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
  
  it("", () => {
    const result = R.reduce(
      (acc,val) =>{
        return acc + val
      }
    )(1)([1,2,3])
    expect(
      result
    ).toEqual(7)
  })
})