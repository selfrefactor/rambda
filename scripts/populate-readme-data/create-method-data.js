import { template } from 'rambdax'

function createFailedSpecReadme(method){
  const summaryTemplate = `
<details>

<summary>

Rambda.{{methodName}} failed spec against **Ramda.{{methodName}}** 

> Reason for the failure: {{failedSpecsReasons}}

</summary>

{{failedRamdaSpecs}}

<details>
`

  return template(summaryTemplate, method)
}

export function createMethodData(method){
  const data = [ `### ${ method.methodName }`, `> ${ method.typing }` ]

  if (method.explanation) data.push(method.explanation)

  if (method.example){
    data.push(`
\`\`\`javascript
${ method.example }
\`\`\`
    `.trim())
  }

  if (method.note){
    data.push(`
> Note
${ method.note }
    `.trim())
  }
  if (method.failedRamdaSpecs && method.failedSpecsReasons){
    data.push(createFailedSpecReadme(method))
  }
  if (method.rambdaSpecs){
    data.push(method.rambdaSpecs)
  }
  if (method.typesciptSpecs){
    data.push(method.typescriptSpecs)
  }

  return data.join('\n\n')
}
