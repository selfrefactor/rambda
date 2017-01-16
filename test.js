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

  it("works with Ramda's flip",()=>{
    expect(
      R.compose(
        R.map(Ramda.flip(R.subtract)(10)),
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

  it("replace",()=>{
    expect(
      R.replace(/\s/g)("|")("foo bar baz")
    ).toEqual("foo|bar|baz")
  })

  it("sort",()=>{
    expect(
      R.sort(
        (a,b)=> a>b
      )(["foo","bar","baz"])
    ).toEqual(["bar", "baz", "foo"])

    expect(
      R.sort(
        (a,b)=> a-b
      )([2,3,1])
    ).toEqual([1,2,3])
  })

  it("sortBy",()=>{
    const sortByNameCaseInsensitive = R.sortBy(
      R.compose(
        R.toLower,
        Ramda.prop('name')
      )
    )
    const alice = {
      name: 'ALICE',
      age: 101
    };
    const bob = {
      name: 'Bob',
      age: -10
    };
    const clara = {
      name: 'clara',
      age: 314.159
    };
    const people = [clara, bob, alice];
    expect(
      sortByNameCaseInsensitive(people)
    ).toEqual( [alice, bob, clara])
  })

  it("split",()=>{
    expect(
      R.split(
        "|"
      )("foo|bar|baz")
    ).toEqual(["foo","bar","baz"])
  })

  it("splitEvery",()=>{
    expect(
      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7])
    ).toEqual([[1, 2, 3], [4, 5, 6], [7]])

    expect(
      R.splitEvery(3, 'foobarbaz')
    ).toEqual(["foo","bar","baz"])
  })

  it("take",()=>{
    expect(
      R.take(1, ['foo', 'bar', 'baz'])
    ).toEqual(['foo'])

    expect(
      R.take(3, 'rambda')
    ).toEqual("ram")
  })

  it("takeLast",()=>{
    expect(
      R.takeLast(1, ['foo', 'bar', 'baz'])
    ).toEqual(['baz'])

    expect(
      R.takeLast(10, ['foo', 'bar', 'baz'])
    ).toEqual(['foo', 'bar', 'baz'])

    expect(
      R.takeLast(3, 'rambda')
    ).toEqual("bda")
  })

  it("test",()=>{
    expect(
      R.test(/^x/, 'xyz')
    ).toBeTruthy()

    expect(
      R.test(/^y/, 'xyz')
    ).toBeFalsy()
  })

  it("toLower",()=>{
    expect(
      R.toLower("FOO|BAR|BAZ")
    ).toEqual("foo|bar|baz")
  })

  it("toUpper",()=>{
    expect(
      R.compose(
        R.join(""),
        R.map(R.toUpper),
        R.split(""),
      )("foo|bar|baz")
    ).toEqual("FOO|BAR|BAZ")
  })

  it("type",()=>{
    expect(
      R.type({})
    ).toEqual("Object")

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
      R.type([])
    ).toEqual("Array")

    expect(
      R.type(/\s/g)
    ).toEqual("RegExp")
  })

  it("values",()=>{
    expect(
      R.values({a:1,b:2,c:3})
    ).toEqual([1,2,3])
  })

  it("uniq",()=>{
    expect(
      R.uniq([1,2,3,3,3,1,2,0])
    ).toEqual([1,2,3,0])
  })

  it("update",()=>{
    expect(
      R.update(3)(1)([1,2,3])
    ).toEqual([1,3,3])
  })

})
