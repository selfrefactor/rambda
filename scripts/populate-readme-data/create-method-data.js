import { template } from 'rambdax'

function createFailedSpec(method){
  const summaryTemplate = `
<details>

<summary> Failed <italic>Ramda.{{methodName}}</italic> specs

> Reason for the failure: {{failedSpecsReasons}}
</summary>

\`\`\`javascript
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

\`\`\`javascript
{{benchmarkContent}}
\`\`\`

</details>
`

  return template(summaryTemplate, method.benchmarkInfo)
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

const getIntro = ({ methodName, typing }) => [
  `### ${ methodName }`,
  '\n\n',
  `> ${ typing }`,
  '\n\n',
]

function createReplReadme({ replLink, methodName }){
  return `\n<a title="redirect to Rambda Repl site" href="${ replLink }">Try the above <strong>R.${ methodName }</strong> example in Rambda REPL</a>`
}

export function createMethodData(method){
  const data = getIntro(method)
  const hasFailedSpec = method.failedRamdaSpecs && method.failedSpecsReasons
  if (method.explanation) data.push(method.explanation)
  if (method.explanation) data.push('\n')
  if (method.example) data.push(createExampleReadme(method))
  if (method.replLink) data.push(createReplReadme(method))
  if (method.replLink) data.push('\n')
  if (method.note) data.push(createNoteReadme(method))
  if (method.rambdaSource) data.push(createRambdaSourceReadme(method))
  if (method.rambdaSpecs) data.push(createRambdaSpecReadme(method))
  if (method.typescriptDefinitionTest)
    data.push(createTypescriptTest(method))
  if (method.benchmarkInfo) data.push(createBenchmarkInfo(method))
  if (hasFailedSpec) data.push(createFailedSpec(method))

  return data.join('')
}
