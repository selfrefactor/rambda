const R = require("../")

describe("toLower",()=>{
  it("", () => {
    expect(
      R.toLower("FOO|BAR|BAZ")
    ).toEqual("foo|bar|baz")
  })
})
