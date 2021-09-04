const fn1 = () => {}
const fn2 = function () {}
function fn3() {}

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
  [1, 2, 3],
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
const rangeOfNumbers = limit =>
  Array(limit)
    .fill(null)
    .map((_, i) => i)

const uniqListOfStrings = limit =>
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
exports.uniqListOfStrings = uniqListOfStrings
exports.uniqListOfObjects = uniqListOfObjects
exports.uniqListOfLists = uniqListOfLists
exports.listOfVariousTypes = listOfVariousTypes
exports.rangeOfNumbers = rangeOfNumbers

function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}

const setInstance = new Set([1,2,3,4,1])
const weakSetInstance = new WeakSet()
const weakMapInstance = new WeakMap()
const mapInstance = new Map()

const target = {
  message1: "hello",
  message2: "everyone"
};

const handler = {};

const proxyInstance = new Proxy(target, handler)
weakSetInstance.add({a:1})
weakMapInstance.set({a:1}, 'bar')
mapInstance.set('foo', 'bar')

exports.variousTypes = [
  -0,
  -Infinity,
  BigInt(9007199254740991),
  Date.now(),
  Infinity,
  Math.E,
  Symbol('foo'),
  generatorFn,
  mapInstance,
  new ArrayBuffer(8),
  new DataView(new ArrayBuffer(2)),
  new Error('bar'),
  new Int16Array(2),
  setInstance,
  proxyInstance,
  weakMapInstance,
  weakSetInstance,
]

exports.weakMapInstance = weakMapInstance
exports.mapInstance = mapInstance
