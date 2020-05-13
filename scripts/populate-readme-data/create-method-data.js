import { template } from 'rambdax'

function createFailedSpec(method){
  const summaryTemplate = `
<details>

<summary> Failed <italic>Ramda.{{methodName}}</italic> specs

> Reason for the failure: {{failedSpecsReasons}}
</summary>

\`\`\`text
{{failedRamdaSpecs}}
\`\`\`


</details>
`

  return template(summaryTemplate, method)
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

  return template(summaryTemplate, method)
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

  return template(summaryTemplate, method)
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

  return template(summaryTemplate, method)
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

  return template(summaryTemplate, method.benchmarkInfo)
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

  return template(allTypingsTemplate, method)
}

const createExampleReadme = ({ example }) => `
\`\`\`javascript
${ example }
\`\`\`
`

const createNoteReadme = ({ note }) => `
> Note
${ note }
`

const attachTyping = ({ typing }) => `
\`\`\`typescript
${ typing }
\`\`\`
\n`

const getIntro = ({ methodName }) => [ `### ${ methodName }`, '\n\n' ]

function createReplReadme({ replLink, methodName }){
  return `\n<a title="redirect to Rambda Repl site" href="${ replLink }">Try the above <strong>R.${ methodName }</strong> example in Rambda REPL</a>`
}

export function createMethodData(method){
  const data = getIntro(method)
  const hasFailedSpec = method.failedRamdaSpecs && method.failedSpecsReasons

  if (method.typing) data.push(attachTyping(method))
  if (method.explanation) data.push(method.explanation)
  if (method.explanation) data.push('\n')
  if (method.example) data.push(createExampleReadme(method))
  if (method.replLink) data.push(createReplReadme(method))
  if (method.replLink) data.push('\n')
  if (method.allTypings) data.push(attachAllTypings(method))
  if (method.note) data.push(createNoteReadme(method))
  if (method.rambdaSource) data.push(createRambdaSourceReadme(method))
  if (method.rambdaSpecs) data.push(createRambdaSpecReadme(method))

  if (method.typescriptDefinitionTest)
    data.push(createTypescriptTest(method))

  if (method.benchmarkInfo) data.push(createBenchmarkInfo(method))
  if (hasFailedSpec) data.push(createFailedSpec(method))

  return data.join('')
}
