const R = require("../../rambda")

test("", () => {
  const numArr = [ 0, 1, 2, 3, 4 ]
  it("when returns true", () => {
    const fn = val => val > -1
    expect(R.all(fn)(numArr)).toBeTruthy()
  })

  it("when returns false", () => {
    const fn = val => val > 2
    expect(R.all(fn, numArr)).toBeFalsy()
  })
})
