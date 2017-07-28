const R = require("../rambda")

describe("type", () => {
  it("returns basic types", () => {
     expect(
      R.type(1)
    ).toEqual("Number")

    expect(
      R.type(false)
    ).toEqual("Boolean")

    expect(
      R.type("foo")
    ).toEqual("String")

    expect(
      R.type(null)
    ).toEqual("Null")

    expect(
      R.type(undefined)
    ).toEqual("Undefined")
  })

  it("returns Function type", () => {
    const fn1 = () => {}
    const fn2 = function () {}
    function fn3 () {}
    [
      () => {},
      fn1,
      fn2,
      fn3,
    ].map(val => {
      expect(
        R.type(val)
      ).toEqual("Function")
    })
  })

  it("returns Async type", () => {
    async function fn4 () {
      const a = await R.add(1, 2)

      return a
    }

    [
      async () => {},
      fn4,
    ].map(val => {
      expect(
        R.type(val)
      ).toEqual("Async")
    })
  })

  it("return Promise type", () => {
    const delay = ms => new Promise(resolve=>{
      setTimeout(function () {
        resolve(ms+110)
      }, ms);
    })
    
    expect(
      R.type(delay(10))
    ).toEqual("Promise")
  })

  it("return Object type", () => {
    expect(
      R.type({})
    ).toEqual("Object")
  })

  it("return Array type", () => {
     expect(
      R.type([])
    ).toEqual("Array")
  })

  it("returns Regexp type", () => {
    expect(
      R.type(/\s/g)
    ).toEqual("RegExp")
  })
  
  it("returns custom Class type", () => {
    class Test {}
    const testObj = new Test()
    
    expect(
      R.type(testObj)
    ).toEqual("Test")
  })
})
