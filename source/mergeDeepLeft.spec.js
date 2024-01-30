import { mergeDeepLeft } from './mergeDeepLeft'
import { mergeDeepLeft as mergeDeepLeftRamda } from 'ramda'

it('takes two objects, recursively merges their own properties and returns a new object', function () {
  var a = {w: 1, x: 2, y: {z: 3}}
  var b = {a: 4, b: 5, c: {d: 6}}
  expect(mergeDeepLeft(a, b)).toEqual({w: 1, x: 2, y: {z: 3}, a: 4, b: 5, c: {d: 6}})
})

it('overrides properties in the second object with properties in the first object', function () {
  var a = {a: {b: 1, c: 2}, y: 0}
  var b = {a: {b: 3, d: 4}, z: 0}
  expect(mergeDeepLeft(a, b)).toEqual({a: {b: 1, c: 2, d: 4}, y: 0, z: 0})
})

it('is not destructive', function () {
  var a = {w: 1, x: {y: 2}}
  var res = mergeDeepLeft(a, {x: {y: 3}})
  expect(a).not.toBe(res)
  expect(a.x).not.toBe(res.x)
  expect(res).toEqual({w: 1, x: {y: 2}})
})

it('reports only own properties', function () {
  var a = {w: 1, x: {y: 2}}
  function Cla() {}
  Cla.prototype.y = 5
  expect(mergeDeepLeft({x: new Cla()}, a)).toEqual({w: 1, x: {y: 2}})
  expect(mergeDeepLeft(a, {x: new Cla()})).toEqual({w: 1, x: {y: 2}})
})
