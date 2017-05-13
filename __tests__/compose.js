const R = require("../")

describe("compose",()=>{
  expect(() => { R.compose(3, [ 1, 2, 3 ]) }).toThrow()
})
