import { readFile } from 'fs-extra'
import { resolve } from 'path'
import { template } from 'rambdax'

const templateIntro = `
{{introContent}}

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with \`Ramda\` and \`Rambda\`(i.e. no \`Lodash\`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

{{summaryContent}}

<details>
`

export async function getIntro(){
  const introContent = await readFile(`${ __dirname }/INTRO.md`)
  const summaryContent = await readFile(resolve(__dirname, '../read-benchmarks/summary.txt'))

  return template(templateIntro, {
    introContent   : introContent.toString(),
    summaryContent : summaryContent.toString(),
  })
}
