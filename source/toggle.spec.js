import { toggle } from './toggle'

test('1', () => {
  const input = 'foo'
  const list = [ 'foo', 'bar' ]

  const result = toggle(list, input)
  const expectedResult = 'bar'

  expect(result).toEqual(expectedResult)
})

test('2', () => {
  const input = 'bar'
  const list = [ 'foo', 'bar' ]

  const result = toggle(list, input)
  const expectedResult = 'foo'

  expect(result).toEqual(expectedResult)
})

test('wrong list input', () => {
  expect(() => toggle(null, 2)).toThrow()
  expect(() => toggle(2, null)).not.toThrow()
})

test('rambda test 1', () => {
  expect(toggle([ 'on', 'off' ], 'on')).toEqual('off')
  expect(toggle([ 'active', 'inactive' ], 'inactive')).toEqual('active')
  expect(toggle([ 10, 100 ], 10)).toEqual(100)
})

test('ramda test 2', () => {
  expect(toggle([ 'on', 'off' ], 'other')).toEqual('other')
  expect(toggle([ 'on' ], 'other')).toEqual('other')
})

test('ramda test 3', () => {
  expect(toggle([ 'on', 'off', 'neither' ], 'on')).toEqual('off')
  expect(toggle([ 'on', 'off', 'neither' ], 'off')).toEqual('on')
  expect(toggle([ 'on', 'off', 'neither' ], 'neither')).toEqual('neither')

  expect(toggle([ 'active', 'inactive', 'neither' ], 'inactive')).toEqual('active')
  expect(toggle([ 'active', 'inactive', 'neither' ], 'active')).toEqual('inactive')
  expect(toggle([ 'active', 'inactive', 'neither' ], 'neither')).toEqual('neither')

  expect(toggle([ 10, 100, 50 ], 10)).toEqual(100)
  expect(toggle([ 10, 100, 50 ], 100)).toEqual(10)
  expect(toggle([ 10, 100, 50 ], 50)).toEqual(50)
})
