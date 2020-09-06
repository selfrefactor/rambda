import { ms } from 'string-fn'
import { runAllBenchmarks, runSingleBenchmark } from './run-benchmarks'

jest.setTimeout(ms('15 minutes'))

const RUN_ALL = false

test('run all', async () => {
  if (!RUN_ALL) return
  await runAllBenchmarks()
})

test('run single', async () => {
  if (RUN_ALL) return
  await runSingleBenchmark('map')
})
