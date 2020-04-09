import { readFile } from 'fs-extra'
import { resolve } from 'path'
import { template } from 'rambdax'

const templateIntro = `
{{intro}}
## Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with \`Ramda\` and \`Rambda\`(i.e. no \`Lodash\`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
{{summary}}

<details>

## Used by

{{usedBy}}
`

export async function getIntro(){
  const introContent = await readFile(`${ __dirname }/assets/INTRO.md`)
  const usedByContent = await readFile(`${ __dirname }/assets/USED_BY.md`)
  const summaryContent = await readFile(resolve(__dirname, '../read-benchmarks/summary.txt'))

  return template(templateIntro, {
    intro   : introContent.toString(),
    summary : summaryContent.toString(),
    usedBy  : usedByContent.toString(),
  })
}
