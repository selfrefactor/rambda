import { buildStep } from './build-step.js'

test('happy', async () => {
  const withRambdax = true
  console.log(2)
  await buildStep(withRambdax)
})
