import { interpolate } from 'rambdax'
import { getMethodSeparator } from '../utils'

function createFailedSpec(method){
  const summaryTemplate = `
<details>

<summary>{{failedSpecsCount}} failed <italic>Ramda.{{methodName}}</italic> specs

> :boom: Reason for the failure: {{failedSpecsReasons}}
</summary>

\`\`\`javascript
{{failedRamdaSpecs}}
\`\`\`


</details>
`

  const shortSummaryTemplate = `
*{{failedSpecsCount}} failed Ramda.{{methodName}} specs*

> :boom: Reason for the failure: {{failedSpecsReasons}}
`

  const templateToUse = method.failedRamdaSpecs ?
    summaryTemplate :
    shortSummaryTemplate

  return interpolate(templateToUse, method)
}

function createRambdaSpecReadme(method){
  const summaryTemplate = `
<details>

<summary><strong>Tests</strong></summary>

\`\`\`javascript
{{rambdaSpecs}}
\`\`\`

</details>
`

  return interpolate(summaryTemplate, method)
}

function createRambdaSourceReadme(method){
  const summaryTemplate = `
<details>

<summary><strong>R.{{methodName}}</strong> source</summary>

\`\`\`javascript
{{rambdaSource}}
\`\`\`

</details>
`

  return interpolate(summaryTemplate, method)
}

function createTypescriptTest(method){
  const summaryTemplate = `
<details>

<summary><strong>Typescript</strong> test</summary>

\`\`\`typescript
{{typescriptDefinitionTest}}
\`\`\`

</details>
`

  return interpolate(summaryTemplate, method)
}

function createBenchmarkInfo(method){
  const summaryTemplate = `
<details>

<summary>{{methodSummary}}</summary>

\`\`\`text
{{benchmarkContent}}
\`\`\`

</details>
`

  return interpolate(summaryTemplate, method.benchmarkInfo)
}

function attachAllTypings(method){
  const allTypingsTemplate = `
<details>

<summary>All Typescript definitions</summary>

\`\`\`typescript
{{allTypings}}
\`\`\`

</details>
`

  return interpolate(allTypingsTemplate, method)
}

const createExampleReadme = ({ example }) => `
\`\`\`javascript
${ example }
\`\`\`
`

const createNoteReadme = ({ notes }) => `

> :boom: ${ notes }
`

const attachTyping = ({ typing }) => `
\`\`\`typescript
${ typing }
\`\`\`
\n`

const getIntro = ({ methodName }) => [ `### ${ methodName }`, '\n\n' ]

function createReplReadme({ replLink, methodName }){
  return `\n<a title="redirect to Rambda Repl site" href="${ replLink }">Try this <strong>R.${ methodName }</strong> example in Rambda REPL</a>`
}

export function createMethodData(method, withRambdax){
  const data = getIntro(method)
  const extended = !withRambdax

  if (method.typing) data.push(attachTyping(method))
  if (method.explanation) data.push(method.explanation)
  if (method.explanation) data.push('\n')
  if (method.notes) data.push(createNoteReadme(method))
  if (method.example) data.push(createExampleReadme(method))
  if (method.replLink) data.push(createReplReadme(method))
  if (method.replLink) data.push('\n')
  if (method.allTypings) data.push(attachAllTypings(method))
  if (method.rambdaSource && extended)
    data.push(createRambdaSourceReadme(method))
  if (method.rambdaSpecs) data.push(createRambdaSpecReadme(method))

  if (method.typescriptDefinitionTest && extended){
    data.push(createTypescriptTest(method))
  }

  if (method.benchmarkInfo && extended)
    data.push(createBenchmarkInfo(method))
  if (method.failedSpecsReasons && extended)
    data.push(createFailedSpec(method))

  data.push(`\n${getMethodSeparator(method.methodName)}\n`)

  return data.join('')
}
