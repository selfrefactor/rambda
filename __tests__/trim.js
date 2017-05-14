const R = require("../")

describe("trim",()=>{
  it("", () => {
    expect(
      R.trim(" foo ")
    ).toEqual("foo")
  })
})
