import { readFile } from 'fs-extra'
import { resolve } from 'path'
import { template } from 'rambdax'
import * as Ramda from 'ramda'

import * as Rambda from '../../rambda'
import { benchmarkTime } from '../run-benchmarks/time.json'

function getMissingMethods(){
  const missingMethodsTemplate = `
- More generic methods

\`Ramda\` has an overwhelming list of methods, as one could get lost putting all these methods in one's head. \`Rambda\` has smaller method counts and that could be seen as advantage.

<details>
<summary>
  Click to see the full list of Ramda methods not implemented in Rambda 
</summary>

{{missingMethods}}
</details>
  `

  const missingMethods = Object.keys(Ramda)
    .map(ramdaMethod => {
      if (Rambda[ ramdaMethod ] !== undefined) return false

      return `- ${ ramdaMethod }\n`
    })
    .filter(Boolean)
    .join('')

  return template(missingMethodsTemplate, { missingMethods })
}

const templateIntro = `
{{intro}}
{{missingMethods}}
{{introEnd}}

## Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with \`Ramda\` and \`Rambda\`(i.e. no \`Lodash\`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The date of running the benchmarks is *{{benchmarkTime}}*

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
{{summary}}

</details>

## Used by

{{usedBy}}
`

async function getIntroContent(withRambdax){
  const filePath = withRambdax ?
    `${ __dirname }/assets/INTRO_RAMBDAX.md` :
    `${ __dirname }/assets/INTRO.md`

  return readFile(filePath)
}

export async function getIntro(withRambdax){
  const introContent = await getIntroContent(withRambdax)
  const introEndContent = await readFile(`${ __dirname }/assets/INTRO_END.md`)
  const usedByContent = await readFile(`${ __dirname }/assets/USED_BY.md`)
  const summaryContent = await readFile(resolve(__dirname, '../read-benchmarks/summary.txt'))

  return template(templateIntro, {
    introEnd       : introEndContent.toString(),
    missingMethods : getMissingMethods(),
    intro          : introContent.toString(),
    summary        : summaryContent.toString(),
    usedBy         : usedByContent.toString(),
    benchmarkTime,
  })
}
