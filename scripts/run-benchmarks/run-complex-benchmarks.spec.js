import { ms } from 'string-fn'

import { runAllComplexBenchmarks, runSingleComplexBenchmark } from './run-complex-benchmarks'

jest.setTimeout(ms('20 minutes'))

test.skip('all benchmarks', async () => {
  await runAllComplexBenchmarks()
})

test('single benchmark', async () => {
  await runSingleComplexBenchmark('curry')
})
