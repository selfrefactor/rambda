import { ok, schemaToString } from './ok'

test('ok', () => {
  const result = ok(
    1, 'foo', {}
  )(
    'number', 'string', 'object'
  )
  expect(result).toBe(true)
})

test('when validation fails', () => {
  expect(() => ok(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  )).toThrow()
})

/*
  TODO
  What about
  {a: Function}
*/
test('schema in error message', () => {
  const result = schemaToString({
    _a : [ Number ],
    a  : Number,
    b  : x => x > 2,
    c  : [ 'foo', 'bar' ],
    d  : [ { a : String } ],
    e  : 'boolean',
    f  : Array,
    h  : Object,
  })

  expect(JSON.stringify(result)).toMatchInlineSnapshot('"{\\"_a\\":\\"Array\\",\\"a\\":\\"number\\",\\"b\\":\\"Function\\",\\"c\\":\\"Array\\",\\"d\\":\\"Array\\",\\"e\\":\\"String\\",\\"f\\":\\"array\\",\\"h\\":\\"object\\"}"')
})

test('error contains schema', () => {
  try {
    ok(
      1, 'foo', {}
    )(
      { a : Number }, String, String
    )
    expect(false).toBe(true)
  } catch (e){
    expect(e.message.startsWith('Failed R.ok -')).toBeTruthy()
    expect(e).toBeInstanceOf(Error)
  }
})

test('when not throws with single schema', () => {
  expect(() => ok(
    1, 2, 3
  )('number')).not.toThrow()
})

test('when throws with single schema', () => {
  expect(() => ok(
    1, 2, '3'
  )('number')).toThrow()
})
