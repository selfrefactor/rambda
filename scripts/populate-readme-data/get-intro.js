import { existsSync } from 'fs'
import { readFile, readJson } from 'fs-extra'
import { log } from 'helpers-fn'
import { resolve } from 'path'
import { template } from 'rambdax'
import * as Ramda from 'ramda'

import { devDependencies } from '../../package'
import { getRambdaMethods } from '../utils'

function getInstallInfo(withRambdax){
  const installInfoTemplate = `## Install

- **yarn add {{lib}}**

- For UMD usage either use \`./dist/{{lib}}.umd.js\` or the following CDN link:

\`\`\`
https://unpkg.com/{{lib}}@CURRENT_VERSION/dist/{{lib}}.umd.js
\`\`\`

- with deno

\`\`\`
import {compose, add} from 'https://raw.githubusercontent.com/selfrefactor/{{lib}}/master/dist/{{lib}}.esm.js'
\`\`\`
`

  return template(installInfoTemplate, { lib : withRambdax ? 'rambdax' : 'rambda' })
}

async function getMissingMethods(){
  const rambdaMethods = await getRambdaMethods()
  const missingMethodsTemplate = `
- More generic methods

\`Ramda\` has an overwhelming list of methods, as one could get lost putting all these methods in one's head. \`Rambda\` has smaller method counts and that could be seen as advantage.

<details>
<summary>
  Click to see the full list of {{counter}} Ramda methods not implemented in Rambda 
</summary>

{{missingMethods}}
</details>
  `

  let counter = 0
  const missingMethods = Object.keys(Ramda)
    .map(ramdaMethod => {
      if (rambdaMethods.includes(ramdaMethod)) return false
      counter++

      return `- ${ ramdaMethod }\n`
    })
    .filter(Boolean)
    .join('')

  return template(missingMethodsTemplate, {
    missingMethods,
    counter,
  })
}

const templateIntro = `
{{intro}}
{{missingMethods}}
{{installInfo}}
{{introEnd}}

## Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with \`Ramda\` and \`Rambda\`(i.e. no \`Lodash\`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*({{lodashVersion}}) and *Ramda*({{ramdaVersion}}).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
{{summary}}

</details>

## Used by

{{usedBy}}
`

async function getTreeShakingInfo(){
  const fallback = '2'
  const comparedPath = resolve(__dirname,
    '../../../rambda-tree-shaking/compared.json')
  if (!existsSync(comparedPath)){
    log('Using fallback in tree shaking info', 'box')

    return fallback
  }
  const compared = await readJson(comparedPath)

  return compared.ramdaVsRambda
}

async function getIntroContent(withRambdax){
  const filePath = withRambdax ?
    `${ __dirname }/assets/INTRO_RAMBDAX.md` :
    `${ __dirname }/assets/INTRO.md`

  const content = await readFile(filePath)
  const advantages = await readFile(`${ __dirname }/assets/ADVANTAGES.md`)
  const rambdaTreeShakingInfo = await getTreeShakingInfo()

  return template(content.toString(), {
    rambdaTreeShakingInfo,
    advantages,
  })
}

export async function getIntro(withRambdax){
  const introContent = await getIntroContent(withRambdax)
  const introEndContent = await readFile(`${ __dirname }/assets/INTRO_END.md`)
  const usedByContent = await readFile(`${ __dirname }/assets/USED_BY.md`)
  const summaryContent = await readFile(resolve(__dirname, '../read-benchmarks/summary.txt'))

  const missingMethods = await getMissingMethods()
  const installInfo = getInstallInfo(withRambdax)

  return template(templateIntro, {
    introEnd      : introEndContent.toString(),
    missingMethods,
    installInfo,
    intro         : introContent.toString(),
    summary       : summaryContent.toString(),
    usedBy        : usedByContent.toString(),
    lodashVersion : devDependencies.lodash,
    ramdaVersion  : devDependencies.ramda,
  })
}
