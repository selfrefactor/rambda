import { runAllComplexBenchmarks } from './run-complex-benchmarks'
import { ms } from 'string-fn'

jest.setTimeout(ms('20 minutes'))

test('happy', async () => {
  await runAllComplexBenchmarks()
})
