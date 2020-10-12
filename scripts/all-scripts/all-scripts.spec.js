import { defaultTo } from 'rambdax'
import { ms } from 'string-fn'

import { buildStep } from '../build-step/build-step'
import { populateDocsData } from '../populate-docs-data/populate-docs-data'
import { populateReadmeData } from '../populate-readme-data/populate-readme-data'
import { benchmarkSummary } from '../read-benchmarks/benchmark-summary'
import {
  runAllBenchmarks,
  runSingleBenchmark,
} from '../run-benchmarks/run-benchmarks'
import { runRamdaSpecs } from '../run-ramda-specs/run-ramda-specs'
import { runSingleSpec } from '../run-ramda-specs/src/run-specs'
import { build } from '../utils'

jest.setTimeout(ms('30 minutes'))

test('run many scripts and generate readme', async () => {
  // Unless you are developing for Ramdax, leave that `false`
  const withRambdax = defaultTo(false, process.env.WITH_RAMBDAX === 'ON')

  /*
    If the change is regarding Typescript definitions
    or edit of method's examples or explanation
    then you should change `files/index.d.ts`.
  */

  await populateDocsData({ withRambdax })

  // ============================================
  // ============================================

  /*
    In case that you need to update a single benchmark:
  */

  // await runSingleBenchmark('foo')

  // ============================================
  // ============================================

  /*
    In the rare case, where you want to run all benchmarks:
    This step is very slow that is why the Jest timeout is set to 30 minutes.
    Note that benchmarks will run in parallel, so I hope you have a fast machine.
  */

  // await runAllBenchmarks()

  // ============================================
  // ============================================

  /*
    Important and long step, when we are adding new method.
    This step will rerun all Rambda methods in Ramda test environment.

    Make sure to declare any expected failures
    in '/scripts/run-ramda-specs/all-differences.json' file.

    On the very first step, `withInitialStep` should be `true`.

    Benchmarks runs against the bundle file, which explains `await build()` line.
  */
  // await build()
  // await runRamdaSpecs({ withInitialStep : true })

  // ============================================
  // ============================================

  /*
      If benchmarks are changed, so should be their summary.
  */

  // await benchmarkSummary()

  // ============================================
  // ============================================

  /*
  This step is to run Ramda tests on a single Rambda method
  */

  // await runSingleSpec('foo')

  // ============================================
  // ============================================

  /*
  In order to build the final README.md file
  */

  await populateReadmeData({ withRambdax })

  // ============================================
  // ============================================

  /*
  In order to prepare for `yarn build`
  */

  await buildStep({ withRambdax })
})
