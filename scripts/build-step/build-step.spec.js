import { buildStep } from './build-step'

test('happy', async () => {
  const withRambdax = false
  await buildStep({ withRambdax })
})
