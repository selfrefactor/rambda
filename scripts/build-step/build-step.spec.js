import { buildStep } from './build-step.js'

test('happy', async () => {
  const withRambdax = false
  await buildStep(withRambdax)
})
