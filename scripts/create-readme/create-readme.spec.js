import { ms } from 'string-fn'
jest.setTimeout(ms('30 minutes'))

test('run many scripts and generate readme', async () => {
  // New methods should change `files/index.d.ts`
  // therefore it is required this file to be parsed
  // Skip if your change doesn't include the above file
  // ============================================
  // await populateDocsData()
  // In most cases, you need to run a single benchmark
  // ============================================
  // await runSingleBenchmark('foo')
  // This step is very slow that is why the Jest timeout is set to 30 minutes
  // Note that benchmarks will run in parallel, so I hope you have a fast machine
  // ============================================
  // await runAllBenchmarks()
  // If benchmarks are changed, so should be their summary
  // ============================================
  // await readBenchmarks()
  // Important and long step, when we are adding new method
  // This step will rerun all Rambda methods in Ramda test environment
  // Make sure to declare any expected failures
  // in '/scripts/run-ramda-specs/allDifferences.json' file
  // ============================================
  // await runRamdaSpec()
  // This step is to run Ramda tests on a single Rambda method
  // ============================================
  // await runSingleRamdaSpec('foo')
  // In order to build the final README.md file
  // you need to run the next two steps
  // ============================================
  // await mergeData()
  // await generateReadme()
})
