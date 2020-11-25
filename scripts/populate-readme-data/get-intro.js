import { existsSync } from 'fs'
import { readFile, readJson } from 'fs-extra'
import { log } from 'helpers-fn'
import { resolve } from 'path'
import { interpolate } from 'rambdax'
import * as Ramda from 'ramda'

import { devDependencies } from '../../package'
import { getRambdaMethods, getSeparator} from '../utils'

function getInstallInfo(withRambdax){
  const installInfoTemplate = `## ➤ Install

- **yarn add {{lib}}**

- For UMD usage either use \`./dist/{{lib}}.umd.js\` or the following CDN link:

\`\`\`
https://unpkg.com/{{lib}}@CURRENT_VERSION/dist/{{lib}}.umd.js
\`\`\`

- with deno

\`\`\`
import {compose, add} from 'https://raw.githubusercontent.com/selfrefactor/{{lib}}/master/dist/{{lib}}.esm.js'
\`\`\`

{{separator}}
`

  return interpolate(installInfoTemplate, { lib : withRambdax ? 'rambdax' : 'rambda', separator: getSeparator('install') })
}

async function getMissingMethods(){
  const rambdaMethods = await getRambdaMethods()
  const missingMethodsTemplate = `
## ➤ Missing Ramda methods

<details>
<summary>
  Click to see the full list of {{counter}} Ramda methods not implemented in Rambda 
</summary>

{{missingMethods}}
</details>

{{separator}}
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

  return interpolate(missingMethodsTemplate, {
    missingMethods,
    counter,
    separator: getSeparator('missing-ramda-methods')
  })
}

const templateIntro = `
{{intro}}
{{missingMethods}}
{{installInfo}}
{{introEnd}}

## ➤ Benchmarks

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

{{benchmarksSeparator}}

## ➤ Used by

{{usedBy}}

{{usedBySeparator}}
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
  const rambdaTreeShakingInfo = await getTreeShakingInfo()

  const filePath = withRambdax ?
    `${ __dirname }/assets/INTRO_RAMBDAX.md` :
    `${ __dirname }/assets/INTRO.md`

  const advantagesFilePath = withRambdax ?
    `${ __dirname }/assets/ADVANTAGES_RAMBDAX.md` :
    `${ __dirname }/assets/ADVANTAGES.md`
  const advantagesTemplate = (await readFile(advantagesFilePath)).toString()

  const advantages = interpolate(advantagesTemplate, { rambdaTreeShakingInfo })
  const content = (await readFile(filePath)).toString()

  return interpolate(content, {
    rambdaTreeShakingInfo,
    advantages,
  })
}

async function getIntroEnd(withRambdax){
  const introEndContent = (await readFile(`${ __dirname }/assets/INTRO_END.md`)).toString()
  const suggestPR = `
> If you need more **Ramda** methods in **Rambda**, you may either submit a \`PR\` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)
`.trim()

  return interpolate(introEndContent, {suggestPR: withRambdax ? '\n': '\n' + suggestPR + '\n'})
}


export async function getIntro(withRambdax){
  const introContent = await getIntroContent(withRambdax)
  const usedByContent = await readFile(`${ __dirname }/assets/USED_BY.md`)
  const summaryContent = await readFile(resolve(__dirname, '../read-benchmarks/summary.txt'))
  const introEndContent = await getIntroEnd(withRambdax)
  const missingMethods = await getMissingMethods()
  const installInfo = getInstallInfo(withRambdax)

  return interpolate(templateIntro, {
    benchmarksSeparator: getSeparator('benchmarks'),
    usedBySeparator: getSeparator('used-by'),
    introEnd      : introEndContent,
    missingMethods,
    installInfo,
    intro         : introContent.toString(),
    summary       : summaryContent.toString(),
    usedBy        : usedByContent.toString(),
    lodashVersion : devDependencies.lodash,
    ramdaVersion  : devDependencies.ramda,
  })
}
