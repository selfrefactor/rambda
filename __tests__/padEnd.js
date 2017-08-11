const R = require("../rambda")

test("", ()=>{
  expect(
    R.padEnd(10, 'foo')
  ).toEqual("foo       ")
})