const R = require("../")

describe("append",()=>{
    expect(
      R.compose(
        R.flatten,
        R.map(R.append(0))
      )([ [ 1 ], [ 2 ], [ 3 ] ])
    ).toEqual([ 1, 0, 2, 0, 3, 0 ])

    expect(
      R.append("tests", [ "write", "more" ])
    ).toEqual([ "write", "more", "tests" ])

    expect(
      R.append("tests", [])
    ).toEqual([ "tests" ])

    expect(
      R.append([ "tests" ], [ "write", "more" ])
    ).toEqual([ "write", "more", [ "tests" ] ])
})
