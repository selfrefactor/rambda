import { ms } from 'string-fn'

import { build } from '../utils'
import {
  runAllComplexBenchmarks,
  runSingleComplexBenchmark,
} from './run-complex-benchmarks'

jest.setTimeout(ms('20 minutes'))

const RUN_ALL = false

test('all benchmarks', async () => {
  if (!RUN_ALL) return
  await build()
  await runAllComplexBenchmarks()
})

test('single benchmark', async () => {
  if (RUN_ALL) return
  await build()
  await runSingleComplexBenchmark('forEach')
})
