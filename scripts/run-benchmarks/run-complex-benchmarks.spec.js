import { ms } from 'string-fn'

import { runAllComplexBenchmarks, runSingleComplexBenchmark } from './run-complex-benchmarks'
import { build } from '../utils'

jest.setTimeout(ms('20 minutes'))

test.skip('all benchmarks', async () => {
  await build()
  await runAllComplexBenchmarks()
})

test('single benchmark', async () => {
  await build()
  await runSingleComplexBenchmark('curry')
})
