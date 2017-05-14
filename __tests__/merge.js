const R = require("../")

describe("merge",()=>{
  it("", () => {
    expect(
      R.merge(
        { foo:"bar", bar:"bar" }
      )({ bar:"baz" })
    ).toEqual({ foo:"bar", bar:"baz" })
  })
})
