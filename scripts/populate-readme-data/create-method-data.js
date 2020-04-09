import { template } from 'rambdax'

function createFailedSpecReadme(method){
  const summaryTemplate = `
<details>

<summary>

Failed **Ramda.{{methodName}}** specs

> Reason for the failure: {{failedSpecsReasons}}

</summary>

\`\`\`javascript
{{failedRamdaSpecs}}
\`\`\`


</details>
`

  return template(summaryTemplate, method)
}

function createRambdaSpecReadme({methodName, rambdaSpecs}){
  const summaryTemplate = `
<details>

<summary>

**Rambda.{{methodName}}** tests

</summary>

\`\`\`javascript
{{rambdaSpecs}}
\`\`\`

</details>
`

  return template(summaryTemplate, {methodName, rambdaSpecs: rambdaSpecs.trim()})
}

export function createMethodData(method){
  const data = [ `### ${ method.methodName }`, '\n\n', `> ${ method.typing }`, '\n\n' ]
  if (method.explanation) data.push(method.explanation)
  if (method.explanation) data.push('\n')
  if (method.example){
    data.push(`
\`\`\`javascript
${ method.example }
\`\`\`
`)
}

  if (method.note){
    data.push(`
> Note
${ method.note }`)
  }
  if (method.rambdaSpecs){
    data.push(createRambdaSpecReadme(method))
  }

  if (method.failedRamdaSpecs && method.failedSpecsReasons){
    data.push(createFailedSpecReadme(method))
  }

  if (method.typescriptSpecs){
    data.push(method.typescriptSpecs)
  }

  return data.join('')
}
