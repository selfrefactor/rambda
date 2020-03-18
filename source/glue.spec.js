import { glue } from './glue'

test('empty string as a glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '')

  const expectedResult = 'foobarbaz'

  expect(result).toBe(expectedResult)
})

test('case 0', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = false
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 1', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = true
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } --env=node ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 2', () => {
  const first = '--runInBand'
  const result = glue(`
    zero
    ${ first }
    last
  `)
  const expectedResult = `zero ${ first } last`

  expect(result).toBe(expectedResult)
})

test('case 3', () => {
  const result = glue(`
    foo
    bar
    baz
  `)

  const expectedResult = 'foo bar baz'

  expect(result).toBe(expectedResult)
})

test('with glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '==')

  const expectedResult = 'foo==bar==baz'

  expect(result).toBe(expectedResult)
})
