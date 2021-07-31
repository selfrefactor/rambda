const fn1 = () => {}
const fn2 = function (){}
function fn3(){}

const listOfVariousTypes = [
  new Boolean(true),
  true,
  new String('foobarbaz'),
  'foo',
  1,
  new Number(1),
  fn1,
  fn2,
  fn3,
  undefined, 
  null,
  NaN,
  /foo/g,
  [1,2,3]
]

const uniqListOfBooleans = limit =>
  Array(limit)
    .fill(null)
    .map(() => [
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.random() > 0.5,
    ])

const uniqListOfNumbers = limit =>
  Array(limit)
    .fill(null)
    .map(() => Number(Math.floor(Math.random() * 1000)))

const uniqListOfString = limit =>
  Array(limit)
    .fill(null)
    .map(() => String(Math.floor(Math.random() * 1000)))

const uniqListOfObjects = limit =>
  Array(limit)
    .fill(null)
    .map(() => ({
      foo: String(Math.floor(Math.random() * 1000)),
      bar: NaN,
      baz: null,
      qux: [true],
    }))

const uniqListOfLists = limit =>
  Array(limit)
    .fill(null)
    .map(() => [NaN, null, String(Math.floor(Math.random() * 1000))])


exports.uniqListOfBooleans = uniqListOfBooleans
exports.uniqListOfNumbers = uniqListOfNumbers
exports.uniqListOfString = uniqListOfString
exports.uniqListOfObjects = uniqListOfObjects
exports.uniqListOfLists = uniqListOfLists
exports.listOfVariousTypes = listOfVariousTypes
