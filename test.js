const Ramda = require("ramda")
const R = require("./rambda")

describe("common cases", () => {

  it("add/adjust",()=>{
    expect(
      R.adjust(R.add(1))(1)([1,2,3])
    ).toEqual([1,3,3])
  })

  it("any",()=>{
    expect(
      R.compose(
        R.any(val=>val<5),
        R.map(R.subtract(Ramda.__,10)),
        R.adjust(R.add(1),0)
      )([0,2,3,4,5,6,7,8,9])
    ).toEqual(true)
  })

  it("any",()=>{
    expect(
      R.compose(
        R.any(val=>val<5),
        R.map(R.subtract(10)),
        R.adjust(R.add(1),0)
      )([0,2,3,4,5,6,7,8,9])
    ).toEqual(true)
  })

  it("map",()=>{
    expect(
      R.compose(
        val => val.reverse(),
        R.map(R.subtract(10)),
        R.adjust(R.add(1),0)
      )([0,2,3,4,5,6,7,8,9])
    ).toEqual([1,2,3,4,5,6,7,8,9])
  })

  it("tail/init", () => {
    expect(
      R.compose(
        R.tail,
        R.init,
        R.flatten
      )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
    ).toEqual([ 2, 3 ])
  })

  it("flatten", () => {
    expect(
      R.flatten([ 1, 2, 3, [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])
    expect(
      R.flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])
    expect(
      R.flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, [ 3 ], 4 ])
  })

})
