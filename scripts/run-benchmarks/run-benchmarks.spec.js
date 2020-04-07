import { runBenchmarks, runSingleBenchmark } from './run-benchmarks.js'
import { ms } from 'string-fn'
jest.setTimeout(ms('4 minutes'))

test('happy', async () => {
  // await runSingleBenchmark('add')
})
