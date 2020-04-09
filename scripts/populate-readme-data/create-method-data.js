import { template } from 'rambdax'

function createFailedSpec(method){
  const summaryTemplate = `
<details>

<summary> Failed Ramda.{{methodName}} specs

> Reason for the failure: {{failedSpecsReasons}}
</summary>

\`\`\`javascript
{{failedRamdaSpecs}}
\`\`\`


</details>
`

  return template(summaryTemplate, method)
}

function createRambdaSpecReadme({rambdaSpecs}){
  const summaryTemplate = `
<details>

<summary>Tests</summary>

\`\`\`javascript
{{rambdaSpecs}}
\`\`\`

</details>
`

  return template(summaryTemplate, {rambdaSpecs: rambdaSpecs.trim()})
}

function createTypescriptTest({typescriptDefinitionTest}){
  const summaryTemplate = `
<details>

<summary>Typescript test</summary>

\`\`\`typescript
{{typescriptDefinitionTest}}
\`\`\`

</details>
`

  return template(summaryTemplate, {typescriptDefinitionTest: typescriptDefinitionTest.trim()})
}

const createExampleReadme = ({example}) => `
\`\`\`javascript
${example }
\`\`\`
`

const createNoteReadme = ({note}) => `
> Note
${ note }
`

const getIntro = ({methodName, typing}) =>{
  return [ `### ${ methodName }`, '\n\n', `> ${ typing }`, '\n\n' ]
}

function createReplReadme({replLink, methodName}){
  // return `\n[Try R.${methodName} in REPL](${replLink}){target="_blank"}`
  return `\n<a target="_blank" title="opens in a new window" href="${replLink}">Try <strong>R.${methodName}</strong> in REPL</a>`
}

export function createMethodData(method){
  const data = getIntro(method)
  const hasFailedSpec = method.failedRamdaSpecs && method.failedSpecsReasons

  if (method.explanation) data.push(method.explanation)
  if (method.explanation) data.push('\n')
  if (method.example)data.push(createExampleReadme(method))
  if (method.note) data.push(createNoteReadme(method))
  if (method.rambdaSpecs)data.push(createRambdaSpecReadme(method))
  if (method.typescriptDefinitionTest)data.push(createTypescriptTest(method))
  if (hasFailedSpec)data.push(createFailedSpec(method))
  if (method.replLink)data.push(createReplReadme(method))

  return data.join('')
}
