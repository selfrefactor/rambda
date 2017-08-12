const R = require("../../rambda")


test("", () => {
  const a = R.push(3,[1,2])
  const b = R.push(3)([1,2])
  const expectedResult = [1,2,3]
  expect(
    a
  ).toEqual(expectedResult)
  expect(
    b
  ).toEqual(expectedResult)
})
