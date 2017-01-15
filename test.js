const Ramda = require("ramda")
const R = require("./rambda")

describe("common cases", () => {

  it("add/adjust",()=>{
    expect(
      R.adjust(R.add(1))(1)([1,2,3])
    ).toEqual([1,3,3])
  })

  it("any/subtract",()=>{
    expect(
      R.compose(
        R.any(val=>val<5),
        R.map(R.subtract(10)),
        R.adjust(R.add(1),0)
      )([0,2,3,4,5,6,7,8,9])
    ).toBeTruthy()
  })

  it("append",()=>{
    expect(
      R.compose(
        R.flatten,
        R.map(R.append(0))
      )([[1],[2],[3]])
    ).toEqual( [0, 1, 0, 2, 0, 3])
  })

  it("contains",()=>{
    expect(
      R.compose(
        R.contains(2),
        R.flatten,
        R.map(R.append(0))
      )([[1],[2],[3]])
    ).toBeTruthy()
  })

  it("filter",()=>{
    expect(
      R.compose(
        R.flatten,
        R.filter(val=>val>2),
        R.flatten,
      )([[1],[2],[3],4])
    ).toEqual([3,4])
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

  it("flip",()=>{
    expect(
      R.compose(
        R.map(R.flip(R.subtract)(10)),
        R.adjust(R.add(1),0)
      )([0,2,3,4,5,6,7,8,9])
    ).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1])
  })

  it("drop",()=>{
    expect(
      R.compose(
        R.drop(2),
        R.flatten,
        R.filter(val=>val>1),
        R.flatten,
      )([[1],[2],[3],4])
    ).toEqual([4])
  })

  it("dropLast",()=>{
    expect(
      R.compose(
        R.dropLast(2),
        R.flatten,
        R.filter(val=>val>1),
        R.flatten,
      )([[1],[2],[3],4])
    ).toEqual([2])
  })

  it("head",()=>{
    expect(
      R.compose(
        R.head,
        R.flatten,
        R.filter(val=>val>1),
        R.flatten,
      )([[1],[2],[3],4])
    ).toEqual([2])
  })

  it("init/tail", () => {
    expect(
      R.compose(
        R.tail,
        R.init,
        R.flatten
      )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
    ).toEqual([ 2, 3 ])
  })

  it("join",()=>{
    expect(
      R.join(
        "|"
      )(["foo","bar","baz"])
    ).toEqual("foo|bar|baz")
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

  it("last",()=>{
    expect(
      R.compose(
        R.last,
        R.map(R.last)
      )(["foo","bar","baz"])
    ).toEqual("z")
  })

  it("prepend",()=>{
    expect(
      R.compose(
        R.flatten,
        R.map(R.prepend(0))
      )([[1],[2],[3]])
    ).toEqual( [1, 0, 2, 0, 3,0])
  })

  it("range",()=>{
    expect(
      R.range(
        0,
        10
      )
    ).toEqual([0,1,2,3,4,5,6,7,8,9])
  })

  it("split",()=>{
    expect(
      R.split(
        "|"
      )("foo|bar|baz")
    ).toEqual(["foo","bar","baz"])
  })


})
