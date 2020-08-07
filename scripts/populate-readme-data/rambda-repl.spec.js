import { rambdaRepl } from './rambda-repl'

const input = `
const result = await R.composeAsync(
  R.mapAsync(async x => {
    await R.delay(100)
    return x + 1
  }),
  R.filter(x => x > 1)
)([1, 2, 3])
// => [3, 4]
`.trim()

test('happy', () => {
  expect(rambdaRepl(input)).toMatchSnapshot()
})
