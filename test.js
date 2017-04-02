const Ramda = require("ramda")
const R = require("./rambda")

describe("common cases", () => {
  it("works with Ramda's flip", () => {
    expect(
      R.compose(
        R.map(Ramda.flip(R.subtract)(10)),
        R.adjust(R.add(1), 0)
      )([ 0, 2, 3, 4, 5, 6, 7, 8, 9 ])
    ).toEqual([ -9, -8, -7, -6, -5, -4, -3, -2, -1 ])
  })

  it("add", () => {
    expect(
      R.add(2, 3)
    ).toEqual(5)

    expect(
      R.add(7)(10)
    ).toEqual(17)
  })

  it("adjust", () => {
    expect(
      R.adjust(R.add(10), 1, [ 0, 1, 2 ])
    ).toEqual([ 0, 11, 2 ])

    expect(
      R.adjust(R.add(10))(1)([ 0, 1, 2 ])
    ).toEqual([ 0, 11, 2 ])
  })

  it("any", () => {
    expect(
      R.any(val => val < 0)([ 1, 2 ])
    ).toBeFalsy()

    expect(
      R.any(val => val < 2)([ 1, 2 ])
    ).toBeTruthy()
  })

  it("append", () => {
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

  it("contains", () => {
    expect(R.contains(3)([ 1, 2, 3 ])).toBeTruthy()
    expect(R.contains(4, [ 1, 2, 3 ])).toBeFalsy()
    expect(R.contains([ 42 ], [ [ 42 ] ])).toBeTruthy()
  })

  it("compose", () => {
    expect(() => { R.compose(3, [ 1, 2, 3 ]) }).toThrow()
  })

  it("drop", () => {
    expect(
      R.drop(1, [ "foo", "bar", "baz" ])
    ).toEqual([ "bar", "baz" ])
    expect(R.drop(2)([ "foo", "bar", "baz" ])).toEqual([ "baz" ])
    expect(R.drop(3, [ "foo", "bar", "baz" ])).toEqual([])
    expect(R.drop(4, [ "foo", "bar", "baz" ])).toEqual([])
    expect(R.drop(3, "rambda")).toEqual("bda")
  })

  it("dropLast", () => {
    expect(R.dropLast(1, [ "foo", "bar", "baz" ])).toEqual([ "foo", "bar" ])
    expect(R.dropLast(2)([ "foo", "bar", "baz" ])).toEqual([ "foo" ])
    expect(R.dropLast(3, [ "foo", "bar", "baz" ])).toEqual([])
    expect(R.dropLast(4, [ "foo", "bar", "baz" ])).toEqual([])
    expect(R.dropLast(3, "rambda")).toEqual("ram")
  })

  it("equals", () => {
    expect(
      R.equals([ 1, 2, 3 ], [ 1, 2, 3 ])
    ).toBeTruthy()

    expect(
      R.equals([ 1, 2, 3 ], [ 1, 2 ])
    ).toBeFalsy()

    expect(
      R.equals(1, 1)
    ).toBeTruthy()

    expect(
      R.equals(1, "1")
    ).toBeFalsy()

    expect(
      R.equals({}, {})
    ).toBeTruthy()

    expect(
      R.equals({ a:1, b:2 }, { b:2, a:1 })
    ).toBeTruthy()

    expect(
      R.equals({ a:1, b:2 }, { a:1, b:1 })
    ).toBeFalsy()

    expect(
      R.equals({ a:1, b:false }, { a:1, b:1 })
    ).toBeFalsy()

    expect(
      R.equals({ a:1, b:2 }, { b:2, a:1, c:3 })
    ).toBeFalsy()

    expect(
      R.equals({ x:{ a:1, b:2 } }, { x:{ b:2, a:1, c:3 } })
    ).toBeFalsy()

    expect(
      R.equals({ a:1, b:2 }, { b:3, a:1 })
    ).toBeFalsy()

    expect(
      R.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
    ).toBeTruthy()

    expect(
      R.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:2 } } })
    ).toBeFalsy()

    expect(
      R.equals({ a:{} }, { a:{} })
    ).toBeTruthy()

    expect(
      R.equals("", "")
    ).toBeTruthy()

    expect(
      R.equals("foo", "foo")
    ).toBeTruthy()

    expect(
      R.equals("foo", "bar")
    ).toBeFalsy()

    expect(
      R.equals(0, false)
    ).toBeFalsy()

    expect(
      R.equals(/\s/g, null)
    ).toBeFalsy()

    expect(
      R.equals(null, null)
    ).toBeTruthy()

    expect(
      R.equals(false)(null)
    ).toBeFalsy()
  })

  it("filter", () => {
    const isEven = n => n % 2 === 0

    expect(
      R.filter(
        isEven,
        [ 1, 2, 3, 4 ]
      )
    ).toEqual([ 2, 4 ])
  })

  it("find", () => {
    expect(
        R.find(R.propEq("a", 2))([ { a: 1 }, { a: 2 }, { a: 3 } ])
      ).toEqual({ a: 2 })

    expect(
        R.find(R.propEq("a", 4))([ { a: 1 }, { a: 2 }, { a: 3 } ])
      ).toEqual(undefined)
  })

  it("findIndex", () => {
    expect(
        R.findIndex(R.propEq("a", 2))([ { a: 1 }, { a: 2 }, { a: 3 } ])
      ).toEqual(1)

    expect(
        R.findIndex(R.propEq("a", 1))([ { a: 1 }, { a: 2 }, { a: 3 } ])
      ).toEqual(0)

    expect(
        R.findIndex(R.propEq("a", 4))([ { a: 1 }, { a: 2 }, { a: 3 } ])
      ).toEqual(-1)
  })

  it("flatten", () => {
    expect(
      R.flatten([ 1, 2, 3, [ [ [ [ [ 4 ] ] ] ] ] ])
    ).toEqual([ 1, 2, 3, 4 ])

    expect(
      R.flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])

    expect(
      R.flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])
    ).toEqual([ 1, 2, 3, 4 ])

    expect(
      R.flatten(
        [ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ]
      )
    ).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ])
  })

  it("head", () => {
    expect(
      R.head([ "fi", "fo", "fum" ])
    ).toEqual("fi")
    expect(R.head([])).toEqual(undefined)
    expect(R.head("foo")).toEqual("f")
    expect(R.head("")).toEqual("")
  })

  it("indexOf", () => {
    expect(
      R.indexOf(3, [ 1, 2, 3, 4 ])
    ).toEqual(2)

    expect(
      R.indexOf(10)([ 1, 2, 3, 4 ])
    ).toEqual(-1)
  })

  it("init/tail", () => {
    expect(
      R.compose(
        R.tail,
        R.init,
        R.flatten
      )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
    ).toEqual([ 2, 3 ])

    expect(R.init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
    expect(R.init([ 1, 2 ])).toEqual([ 1 ])
    expect(R.init([ 1 ])).toEqual([])
    expect(R.init([])).toEqual([])

    expect(
      R.init([])
    ).toEqual([])

    expect(
      R.init([ 1 ])
    ).toEqual([])

    expect(
      R.init("foo")
    ).toEqual("fo")

    expect(
      R.init("f")
    ).toEqual("")

    expect(
      R.init("")
    ).toEqual("")
  })

  it("join", () => {
    expect(
      R.join(
        "|"
      )([ "foo", "bar", "baz" ])
    ).toEqual("foo|bar|baz")

    expect(
      R.join(
        "|"
      )([ 1, 2, 3 ])
    ).toEqual("1|2|3")

    const spacer = R.join(" ")
    expect(spacer([ "a", 2, 3.4 ])).toEqual("a 2 3.4")
  })

  it("last", () => {
    expect(
      R.compose(
        R.last,
        R.map(R.last)
      )([ "foo", "bar", "baz" ])
    ).toEqual("z")

    expect(R.last([ "foo", "bar", "baz" ])).toEqual("baz")
    expect(R.last([])).toEqual(undefined)
    expect(R.last("abc")).toEqual("c")
    expect(R.last("")).toEqual("")
  })

  it("length", () => {
    expect(
      R.length("foo")
    ).toEqual(3)
    expect(R.length([ 1, 2, 3 ])).toEqual(3)
    expect(R.length([])).toEqual(0)
  })

  it("map", () => {
    const double = x => x * 2
    expect(
      R.map(double, [ 1, 2, 3 ])
    ).toEqual([ 2, 4, 6 ])
  })

  it("match", () => {
    expect(
      R.match(
        /a./g
      )("foo bar baz")
    ).toEqual([ "ar", "az" ])

    expect(
      R.match(
        /a./g
      )("foo")
    ).toEqual([])

    expect(
      () => { R.match(/a./g, null) }
    ).toThrow()
  })

  it("merge", () => {
    expect(
      R.merge(
        { foo:"bar", bar:"bar" }
      )({ bar:"baz" })
    ).toEqual({ foo:"bar", bar:"baz" })
  })

  it("omit", () => {
    expect(
      R.omit(
        [ "a", "c" ]
      )({ a:"foo", b:"bar", c:"baz" })
    ).toEqual({ b:"bar" })
  })

  it("path", () => {
    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )({ foo:{ bar:{ baz:"yes" } } })
      ).toEqual("yes")

    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )(null)
      ).toEqual(undefined)

    expect(
        R.path(
          [ "foo", "bar", "baz" ]
        )({ foo:{ bar:"baz" } })
      ).toEqual(undefined)
  })

  it("pick", () => {
    expect(
        R.pick(
          [ "a", "c" ]
        )({ a:"foo", b:"bar", c:"baz" })
      ).toEqual({ a:"foo", c:"baz" })

    expect(
        R.pick(
          [ "a", "d", "e", "f" ]
        )({ a:"foo", b:"bar", c:"baz" })
      ).toEqual({ a:"foo" })
  })

  it("prepend", () => {
    expect(
      R.prepend("yes", [ "foo", "bar", "baz" ])
    ).toEqual([ "yes", "foo", "bar", "baz" ])

    expect(
      R.prepend("foo")([ ])
    ).toEqual(["foo"])
  })

  it("prop", () => {
    expect(
      R.prop(
        "foo"
      )({ foo:"baz" })
    ).toEqual("baz")

    expect(
      R.prop(
        "bar"
      )({ foo:"baz" })
    ).toEqual(undefined)
  })

  it("propEq", () => {
    expect(
      R.propEq(
        "foo",
        "bar"
      )({ foo:"bar" })
    ).toBeTruthy()

    expect(
      R.propEq(
        "foo",
        "bar"
      )({ foo:"baz" })
    ).toBeFalsy()

    expect(
      R.propEq("foo")("bar")({ foo:"baz" })
    ).toBeFalsy()
  })

  it("range", () => {
    expect(
      R.range(
        0,
        10
      )
    ).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
  })

  it("repeat", () => {
    expect(
      R.repeat("")(3)
    ).toEqual([ "", "", "" ])
    expect(
      R.repeat("foo", 3)
    ).toEqual([ "foo", "foo", "foo" ])

    const obj = {}
    const arr = R.repeat(obj, 3)

    expect(
      arr
    ).toEqual([ {}, {}, {} ])

    expect(
      arr[ 0 ] === arr[ 1 ]
    ).toBeTruthy()
  })

  it("replace", () => {
    expect(
      R.replace("foo", "yes", "foo bar baz")
    ).toEqual("yes bar baz")

    expect(
      R.replace(/\s/g)("|")("foo bar baz")
    ).toEqual("foo|bar|baz")
  })

  it("sort", () => {
    expect(
      R.sort(
        (a, b) => a > b
      )([ "foo", "bar", "baz" ])
    ).toEqual([ "bar", "baz", "foo" ])

    expect(
      R.sort(
        (a, b) => a - b
      )([ 2, 3, 1 ])
    ).toEqual([ 1, 2, 3 ])
  })

  it("sortBy", () => {
    const sortByNameCaseInsensitive = R.sortBy(
      R.compose(
        R.toLower,
        Ramda.prop("name")
      )
    )
    const alice = {
      name: "ALICE",
      age: 101,
    }
    const bob = {
      name: "Bob",
      age: -10,
    }
    const clara = {
      name: "clara",
      age: 314.159,
    }
    const people = [ clara, bob, alice ]
    expect(
      sortByNameCaseInsensitive(people)
    ).toEqual([ alice, bob, clara ])

    expect(
      R.sortBy(val => val.a, [ { a:2 }, { a:1 }, { a:0 } ])
    ).toEqual([ { a:0 }, { a:1 }, { a:2 } ])

    expect(
      R.sortBy(val => val.a, [ { a:1 }, { a:1 }, { a:1 } ])
    ).toEqual([ { a:1 }, { a:1 }, { a:1 } ])

    expect(
      R.sortBy(val => val.a, [ { a:3 }, { a:2 }, { a:1 } ])
    ).toEqual([ { a:1 }, { a:2 }, { a:3 } ])

    expect(
      R.sortBy(val => val.a, [ { a:1 }, { a:2 }, { a:3 } ])
    ).toEqual([ { a:1 }, { a:2 }, { a:3 } ])
  })

  it("split", () => {
    expect(
      R.split(
        "|"
      )("foo|bar|baz")
    ).toEqual([ "foo", "bar", "baz" ])

    expect(
      R.split(".", "a.b.c.xyz.d")
    ).toEqual([ "a", "b", "c", "xyz", "d" ])
  })

  it("splitEvery", () => {
    expect(
      R.splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])
    ).toEqual([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ])

    expect(
      R.splitEvery(3)("foobarbaz")
    ).toEqual([ "foo", "bar", "baz" ])

    expect(
      R.splitEvery(0)("foo")
    ).toEqual([ "f", "o", "o" ])
  })

  it("subtract", () => {
    expect(
      R.subtract(2, 1)
    ).toEqual(1)
    expect(
      R.subtract(2)(1)
    ).toEqual(1)
  })

  it("tail", () => {
    expect(R.tail([ 1, 2, 3 ])).toEqual([ 2, 3 ])
    expect(R.tail([ 1, 2 ])).toEqual([ 2 ])
    expect(R.tail([ 1 ])).toEqual([])
    expect(R.tail([])).toEqual([])

    expect(R.tail("abc")).toEqual("bc")
    expect(R.tail("ab")).toEqual("b")
    expect(R.tail("a")).toEqual("")
    expect(R.tail("")).toEqual("")
  })

  it("take", () => {
    const arr = [ "foo", "bar", "baz" ]
    expect(
      R.take(1, arr)
    ).toEqual([ "foo" ])

    expect(
      arr
    ).toEqual([ "foo", "bar", "baz" ])

    expect(R.take(2)([ "foo", "bar", "baz" ])).toEqual([ "foo", "bar" ])
    expect(R.take(3, [ "foo", "bar", "baz" ])).toEqual([ "foo", "bar", "baz" ])
    expect(R.take(4, [ "foo", "bar", "baz" ])).toEqual([ "foo", "bar", "baz" ])
    expect(
      R.take(3)("rambda")
    ).toEqual("ram")
  })

  it("takeLast", () => {

    expect(
      R.takeLast(1, [ "foo", "bar", "baz" ])
    ).toEqual([ "baz" ])

    expect(
      R.takeLast(2)([ "foo", "bar", "baz" ])
    ).toEqual([ "bar", "baz" ])

    expect(
      R.takeLast(3, [ "foo", "bar", "baz" ])
    ).toEqual([ "foo", "bar", "baz" ])

    expect(
      R.takeLast(4, [ "foo", "bar", "baz" ])
    ).toEqual([ "foo", "bar", "baz" ])

    expect(
      R.takeLast(10, [ "foo", "bar", "baz" ])
    ).toEqual([ "foo", "bar", "baz" ])

    expect(
      R.takeLast(3, "rambda")
    ).toEqual("bda")

    expect(
      R.takeLast(7, "rambda")
    ).toEqual("rambda")
  })

  it("test", () => {
    expect(
      R.test(/^x/, "xyz")
    ).toBeTruthy()

    expect(
      R.test(/^y/)("xyz")
    ).toBeFalsy()
  })

  it("toLower", () => {
    expect(
      R.toLower("FOO|BAR|BAZ")
    ).toEqual("foo|bar|baz")
  })

  it("toUpper", () => {
    expect(
      R.compose(
        R.join(""),
        R.map(R.toUpper),
        R.split(""),
      )("foo|bar|baz")
    ).toEqual("FOO|BAR|BAZ")
  })

  it("trim", () => {
    expect(
      R.trim(" foo ")
    ).toEqual("foo")
  })

  it("type", () => {
    const fn1 = () =>{}
    const fn2 = function(){}
    function fn3(){}
    [
      ()=>{},
      fn1,
      fn2,
      fn3
    ].map(val=>{
      expect(
        R.type(val)
      ).toEqual("Function")
    })

    async function fn4(){
      const a = await R.add(1,2)
      return a
    }

    [
      async ()=>{},
      fn4,
    ].map(val=>{
      expect(
        R.type(val)
      ).toEqual("Async")
    })

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

    expect(
      R.type(undefined)
    ).toEqual("Undefined")
  })

  it("uniq", () => {
    expect(
      R.uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])
    ).toEqual([ 1, 2, 3, 0 ])
    expect(R.uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
    expect([ 1, "1" ]).toEqual([ 1, "1" ])
    expect(R.uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
  })

  it("update", () => {
    expect(
      R.update(1)(0)([ 1, 2, 3 ])
    ).toEqual([ 1, 0, 3 ])
    expect(R.update(1, 11, [ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })

  it("values", () => {
    expect(
      R.values({ a:1, b:2, c:3 })
    ).toEqual([ 1, 2, 3 ])
  })

  it("example", () => {
    const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"

    expect(
      R.compose(
          R.join("|"),
          R.append("foo"),
          R.takeLast(4),
          R.map(R.toLower),
          R.filter(val => val.length > 4),
          R.split("/")
        )(url)
    ).toEqual("reference|global_objects|array|slice|foo")
  })
})
