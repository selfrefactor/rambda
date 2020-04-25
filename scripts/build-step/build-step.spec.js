import { buildStep } from './build-step.js'

test('happy', async () => {
  const withRambdax = true
  await buildStep(withRambdax)
})
