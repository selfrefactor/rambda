import {always} from './always'
import {applySpec} from './applySpec'
import {F} from './F'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

test('f', () => {
  const fn = always(F())

  expect(fn()).toBeFalse()
  expect(fn()).toBeFalse()
})

test('compatibility with applySpec', () => {
  const spec = applySpec({ x: always('foo') });
  expect(spec({})).toEqual({ x: 'foo' });
})
